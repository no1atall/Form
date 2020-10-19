import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0),
  },
}));

const MainBox = ({children, ...props}) => {
  const styles = useStyles();

  return (
    <Box
      border={2}
      borderRadius={16}
      borderColor={blue}
      boxShadow={6}
      className={styles.root}
      {...props}
    >
      {children}
    </Box>
  );
};

export default MainBox;
