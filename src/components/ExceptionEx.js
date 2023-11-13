export const ExceptionEx = () => {
  try {
    //예외가 발생할 것 같은 코드를 삽입
    //값; // => syntax 에러 발생 시킴
    console.log("덧셈: " + (1 + 1));
  } catch (error) {
    // 예외 발생시  catch단의 코드가 실행됨
    // error매개변수로 어떤 에러가 발생했는지 알아올 수 있음
    console.log("에러: " + error);
  } finally {
    console.log("예외 발생 유무를 따지지 않고 무조건 실행");
  }
  return <div></div>;
};

// => 자바스크립트 코드
//* 오류는 크게 2가지
// 1. 런타임(runtime) 에러
// => 실행 중 에러가 발생했을 때

// 2. 문법 (syntax error) 에러
// => 실행 전 발생하는 에러
