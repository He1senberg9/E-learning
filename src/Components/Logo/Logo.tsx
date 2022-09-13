import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <NavLink to={"/"} style={{ fontSize: "3rem", color: "#fff" }}>
        E-learning
      </NavLink>
    </Stack>
  );
};

export default Logo;
