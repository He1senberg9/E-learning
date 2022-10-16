import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Typography, Breadcrumbs, Link, styled } from "@mui/material";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const StyledLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "inherit",
  position: "relative",
  zIndex: 1,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs separator="›" sx={{ color: "#fff" }}>
        <StyledLink href="/">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          E-learning
        </StyledLink>
        <StyledLink href="/material-ui/getting-started/installation/">
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Core
        </StyledLink>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="primary.light"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
