import React from "react";
import { Wrapper, Card, Rating, Text } from "../styledComponents/Feedback.styled"
function FeedbackItem({ item }) {
  return (
    <Wrapper>
      <Card>
        <Rating>{item.rating}</Rating>
        <Text>{item.text}</Text>
      </Card>
    </Wrapper>
  );
}

export default FeedbackItem;
