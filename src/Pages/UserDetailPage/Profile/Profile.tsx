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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";

type Props = {};
type profileForm = {
  userName: string;
  name: string;
  email: string;
  phoneNumber: string;
  groupCode: string;
  role: string;
};
type inputName = "userName" | "name" | "email" | "phoneNumber";
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
const Profile = (props: Props) => {
  // MUI
  const [groupCurrency, setGroupCurrency] = React.useState("GP01");
  const [roleCurrency, setRoleCurrency] = React.useState("HV");
  const handleGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupCurrency(event.target.value);
  };
  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoleCurrency(event.target.value);
  };

  // useForm
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<profileForm>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const inputs: Array<{
    inputName: inputName;
    label: string;
    defaultValue: string;
  }> = [
    {
      inputName: "userName",
      label: "Account Name",
      defaultValue: "abcde",
    },
    {
      inputName: "name",
      label: "Name",
      defaultValue: "Duc Quang",
    },
    {
      inputName: "email",
      label: "Email",
      defaultValue: "hello@gmail.com",
    },
    {
      inputName: "phoneNumber",
      label: "Phone Number",
      defaultValue: "090938398",
    },
  ];
  const onSubmit = () => {};
  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          paddingY: 1,
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
          paddingY: 3,
          overflowY: "auto",
          "& .MuiTextField-root": { m: 1, width: { xs: "95%", sm: "80%" } },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        {inputs.map(({ inputName, label, defaultValue }) => (
          <TextField
            label={label}
            error={!!errors[inputName]}
            helperText={errors[inputName]?.message}
            defaultValue={defaultValue}
            disabled={inputName === "userName"}
            {...register(inputName)}
          />
        ))}
        <Controller
          name="groupCode"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
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
          )}
        />
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
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
          )}
        />
        <Button type="submit" sx={{ mt: 2 }} variant="contained">
          Save
        </Button>
      </Stack>
    </>
  );
};
export default Profile;
