import React from "react";
import FeedbackData from "../data/FeedbackData";
import {
  Wrapper,
  KeyId,
  Card,
  Rating,
  Text,
} from "../styledComponents/FeedbackList.styled";

function FeedbackList() {
  return (
    <Wrapper>
      {FeedbackData.map((item) => (
        <KeyId key={item.id}>
          <Card>
            <Rating>{item.rating}</Rating>
            <Text>{item.text}</Text>
          </Card>
        </KeyId>
      ))}
    </Wrapper>
  );
}

export default FeedbackList;
