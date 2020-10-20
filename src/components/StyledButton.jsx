import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin: 24px 48px 24px;

  input:hover {
    background-color: #223392;
  }
`;

const Button = styled.input`
  padding: 12px 22px;
  font-size: 1rem;
  color: #fff;
  background-color: #3f51b5;
  border-radius: 3px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const StyledButton = () => {
  return (
    <ButtonWrapper>
      <Button type="submit" value="SUBMIT" />
    </ButtonWrapper>
  );
};

export default StyledButton;
