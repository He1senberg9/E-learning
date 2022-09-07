import { Tabs, Tab, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import { getCourseByCategory, getCourseCatalog } from "Slices/courseSlice";

const TabLabel = () => {
  const [value, setValue] = useState("BackEnd");
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCourseCatalog());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCourseByCategory(value));
    return () => {};
  }, [value, dispatch]);

  const { courseCatalog } = useSelector(
    (state: RootState) => state.courseSlice
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        {courseCatalog?.map((course) => (
          <Tab
            key={course.maDanhMuc}
            value={course.maDanhMuc}
            label={course.tenDanhMuc}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabLabel;
