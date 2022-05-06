import React, { useState } from "react";
import CommonCard from "./common/Card";
import Button from "./common/Button";
import { Form, YourFeedback, InputGroup, InputText, SubmitButton } from "../styledComponents/FeedbackForm.styled";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  function handleInputText(e) {
    console.log(e);
    setText(e.target.value);
  }

  return (
    <CommonCard>
      <Form>
        <YourFeedback>Please type your feedback below.</YourFeedback>
        <InputGroup>
          <InputText
            type="text"
            placeholder="Write your feedback here"
            onChange={handleInputText}
          />
          <SubmitButton type="submit" version="primary">
            Send
          </SubmitButton>
        </InputGroup>
        {text}
      </Form>
    </CommonCard>
  );
};

export default FeedbackForm;
