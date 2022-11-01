import { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Container,
  Avatar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SecurityIcon from "@mui/icons-material/Security";
import SchoolIcon from "@mui/icons-material/School";
import { useSelector } from "react-redux";
import { RootState, dispatch } from "configStore";
import { getUserDetail } from "Slices/userDetailSlice";
import Profile from "Pages/UserDetailPage/Profile/Profile";
import Courses from "Pages/UserDetailPage/Courses/Courses";
import AccountSecurity from "Pages/UserDetailPage/AccountSecurity/AccountSecurity";

type Props = {};
const UserDetailPage = (props: Props) => {
  const tabList = ["Hồ Sơ", "Bảo mật tài khoản", "Các khóa học"];
  const [detailID, setDetailID] = useState("Hồ Sơ");
  const { userDetail } = useSelector((state: RootState) => state.userDetail);
  useEffect(() => {
    dispatch(getUserDetail());
  }, []);
  console.log(userDetail);
  const handleClick = (detailID: string) => {
    setDetailID(detailID);
  };
  return (
    <Container fixed sx={{ margin: "50px auto" }}>
      <Grid container sx={{ border: 1 }}>
        <Grid
          xs={12}
          md={3}
          sx={{
            borderRight: {
              md: 1,
            },
            borderBottom: {
              xs: 1,
              md: 0,
            },
          }}
        >
          <Box sx={{ padding: "40px 0" }}>
            <Avatar
              alt={userDetail?.hoTen}
              src="https://i.pravatar.cc"
              sx={{ width: 150, height: 150, margin: "0 auto" }}
            />
            <Typography
              align="center"
              variant="h5"
              sx={{ fontWeight: 600, marginTop: "20px" }}
            >
              {userDetail?.hoTen}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <List>
              {tabList.map((item, index) => (
                <Box key={index}>
                  <Divider sx={{ display: index === 0 ? "none" : "block" }} />
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => handleClick(item)}
                      sx={{
                        bgcolor:
                          item === detailID
                            ? "rgba(0, 0, 0, 0.1)"
                            : "transparent",
                      }}
                    >
                      <ListItemIcon>
                        {index === 0 && <AccountBoxIcon />}
                        {index === 1 && <SecurityIcon />}
                        {index === 2 && <SchoolIcon />}
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                </Box>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid xs={12} md={9}>
          {detailID === tabList[0] && <Profile />}
          {detailID === tabList[1] && <AccountSecurity />}
          {detailID === tabList[2] && <Courses />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetailPage;
export {};
