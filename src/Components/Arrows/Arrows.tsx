import { styled } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import react, { HTMLAttributes, MouseEventHandler } from "react";
type ArrowProps = {
  className?: string;
  style?: HTMLAttributes<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
const StyledDivLeft = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "-6vw",
  transform: "translateY(-50%)",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    left: "-10vw",
  },
  color: theme.palette.primary.light,
  ":hover": {
    color: theme.palette.primary.dark,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "50px",
  },
}));
const StyledDivRight = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  right: "-6vw",
  transform: "translateY(-50%)",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    right: "-10vw",
  },
  color: theme.palette.primary.light,
  ":hover": {
    color: theme.palette.primary.dark,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "50px",
  },
}));

export const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <StyledDivLeft onClick={onClick}>
      <ArrowBackIosIcon />
    </StyledDivLeft>
  );
};
export const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <StyledDivRight onClick={onClick}>
      <ArrowForwardIosIcon />
    </StyledDivRight>
  );
};
