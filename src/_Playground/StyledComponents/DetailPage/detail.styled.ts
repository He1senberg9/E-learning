import { theme } from "GlobalStyles";
import styled from "styled-components";
import { Typography } from "@mui/material";

// Breadcrumb
export const BreadcrumbText = styled(Typography)`
  color: ${theme.palette.primary.contrastText};
  font-weight: 500;
  &:hover {
    color: ${theme.palette.secondary.main};
  }
`;
//Cover
export const DetailTitle = styled.p<{ color?: string }>`
  color: ${({ color }) =>
    color ? color : theme.palette.secondary.contrastText};
  font-size: 3rem;
  margin: 1rem 0;
`;

export const DetailText = styled.p<{ color?: string }>`
  color: ${({ color }) =>
    color ? color : theme.palette.secondary.contrastText};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6rem;
  text-align: justify;
`;

export const DetailDesc = styled(DetailText)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
