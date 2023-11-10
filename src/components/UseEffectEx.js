import { useEffect, useState } from "react";

export const UseEffectEx = () => {
  const [num, setNum] = useState(0);
  //   useEffect(() => {
  //     console.log("마운트(렌더링)와 업데이트(수정)할 때마다");
  //   });
  //   useEffect(() => {
  //     console.log("마운트될 때만 실행");
  //   }, []);
  useEffect(() => {
    console.log("num 값이 변경될 때에만 실행(처음 렌더링에는 실행됨)");
  }, [num]);

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

// 리액트가 기본적으로 하는 것
// mount: 첫 렌더링 (그림이 다 그려짐)
// update: 리 렌더링(다시 렌더링을 함)
// unmount: 화면에서 사라질 때 (다른 페이지로 이동할 때)
// useEffect 위와 같은 것들을 부수적으로 함수를 정의해주는 것

// *useEffect
// => 앱이 렌더링, 리렌더링, 페이지 이동 등 이런 상황에서
// 부수적인 동작을 할 때 사용
// deps = dependencies array
