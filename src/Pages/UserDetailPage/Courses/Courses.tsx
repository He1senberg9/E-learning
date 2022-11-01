import React, { useEffect, useState, SyntheticEvent } from "react";
import CourseCard from "Components/CourseCard/CourseCard";
import { Grid, styled, Divider, Tabs, Tab, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "configStore";
import { CourseDetail } from "Interfaces/courseInterface";
import courseAPI from "Services/CourseAPI";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const StyledTabs = styled(Tabs)({
  overflow: "visible",
  "& .MuiTabs-scroller": {
    overflow: "visible !important",
    "& .MuiTabs-indicator": {
      bottom: "-1px",
    },
  },
});
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
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { userDetail } = useSelector((state: RootState) => state.userDetail);
  const [courseList, setCourseList] = useState<CourseDetail[]>([]);

  useEffect(() => {
    if (userDetail) {
      const list = userDetail.chiTietKhoaHocGhiDanh.map((item) => {
        return fetchCourse(item.maKhoaHoc);
      });
      Promise.all(list).then((value) => {
        setCourseList(value);
      });
    }
  }, [userDetail]);
  const fetchCourse = async (courseID: string) => {
    try {
      const data = await courseAPI.getCourseDetail(courseID);
      return data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <Box sx={{ width: "100%", maxHeight: "1000px", overflowY: "auto" }}>
      <Box>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Khóa học đã xét duyệt" />
          <StyledTab label="Khóa học chưa ghi danh" />
          <StyledTab label="Khóa học chờ xét duyệt" />
        </StyledTabs>
      </Box>
      <Divider />
      <TabPanel value={value} index={0}>
        <Grid container>
          {courseList?.map((item) => (
            <GridItem>
              <CourseCard course={item} />
            </GridItem>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Box>
  );
}
