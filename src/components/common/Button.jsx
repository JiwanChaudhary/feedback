import React from "react";
import PropTypes from "prop-types";
import { SubmitButton } from "../../styledComponents/Button.styled";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <SubmitButton type={type} disabled={isDisabled} className={`btn-${version}`}>
      {children}
    </SubmitButton>
  );
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
