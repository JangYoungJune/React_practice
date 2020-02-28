import { handleActions } from 'redux-actions';
import createRequestThunk from '../lib/createRequestThunk';
import * as api from '../lib/axios';

// 액션타입을 선언
// 한 요청당 3개를 만들어야 합니다.
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

// thunk 함수를 생성
// thunk 함수 내부에서는 시작할 때, 성공할 때 , 실패했을때 다른 액션을 디스패치합니다.

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기상태 선언
// 요청 중 로딩 중 상태는 loading 이라는 객체로 관리

const initialState = {
  post: null,
  users: null
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false //요청 완료
      },
      post: action.payload
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false
      },
      users: action.payload
    })
  },
  initialState
);

export default sample;
