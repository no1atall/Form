import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textShadow: "1px 1px",
  },
}));

const Header = () => {
  const styles = useStyles();

  return (
    <Typography
      className={styles.root}
      color="primary"
      component="h1"
      variant="h3"
      align="center"
    >
      Contact Us
    </Typography>
  );
};

export default Header;
