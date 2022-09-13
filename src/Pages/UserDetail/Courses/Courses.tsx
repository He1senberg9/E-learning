import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "configStore";
import CourseCard from "Components/CourseCard/CourseCard";
import { Grid, styled, Divider, Tabs, Tab, Box } from "@mui/material";
import CourseItem from "Pages/HomePage/CourseItem/CourseItem";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const StyledTab = styled(Tab)({
  width: "calc(100%/3)",
});
const GridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "33%",
  },
}));
function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      style={{ padding: "15px" }}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

export default function Courses() {
  const { courseList } = useSelector((state: RootState) => state.courseSlice);
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxHeight: "1000px", overflowY: "auto" }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <StyledTab label="Unregistered Courses" />
          <StyledTab label="Pending Courses" />
          <StyledTab label="Approved Courses" />
        </Tabs>
      </Box>
      <Divider />
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container>
          {courseList?.map((course) => {
            return (
              <GridItem>
                <CourseItem key={course.maKhoaHoc} course={course} />
              </GridItem>
            );
          })}
        </Grid>
      </TabPanel>
    </Box>
  );
}
