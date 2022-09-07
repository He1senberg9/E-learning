import { Box } from "@mui/material";
import React, { memo } from "react";

type Props = {
  children?: React.ReactNode;
};

const TabPanel = (props: Props) => {
  const { children, ...other } = props;

  return (
    <div role="tabpanel" {...other}>
      {<Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default memo(TabPanel);
