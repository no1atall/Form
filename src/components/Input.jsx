import React, { forwardRef } from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 6),
  },
}));

const Input = forwardRef((props, ref) => {
  const styles = useStyles();

  return (
    <TextField
      className={styles.root}
      variant="outlined"
      inputRef={ref}
      {...props}
    />
  );
});

export default Input;
