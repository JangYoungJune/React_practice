import { combineReducers } from 'redux';
import counter from './counter_action';
import todos from './todos_action';

// 루트 리듀서: 하나의 스토어에 리듀서 여러개를 써야 하기에 기존의 리듀서들을 하나로 합쳐주는 작업을 함
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
