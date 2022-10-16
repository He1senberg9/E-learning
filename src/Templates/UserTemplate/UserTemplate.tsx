import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SecurityIcon from "@mui/icons-material/Security";
import SchoolIcon from "@mui/icons-material/School";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Avatar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type Props = {};

const UserTemplate = (props: Props) => {
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
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 150, height: 150, margin: "0 auto" }}
            />
            <Typography
              align="center"
              variant="h5"
              sx={{ fontWeight: 600, marginTop: "20px" }}
            >
              Thái Tử Sang
            </Typography>
          </Box>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <List>
              {["Profile", "Account Security", "Courses"].map((item, index) => (
                <>
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
                </>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid xs={12} md={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserTemplate;
export {};
