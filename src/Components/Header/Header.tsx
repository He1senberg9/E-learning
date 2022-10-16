import React, { useState } from "react";
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
import { CourseCatalog } from "Interfaces/courseInterface";
import { useNavigate } from "react-router-dom";
type Props = {
  courseCatalogs: CourseCatalog[];
};
const Header = ({ courseCatalogs }: Props) => {
  const theme = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handleClick = (catalogID: string) => {
    navigate(`course-list/${catalogID}`);
  };

  // ...menu...
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
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
      {isLogin ? (
        <div>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
          <MenuItem onClick={handleMenuClose}>Register</MenuItem>
        </div>
      )}
    </Menu>
  );
  // ...menu...

  // ...drawer...
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
  // ...drawer...

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
              Course List
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
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
          <Box
            sx={{
              display: { xs: "none", md: isLogin ? "none" : "flex" },
              alignItems: "center",
            }}
          >
            <StyledButton color="inherit">Log In</StyledButton>
            <StyledButton color="inherit">Register</StyledButton>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: isLogin ? "flex" : "none" },
              alignItems: "center",
            }}
          >
            <StyledButton color="inherit" sx={{ marginRight: "5px" }}>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ marginRight: "10px" }}
              />{" "}
              Remy Sharp
            </StyledButton>
            <StyledButton color="inherit">
              {" "}
              <PowerSettingsNewIcon sx={{ marginRight: "5px" }} />
              Log Out
            </StyledButton>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              edge="end"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {isLogin ? (
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{}}
                />
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
