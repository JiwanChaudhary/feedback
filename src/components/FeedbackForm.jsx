import React, { useState } from "react";
import CommonCard from "./common/Card";
import Button from "./common/Button";
import RatingSelect from "./RatingSelect";
import {
  Form,
  YourFeedback,
  InputGroup,
  InputText,
  Message,
} from "../styledComponents/FeedbackForm.styled";

const FeedbackForm = ({ addFeedback }) => {
  const [text, setText] = useState("");
  const [disabled, isDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  function handleInputText(e) {
    setText(e.target.value);

    if (e.target.value === "" || e.target.value.trim().length <= 10) {
      isDisabled(true);
      setMessage("Text must be greater than 10 character");
    } else {
      isDisabled(false);
      setMessage("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addFeedback({ text, rating });
    setText("");
    setRating(null);
  }

  return (
    <CommonCard>
      <Form onSubmit={handleSubmit}>
        <YourFeedback>Please type your feedback below.</YourFeedback>
        <RatingSelect select={(rating) => setRating(rating)} />
        <InputGroup>
          <InputText
            type="text"
            placeholder="Write your feedback here"
            onChange={handleInputText}
            value={text}
          />
          <Button type="submit" version="primary" isDisabled={disabled}>
            Send
          </Button>
        </InputGroup>
        {message && <Message>{message}</Message>}
      </Form>
    </CommonCard>
  );
};

export default FeedbackForm;
