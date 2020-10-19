import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
}));

const Form = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <form className={styles.root} {...props}>
      {children}
    </form>
  );
};

export default Form;
