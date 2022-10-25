import React, { useState, useCallback, useMemo } from "react";
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

  //　「useCallback」関数側のmemo化
  const onClickClose = useCallback(() => setOpen(false), [setOpen])

  // 「useMemo」変数のメモ化（複雑になった時用）
  // 第二引数の[]は最初に読み込まれた時のみレンダリングにする記載
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <>
      <h1>カウントのたびにstateの更新（再レンダリング）</h1>
      <p>{count}</p>
      <button onClick={clickAddCount}>カウントアップ</button>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </>
  );
}
