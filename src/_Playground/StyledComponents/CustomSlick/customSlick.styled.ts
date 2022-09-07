import { theme } from "GlobalStyles";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CustomArrow = styled(Box)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: max-content;
  height: max-content;
  transition: all ease 0.4s;
  &::before,
  &::after {
    content: "";
  }
  & > * {
    transition: all ease 0.4s;
  }
  &:hover > * {
    color: ${theme.palette.secondary.main};
    transition: all ease 0.4s;
  }
`;
export const CustomSlickPrevArrow = styled(CustomArrow)(`
  left: 2%;
  &:hover > * {
    transform: translateX(10%); 
  }
`);

export const CustomSlickNextArrow = styled(CustomArrow)`
  right: 2%;
  &:hover > * {
    transform: translateX(-10%);
  }
`;
