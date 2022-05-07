import React from "react";
import PropTypes from "prop-types";
import {
  WrapperFeedbackStats,
  AverageRating,
} from "../styledComponents/FeedbackStats.styled";

const FeedbackStats = ({ feedback }) => {
  const average =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;
  console.log(average);

  return (
    <WrapperFeedbackStats>
      <AverageRating>Average rating: {average}</AverageRating>
    </WrapperFeedbackStats>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
