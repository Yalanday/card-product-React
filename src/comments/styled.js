import styled from "styled-components";
import { Li, P } from "/src/elements";
import Title from "/src/title/title";
import Button from "/src/button/button";

export const CommentsTitle = styled(Title)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const CommentsLi = styled(Li)`
  margin-bottom: 10px;
`;

export const CommentsButton = styled(Button)`
  margin-top: ${(props) => props.theme.indent};
`;

export const Name = styled.span`
  display: block;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.textColorMuted};
  margin-borrom: 5px;
`;

export const Text = styled(P)`
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.textColor};
`;
