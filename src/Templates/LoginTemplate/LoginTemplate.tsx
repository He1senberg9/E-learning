import { Outlet } from "react-router-dom";
import { Paper, Stack, Box } from "@mui/material";
import Logo from "Components/Logo/Logo";
import { OverlayBackground } from "_Playground/StyledComponents/LoginPage/login.styled";
import background_login from "Assets/img/Background/background_login.jpg";

const LoginTemplate = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        background: `url(${background_login}) 100% 100% / cover no-repeat`,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{ position: "absolute", zIndex: "100", left: "10px", top: "10px" }}
      >
        <Logo />
      </Box>
      <Box sx={{ position: "relative", zIndex: "10" }}>
        <Paper sx={{ pt: 3, pb: 5, px: 2 }}>
          <Outlet />
        </Paper>
      </Box>
      <OverlayBackground />
    </Stack>
  );
};

export default LoginTemplate;
