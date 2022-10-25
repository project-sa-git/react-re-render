import { memo } from "react";

const style = {
  backgroundColor: "khaki"
};

// 「memo」 propsに変更がない限り、再レンダリングされない
export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildAreaがレンダリングされた");

  const data = [...Array(2000).keys()];
  console.log(data);
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
