import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 6, 3),
  },
}));

const PrimaryButton = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <p>
      <Button
        className={styles.root}
        type="submit"
        size="large"
        variant="contained"
        color="primary"
        {...props}
      >
        {children}
      </Button>
    </p>
  );
};

export default PrimaryButton;
