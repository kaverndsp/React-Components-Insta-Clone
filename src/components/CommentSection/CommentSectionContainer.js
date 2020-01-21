// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  

  return (
    <div>
      {props.post.map(p => (
        
        <Comment post={p}/>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
