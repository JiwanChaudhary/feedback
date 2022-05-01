import React from "react";
import PropTypes from "prop-types";
import {MainDiv, Container, Title} from "../styledComponents/Header.styled"

function Header({text}) {
  return (
      <MainDiv>
          <Container>
              <Title>{text}</Title>
          </Container>
      </MainDiv>
  );
}

Header.defaultProps = {
  text: "Feedback App",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
