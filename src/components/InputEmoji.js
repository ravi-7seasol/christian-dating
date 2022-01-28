import React, { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import Message from "./Message";

const InpEmoji = (props) => {
  const [text, setText] = useState("");
  function handleOnEnter(text) {
    props.getMData(text);
  }

  useEffect(() => {
    if (props.clearText) {
      setText("");
    }
  }, [props.clearText]);

  useEffect(() => {
    props.onHandaleChangeData(text);
    if (text.length > 0) {
      props.afterClear(false);
    }
  }, [text]);

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
