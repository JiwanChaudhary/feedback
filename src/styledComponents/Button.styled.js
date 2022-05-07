import styled from "styled-components";

export const SubmitButton = styled.button`
  /* background-color: ${({disabled}) => (disabled ? '#cccccc' : '#ff6a95')}; */
  color: #fff;
  border: 0;
  border-radius: 8px;
  color: #fff;
  width: 100px;
  height: 40px;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  &:disabled {
    background-color: #cccccc;
    color: #333;
    cursor: auto;
  }

  &:disabled:hover {
    transform: scale(1);
    opacity: 1;
  }
`;
