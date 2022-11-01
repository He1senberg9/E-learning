import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Avatar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useSelector } from "react-redux";
import { RootState, dispatch } from "configStore";
import { getUserDetail } from "Slices/userDetailSlice";
import EditProfile from "Pages/UserDetailPage/Profile/EditProfile";
import Courses from "Pages/UserDetailPage/Courses/Courses";
import AccountSecurity from "Pages/UserDetailPage/AccountSecurity/AccountSecurity";

type Props = {};

const UserTemplate = (props: Props) => {
  const { detailID = "" } = useParams();
  const { userDetail } = useSelector((state: RootState) => state.userDetail);
  useEffect(() => {
    dispatch(getUserDetail());
  }, []);
  console.log(userDetail);
  const navigate = useNavigate();
  const handleClick = (name: string) => {
    let url = "";
    switch (name) {
      case "Profile":
        url = "edit-profile";
        break;
      case "Account Security":
        url = "account-security";
        break;
      case "Courses":
        url = "courses";
        break;
      default:
        break;
    }
    navigate(`/user-detail/${url}`);
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
              {["Profile", "Account Security", "Courses"].map((item, index) => (
                <Box key={index}>
                  <Divider sx={{ display: index === 0 ? "none" : "block" }} />
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        handleClick(item);
                      }}
                    >
                      <ListItemIcon>
                        <AccountBoxIcon />
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
          {detailID === "edit-profile" && <EditProfile />}
          {detailID === "courses" && <Courses />}
          {detailID === "account-security" && <AccountSecurity />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserTemplate;
export {};
