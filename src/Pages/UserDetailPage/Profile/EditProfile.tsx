import * as React from "react";
import {
  TextField,
  Divider,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

const groupCurrencies = [
  {
    label: "Group 1",
    value: "GP01",
  },
  {
    label: "Group 2",
    value: "GP02",
  },
];
const roleCurrencies = [
  {
    label: "Teacher",
    value: "GV",
  },
  {
    label: "Student",
    value: "HV",
  },
];
export default function EditProfile() {
  const [groupCurrency, setGroupCurrency] = React.useState("GP01");
  const [roleCurrency, setRoleCurrency] = React.useState("HV");

  const handleGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupCurrency(event.target.value);
  };
  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoleCurrency(event.target.value);
  };

  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Typography variant="h5">Public Profile</Typography>
        <Typography variant="body1">Add information about yourself</Typography>
      </Toolbar>
      <Divider />
      <Stack
        alignItems="center"
        component="form"
        sx={{
          padding: "20px 0",
          overflowY: "auto",
          "& .MuiTextField-root": { m: 1, width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          label="Account Name"
          defaultValue="abcde"
          disabled
        />
        <TextField required label="Name" defaultValue="Thái Tử Sang" />
        <TextField required label="Phone Number" defaultValue="0809756138" />
        <TextField
          // error
          required
          label="Email"
          defaultValue="sangnguyen1345@gmail.com"
        />
        <TextField
          // error
          select
          value={groupCurrency}
          onChange={handleGroupChange}
          label="Group Code"
        >
          {groupCurrencies.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          // error
          select
          value={roleCurrency}
          onChange={handleRoleChange}
          label="Role"
        >
          {roleCurrencies.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>
        <Button sx={{ marginTop: "10px" }} variant="contained">
          Save
        </Button>
      </Stack>
    </>
  );
}
