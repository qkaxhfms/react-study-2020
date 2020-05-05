import React from "react";

function Mail(props) {
  const { name, text } = props;
  return (
    <>
      <div id="mail">
        <h1>{name} 을 입력해 주새요</h1>
        <p>{text}를 입력해 주세요</p>
      </div>
    </>
  );
}

export default Mail;
