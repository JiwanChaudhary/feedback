import styled from "styled-components";

export const Wrapper = styled.div`
padding: 0 20px;
`;

export const Card = styled.div`
  background-color: #fff;
  color: #333;
  margin: 20px 0;
  border-radius: 10px;
  position: relative;
`;
export const Rating = styled.div`
  position: relative;
  top: -15px;
  left: -15px;
  background: #ff6a95;
  color: #fff;
  width: 40px;
  height: 40px;
  padding: 4.5px;
  text-align: center;
  border-radius: 50%;
  font-size: 20px;
  border: 1px #eee solid;
  transition: 0.3s;
`;

export const Text = styled.p`
margin: 0;
padding: 5px;
position: relative;
top: -10px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  background: none;
  border: none;
`;
