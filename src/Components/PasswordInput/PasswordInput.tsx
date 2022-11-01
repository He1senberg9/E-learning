import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UseFormRegisterReturn } from "react-hook-form";
type Props = {
  label: string;
  width?: string;
  helperText?: string;
  error?: boolean;
  register?: UseFormRegisterReturn;
};

const PasswordInput = (props: Props) => {
  const {
    label,
    width = "100%",
    helperText = "",
    error = false,
    register = {},
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ width: width, marginY: 1 }} variant="outlined">
      <InputLabel error={error}>{label}</InputLabel>
      <OutlinedInput
        {...register}
        error={error}
        type={showPassword ? "text" : "password"}
        autoComplete="on"
        // value={values.password}
        // onChange={handleChange("password")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default PasswordInput;
