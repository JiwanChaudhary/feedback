import React, { useState } from "react";
import CommonCard from "./common/Card";
import Button from "./common/Button";
import RatingSelect from "./RatingSelect";
import {
  Form,
  YourFeedback,
  InputGroup,
  InputText,
  SubmitButton,
} from "../styledComponents/FeedbackForm.styled";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [disabled, isDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  console.log(rating);

  function handleInputText(e) {
    setText(e.target.value);

    if (e.target.value === "" || e.target.value.trim().length <= 10) {
      isDisabled(true);
      setMessage("Text must be greater than 10 character");
    }
  }

  return (
    <CommonCard>
      <Form>
        <YourFeedback>Please type your feedback below.</YourFeedback>
        <RatingSelect select={(rating) => setRating(rating)} />
        <InputGroup>
          <InputText
            type="text"
            placeholder="Write your feedback here"
            onChange={handleInputText}
          />
          <SubmitButton type="submit" version="primary" isDisabled={disabled}>
            Send
          </SubmitButton>
        </InputGroup>
        {message && <p>{message}</p>}
      </Form>
    </CommonCard>
  );
};

export default FeedbackForm;
