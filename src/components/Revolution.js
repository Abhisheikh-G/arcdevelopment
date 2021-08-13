import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default Revolution = ({ props }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h2">The Revolution</Typography>
      </Grid>
    </Grid>
  );
};
