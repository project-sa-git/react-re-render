import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const clickAddCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>カウントのたびにstateの更新（再レンダリング）</h1>
      <p>{count}</p>
      <button onClick={clickAddCount}>カウントアップ</button>
    </>
  );
}
