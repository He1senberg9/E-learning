import { Box, Button, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import backgroundDetail from "Assets/img/Background/background_detail.jpg";

export const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundImage: `url(${backgroundDetail})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  "::after": {
    content: "''",
    position: "absolute",
    display: "block",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
}));
export const GridItem1 = styled(Grid)(({ theme }) => ({
  zIndex: 1,
  minHeight: "250px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));
export const GridItem2 = styled(Grid)({
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const StyledButton = styled(Button)(({ theme }) => ({
  marginRight: 20,
  borderRadius: "50px",
  borderColor: "#fff",
  color: "#fff",
  transition: "0.5s",
  ":hover": {
    backgroundColor: "#FF2626",
    borderColor: "#FF2626",
  },
}));
