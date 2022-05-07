import styled from "styled-components";

export const Form = styled.form`
  padding: 40px 20px;
`;

export const YourFeedback = styled.h3``;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 8px;
`;

export const InputText = styled.input`
  flex-grow: 2;
  border: none;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const SubmitButton = styled.button``;

export const Message = styled.div`
  padding-top: 10px;
  text-align: center;
  color: rebeccapurple;
`;
