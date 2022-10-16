import React from "react";
import {
  Divider,
  Toolbar,
  Typography,
  Stack,
  Button,
  Paper,
  styled,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PasswordInput from "./PasswordInput";

type Props = {};
const MyPaper = styled(Paper)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});
const MyStack = styled(Stack)({
  padding: "20px 0",
  overflowY: "auto",
  width: "80%",
  margin: "auto",
});

const AccountSecurity = (props: Props) => {
  return (
    <>
      {" "}
      <Toolbar
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Typography variant="h5">Account</Typography>
        <Typography variant="body1">
          Edit your account settings and change your password here
        </Typography>
      </Toolbar>
      <Divider />
      <MyStack alignItems="center">
        <Typography
          variant="subtitle1"
          sx={{ alignSelf: "flex-start", marginBottom: "5px" }}
        >
          Email:
        </Typography>
        <MyPaper variant="outlined">
          <Typography sx={{ flexGrow: "1", marginLeft: "5px" }}>
            Your email address is <b>sangnguyen1345@gmail.com</b>
          </Typography>
          <Button variant="text">
            <EditIcon />
          </Button>
        </MyPaper>
        <Divider
          sx={{
            margin: "40px 0",
            width: "100%",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{ alignSelf: "flex-start", marginBottom: "5px" }}
        >
          Change Password:
        </Typography>
        <PasswordInput label="Current Password" />
        <PasswordInput label="New Password" />
        <PasswordInput label="Re-type New Password" />
        <Button variant="contained">Save</Button>
      </MyStack>
    </>
  );
};

export default AccountSecurity;
export {};
