import React from "react";
import { FaTimes } from "react-icons/fa";
import { Rating, Text } from "../styledComponents/Feedback.styled";
import CommonCard from "./common/Card";

function FeedbackItem({ item, handleDelete }) {
  return (
    <CommonCard>
      <Rating>{item.rating}</Rating>
      <Text>{item.text}</Text>
      <button onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
    </CommonCard>
  );
}

export default FeedbackItem;
