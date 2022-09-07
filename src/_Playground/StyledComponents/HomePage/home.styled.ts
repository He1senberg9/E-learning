import { theme } from "GlobalStyles";
import { Typography, Link } from "@mui/material";
import styled from "styled-components";

//COURSE ITEM
export const TitleText = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${theme.palette.secondary.contrastText};
  font-weight: 700;
  height: 3.8rem;
  line-height: 1.8rem;
`;

export const DescText = styled(TitleText)`
  -webkit-line-clamp: 3;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6rem;
  height: 5rem;
`;

//FOOTER

export const TitleFooter = styled(Typography)`
  font-size: 0.9rem;
  font-weight: 400;
`;

export const TextFooter = styled(Typography)`
  color: #9e9e9e;
  font-size: 0.85rem;
  font-weight: 300;
  transition: all 0.4s;
`;

export const LinkFooter = styled(Link)`
  color: #9e9e9e !important;
  font-size: 0.85rem;
  font-weight: 300;
  transition: all 0.4s;
  &:hover {
    color: ${theme.palette.secondary.light} !important;
  }
`;
