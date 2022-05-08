import React, { useState } from "react";
import {Ul, Li, Input, Label} from "../styledComponents/RatingSelect.styled"

function RatingSelect({ select }) {
  const [selected, setSelected] = useState('');

  function handleChange(e) {
    setSelected(e.target.value);
    select(e.target.value);
  }

  return (
    <Ul>
      <Li>
        <Input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <Label htmlFor="num1">1</Label>
      </Li>
      <Li>
        <Input
          type="radio"
          id="num2"
          name="rating"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <Label htmlFor="num2">2</Label>
      </Li>
      <Li>
        <Input
          type="radio"
          id="num3"
          name="rating"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <Label htmlFor="num3">3</Label>
      </Li>
      <Li>
        <Input
          type="radio"
          id="num4"
          name="rating"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <Label htmlFor="num4">4</Label>
      </Li>
      <Li>
        <Input
          type="radio"
          id="num5"
          name="rating"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <Label htmlFor="num5">5</Label>
      </Li>
      <Li>
        <Input
          type="radio"
          id="num6"
          name="rating"
          value="6"
          onChange={handleChange}
          checked={selected === 6}
        />
        <Label htmlFor="num6">6</Label>
      </Li>
      <Li>
        <Input
          type="radio"
          id="num7"
          name="rating"
          value="7"
          onChange={handleChange}
          checked={selected === 7}
        />
        <Label htmlFor="num7">7</Label>
      </Li>
      <Li>
        <Input
          type="radio"
          id="num8"
          name="rating"
          value="8"
          onChange={handleChange}
          checked={selected === 8}
        />
        <Label htmlFor="num8">8</Label>
      </Li>
      <Li>
        <Input
          type="radio"
          id="num9"
          name="rating"
          value="9"
          onChange={handleChange}
          checked={selected === 9}
        />
        <Label htmlFor="num9">9</Label>
      </Li>
      <Li>
        <Input
          type="radio"
          id="num10"
          name="rating"
          value="10"
          onChange={handleChange}
          checked={selected === 10}
        />
        <Label htmlFor="num10">10</Label>
      </Li>
    </Ul>
  );
}

export default RatingSelect;
