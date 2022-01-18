import React, { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import Message from "./Message";

const InpEmoji = (props) => {
  const [text, setText] = useState("");
  function handleOnEnter(text) {
    props.getMData(text);
  }

  useEffect(() => {
    props.onHandaleChangeData(text)
  }, [text])

  return (
    <>
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder="Type a message"
      />
    </>
  );
};

export default InpEmoji;
