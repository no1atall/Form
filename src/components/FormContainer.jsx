import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

import MainBox from "./MainBox";
import Form from "./Form";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
// import StyledButton from "./StyledButton";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("Please fill in your first name to proceed"),

  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please include your email to proceed"),
  msg: yup.string().required("Please leave us a message"),
});

const KEY = process.env.REACT_APP_EMAILJS_API_KEY;

const FormContainer = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    
    emailjs.sendForm("gmail", "template_46k6smn", e.target, KEY).then(
      (result) => {
        console.log(result.text);
        console.log(
          "Your Email has been sent. I will get back to you shortly."
        );
      },
      (error) => {
        console.log(error.text);
        console.log(
          "Your Email failed to send. Please Check your infomation and try again."
        );
      }
    );
  };

  return (
    <MainBox>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="name"
          type="text"
          label="Name"
          name="name"
          error={!!errors.name}
          helperText={errors?.name?.message}
        />

        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <Input
          ref={register}
          id="subject"
          type="text"
          label="Subject"
          name="subject"
        />
        <Input
          ref={register}
          id="msg"
          label="Enter A Message"
          multiline={true}
          variant="outlined"
          name="msg"
          error={!!errors.msg}
          helperText={errors?.msg?.message}
        />

        {/* This is a styled button with material UI. Due to a bug with Netilfy, this button does not work as inteneded upon submit. Netlify requires an <input> field instead of a <button> field. As a work around, I made a <StyledButton> with styled components that does work as inteneded.  */}

        <PrimaryButton
          type="submit"
          size="large"
          variant="contained"
          color="primary"
        >
          Submit
        </PrimaryButton>

        {/* <StyledButton /> */}
      </Form>
    </MainBox>
  );
};

export default FormContainer;
