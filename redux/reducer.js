import { combineReducers } from "redux";

const initialPersistState = {
  currentUser: "none",
};

const initialSessionState = {
  count: 0,
};

const persistReducer = (state = initialPersistState, action) => {
  switch (action.type) {
    case "CHANGE_USER": {
      return { ...state, currentUser: action.user };
    }
    default:
      return state;
  }
};

const sessionReducer = (state = initialSessionState, action) => {
  switch (action.type) {
    case "ADD": {
      return { ...state, count: state.count + 1 };
    }
    case "SUBTRACT": {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
};

export default reducer = combineReducers({
  persistReducer: persistReducer,
  sessionReducer: sessionReducer,
});
