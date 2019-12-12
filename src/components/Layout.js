import React from "react";

import { Container } from "@material-ui/core";

const Layout = ({ header, children }) => {
  return (
    <Container
      maxWidth="sm"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      {header}
      {children}
    </Container>
  );
};

export default Layout;
