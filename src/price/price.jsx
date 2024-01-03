import React from "react";
import styled from "styled-components";

const Price = styled.span.attrs((props) => ({
  children: `${props.value} ₽`,
}))`
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
`;

export default Price;
