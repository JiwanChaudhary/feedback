import React from "react";
import PropTypes from "prop-types";

function Card({ children }) {
  return <div>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
