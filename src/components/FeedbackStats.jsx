import React from "react";
import PropTypes from "prop-types";
import {
  WrapperFeedbackStats,
  AverageRating,
  TotalRating,
} from "../styledComponents/FeedbackStats.styled";

const FeedbackStats = ({ feedback }) => {
  let average =
    feedback.reduce((acc, cur) => {

      return Number(acc) + Number(cur.rating);
    }, 0) / feedback.length;

  average = average.toFixed(1);

  return (
    <WrapperFeedbackStats>
      <TotalRating>{feedback.length} Reviews</TotalRating>
      <AverageRating>
        Average rating: {isNaN(average) ? 0 : average}
      </AverageRating>
    </WrapperFeedbackStats>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
