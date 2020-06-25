import * as types from "../actions/actionTypes";

const projectReducer = (
  state = {
    list: [],
    isFetching: false,
    lastFetch: null,
  },
  action
) => {
  switch (action.type) {
    case types.LOAD_PROJECTS:
      return {
        ...state,
        isFetching: true,
      };
    // case types.CREATE_PROJECT:
    //   return [...state, { ...action.project }];
    case types.LOAD_PROJECTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };

    case types.LOAD_PROJECTS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case types.SAVE_PROJECT:
      return {
        ...state,
        // list: [...state.list, { ...action.payload }],
      };

    case types.SAVE_PROJECT_SUCCESS:
      return {
        ...state,
        list: [...state.list, { ...action.payload }],
      };

    case types.SAVE_PROJECT_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default projectReducer;
