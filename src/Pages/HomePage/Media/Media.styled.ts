import { Container, styled } from "@mui/material";
import backgroundVideo from "Assets/img/Background/background_video.jpg";

export const StyledDiv = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundImage: `url(${backgroundVideo})`,
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  marginTop: 30,
  "&::after": {
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    content: "''",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
}));
export const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "3vw ",
  paddingBottom: "3vw ",
});
export const StyledIframe = styled("iframe")(({ theme }) => ({
  zIndex: 1,
  "&:hover + div": {
    visibility: "visible",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
}));
export const Overlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  visibility: "hidden",
  width: "100vw",
  height: "100vh",
  transition: "0.5s",
});
