import React from "react";
import { Ul } from "/src/elements";
import { CommentsLi, CommentsButton, Name, Text } from "./styled";

const Comments = ({ comments, onShowMore, allCommentsLenght }) => {
  return (
    <>
      <Ul>
        {comments.map((comment) => (
          <CommentsLi key={comment.id}>
            <Name>{comment.author}</Name>
            <Text>{comment.text}</Text>
          </CommentsLi>
        ))}
      </Ul>
      {allCommentsLenght > comments.length && (
        <CommentsButton onClick={onShowMore}>Показать ещё</CommentsButton>
      )}
    </>
  );
};

export default Comments;
