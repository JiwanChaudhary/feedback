import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0 40px;
  list-style: none;
`;
export const Li = styled.li`
  position: relative;
  background: #f4f4f4;
  width: 50px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-size: 19px;
  border: 1px #eee solid;
  transition: 0.3s;

  &:hover {
    background: #ff6a95;
    color: #fff;
  }
`;
export const Input = styled.input``;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
