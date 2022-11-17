import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  Drawer,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledButton,
} from "./Header.styled";
import avatar from "Assets/img/Avatar/avatar.jpg";
import { CourseCatalog } from "Interfaces/courseInterface";
import { useNavigate } from "react-router-dom";
import { dispatch, RootState } from "configStore";
import { logout } from "Slices/authSlice";
import { useSelector } from "react-redux";
import { getUserDetail } from "Slices/userDetailSlice";
import { changeKey } from "Slices/searchSlice";
type Props = {
  courseCatalogs: CourseCatalog[];
};
const Header = ({ courseCatalogs }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  const name = useSelector(
    (state: RootState) => state.userDetail.userDetail?.hoTen
  );
  useEffect(() => {
    dispatch(getUserDetail());
  }, []);
  const handleLogout = () => {
    dispatch(logout());
  };

  // --------- SearchKey ---------
  const [searchKey, setSearchKey] = useState<string>("");
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchKey(event.target.value);
  };
  const enterPressed = (event: React.KeyboardEvent) => {
    const code = event.code;
    if (code === "Enter") {
      navigate("/search-page");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => dispatch(changeKey(searchKey)), 300);
    return () => clearTimeout(timer);
  }, [searchKey]);
  // --------- SearchKey ---------

  // --------- Menu ---------
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = (name: string) => {
    setAnchorEl(null);
    switch (name) {
      case "Profile":
        navigate("/user-detail");
        break;
      case "Log Out":
        handleLogout();
        break;
      case "Log In":
        navigate("/login");
        break;
      case "Register":
        navigate("/register");
        break;
      default:
        break;
    }
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: theme.palette.primary.light,
        },
      }}
    >
      {user ? (
        <div>
          <MenuItem onClick={() => handleMenuClose("Profile")}>Hồ sơ</MenuItem>
          <MenuItem onClick={() => handleMenuClose("Log Out")}>
            Đăng xuất
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem onClick={() => handleMenuClose("Log In")}>
            Đăng nhập
          </MenuItem>
          <MenuItem onClick={() => handleMenuClose("Register")}>
            Đăng ký
          </MenuItem>
        </div>
      )}
    </Menu>
  );
  // --------- Menu ---------

  // --------- Drawer ---------
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsDrawerOpen(open);
    };
  const handleClick = (catalogID: string) => {
    navigate(`course-list/${catalogID}`);
  };
  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {courseCatalogs.map(({ tenDanhMuc, maDanhMuc }) => (
          <ListItem key={maDanhMuc} disablePadding>
            <ListItemButton
              onClick={() => {
                handleClick(maDanhMuc);
              }}
            >
              <ListItemText primary={tenDanhMuc} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={"all"} disablePadding>
          <ListItemButton
            onClick={() => {
              handleClick("");
            }}
          >
            <ListItemText primary={"Tất cả các khóa học"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  // --------- Drawer ---------

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: theme.palette.primary.dark }}
      >
        <Toolbar sx={{ padding: { md: "15px 100px" } }}>
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <Typography
              sx={{ marginLeft: "10px", display: { xs: "none", md: "inline" } }}
            >
              Danh sách khóa học
            </Typography>
          </IconButton>
          <Typography
            variant="h3"
            noWrap
            component="div"
            onClick={() => {
              navigate("");
            }}
            sx={{
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
            }}
          >
            E-learning
          </Typography>
          <Search>
            <SearchIconWrapper onClick={() => navigate("search-page")}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tìm kiếm ..."
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => enterPressed(event)}
            />
          </Search>
          {/* Showed for big screen,  not logged in*/}
          <Box
            sx={{
              display: { xs: "none", md: !user ? "flex" : "none" },
              alignItems: "center",
            }}
          >
            <StyledButton color="inherit" onClick={() => navigate("/login")}>
              Đăng nhập
            </StyledButton>
            <StyledButton color="inherit" onClick={() => navigate("/register")}>
              Đăng ký
            </StyledButton>
          </Box>
          {/* Showed for big screen, logged in*/}
          <Box
            sx={{
              display: { xs: "none", md: user ? "flex" : "none" },
              alignItems: "center",
            }}
          >
            <StyledButton
              color="inherit"
              sx={{ marginRight: "5px" }}
              onClick={() => navigate("/user-detail")}
            >
              <Avatar alt={name} src={avatar} sx={{ marginRight: "10px" }} />
              {name}
            </StyledButton>
            <StyledButton color="inherit" onClick={handleLogout}>
              <PowerSettingsNewIcon sx={{ marginRight: "5px" }} />
              Đăng xuất
            </StyledButton>
          </Box>
          {/* Showed for small screen */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              edge="end"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {user ? (
                <Avatar alt={name} src={avatar} sx={{}} />
              ) : (
                <AccountCircle sx={{ fontSize: "45px" }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
      {renderMenu}
    </>
  );
};

export default Header;
