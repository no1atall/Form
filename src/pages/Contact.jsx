import React from "react";

import { Container } from "@material-ui/core";

import Header from "../components/Header";
import FormContainer from "../components/FormContainer";

const Contact = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Header />
      <FormContainer />
    </Container>
  );
};

export default Contact;
