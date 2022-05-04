import React from "react";
import FeedbackItem from "../components/FeedbackItem";
import { Wrapper } from "../styledComponents/Feedback.styled";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return "No feedback found!";
  }

  return (
    <Wrapper>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </Wrapper>
  );
}

export default FeedbackList;
