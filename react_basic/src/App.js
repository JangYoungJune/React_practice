import React, { useState } from 'react';
// import Counter from './Hooks/Counter';
import Counter from './Hooks/Counter_reducer';
// import Info from './Hooks/Info';
import Info from './Hooks/Info_reducer';
import Average from './Hooks/Average';

//Hook을 위한 App.js
const App = () => {
  // 카운터 처리
  // return <Counter />;

  // 인포 관련 처리

  // return <Info />;

  // const [visible, setVisible] = useState(false);
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? '숨기기' : '보이기'}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );

  // useMemo 처리 - 함수형 컴포넌트 연산 최적화
  return <Average />;
};

export default App;
