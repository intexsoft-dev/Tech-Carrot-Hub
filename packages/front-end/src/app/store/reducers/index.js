import {
  STATUS_LOADING,
  SET_DATA,
  DELETE_ONE,
  SET_ERROR,
  SET_CURRENT_PAGE,
  SET_COUNT,
  SET_PAGE_COUNT,
  SET_SEARCH_FIELD,
} from "../actions";

const initialState = {
  statusLoading: false,
  data: [],
  error: null,
  pagination: {
    perPage: 5,
    currentPage: 0,
    count: 0,
    pageCount: 0,
  },
  search: {
    field: '',
    foundData: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STATUS_LOADING: {
      return {
        ...state,
        statusLoading: action.payload,
      };
    }
    case SET_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case DELETE_ONE: {
      return {
        ...state,
        data: state.data.filter((job) => job.id !== action.payload),
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_COUNT: {
      return {
        ...state,
        pagination: {...state.pagination, count: action.payload},
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        pagination: {...state.pagination, currentPage: action.payload},
      };
    }

    case SET_PAGE_COUNT: {
      return {
        ...state,
        pagination: {...state.pagination, pageCount: action.payload},
      };
    }
    case SET_SEARCH_FIELD: {
      return {
        ...state,
        search: {...state.search, field: action.payload}
      }
    }

    default:
      return state;
  }
};
