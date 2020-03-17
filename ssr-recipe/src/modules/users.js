import axios from "axios";

const GET_USER_PENDING = "users/GET_USER_PENDING";
const GET_USER_SUCCESS = "users/GET_USER_SUCCESS";
const GET_USER_FAILURE = "users/GET_USER_FAILURE";

const getUserPending = () => ({ type: GET_USER_PENDING });
const getUserSuccess = payload => ({ type: GET_USER_SUCCESS, payload });
const getUserFailure = payload => ({
  type: GET_USER_FAILURE,
  error: true,
  payload
});
export const getUsers = () => async dispatch => {
  try {
    dispatch(getUserPending());
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(getUserSuccess(response));
  } catch (e) {
    dispatch(getUserFailure(e));
    throw e;
  }
};

const initialState = {
  users: null,
  user: null,
  loading: {
    users: false,
    user: false
  },
  error: {
    users: null,
    user: null
  }
};

function users(state = initialState, action) {
  switch (action.type) {
    case GET_USER_PENDING:
      return { ...state, loading: { ...state.loading, users: true } };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, users: false },
        users: action.payload.data
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          users: false
        },
        error: {
          ...state.error,
          users: action.payload
        }
      };
    default:
      return state;
  }
}

export default users;
