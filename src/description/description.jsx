import React from "react";
import { DescriptionButton } from "./styled";

function Description({ text, onChowMore, isShowAllDescription }) {
  return (
    <>
      {text}
      <DescriptionButton onClick={onChowMore}>
        {isShowAllDescription ? "Скрыть" : "Подробнее"}
      </DescriptionButton>
    </>
  );
}

export default Description;
