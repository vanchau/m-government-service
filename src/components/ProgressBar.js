import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
import "../css/Report.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const ProgressBar = ({ current, total }) => {
  const classes = useStyles();
  const percentage = Math.round((current / total) * 100);
  return (
    <>
      <div className="report-title">
        Step {current} / {total}
      </div>
      <div className={classes.root}>
        <LinearProgress
          variant="determinate"
          value={percentage}
          color="primary"
        />
      </div>
    </>
  );
};

export default ProgressBar;
