import React, { useState } from "react";
import { ChildArea } from "./childArea";

export default function App() {
  const [count, setCount] = useState(0);
  const clickAddCount = () => {
    setCount(count + 1);
  };

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  return (
    <>
      <h1>カウントのたびにstateの更新（再レンダリング）</h1>
      <p>{count}</p>
      <button onClick={clickAddCount}>カウントアップ</button>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </>
  );
}
