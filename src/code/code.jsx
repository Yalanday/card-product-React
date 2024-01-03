import React from "react";
import styled from "styled-components";

const Code = styled.span.attrs((props) => ({
  children: `Артикул: ${props.children}`,
}))`
  color: ${(props) => props.theme.textColorMuted};
  font-size: 12px;
`;

export default Code;
