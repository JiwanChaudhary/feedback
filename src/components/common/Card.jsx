import React from "react";
import PropTypes from "prop-types";
import { Card } from "../../styledComponents/Feedback.styled";

function CommonCard({ children, isThereColor }) {
  return (
    <Card
      style={{
        backgroundColor: isThereColor ? "rgba(0,0,0,0.4)" : "white",
        color: isThereColor ? "#fff" : "#000",
      }}
    >
      {children}
    </Card>
  );
}

Card.defaultProps = {
  isThereColor: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  isThereColor: PropTypes.bool,
};

export default CommonCard;
