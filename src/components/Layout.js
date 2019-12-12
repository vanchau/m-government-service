import React from "react";

import { Grid } from "@material-ui/core";

const Layout = ({ header, children }) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        style={{ minHeight: "100%", padding: "10%"}}
      >
        <div>
          <h3>{header}</h3>
        </div>
        {children}
      </Grid>
    </div>
  );
};

export default Layout;
