import { Typography, Breadcrumbs, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { NavLink } from "react-router-dom";
import { BreadcrumbText } from "_Playground/StyledComponents/DetailPage/detail.styled";
type Props = {
  secondLevel: string | undefined;
  thirdLevel: string | undefined;
};

const BreadcrumbNav = ({ secondLevel, thirdLevel }: Props) => {
  return (
    <Box role="presentation">
      <Breadcrumbs sx={{ mx: 5, ml: 0 }} color="primary.contrastText">
        <NavLink to={"/"}>
          <BreadcrumbText>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Trang chủ
          </BreadcrumbText>
        </NavLink>
        <NavLink to={"/"}>
          <BreadcrumbText>
            <CategoryIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {secondLevel}
          </BreadcrumbText>
        </NavLink>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="secondary.main"
        >
          <AutoStoriesIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {thirdLevel}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbNav;
