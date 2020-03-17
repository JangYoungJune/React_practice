import { createContext, useContext } from "react";

// 서버 환경: {done: false, promise: []}
const PreloadContext = createContext(null);
export default PreloadContext;

//resolve는 함수 타입입니다.
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null; // context값이 유효하지 않는다면, 아무것도 하지않음
  if (preloadContext.done) return null; // 이미 작업이 끝났다면 아무것도 하지않음

  //promise배열에 프로미스 등록
  // 설령 resolve함수가 프로미스를 반환 안해도, 프로미스 취급을 위해
  // Promise.resolve 함수 사용
  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};
