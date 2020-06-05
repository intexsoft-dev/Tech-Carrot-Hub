/*
 *  action types
 */

export const STATUS_LOADING = "STATUS_LOADING";
export const SET_DATA = "GET_DATA";
export const DELETE_ONE = "DELETE_ONE";
export const SET_ERROR = "SET_ERROR";
export const SET_COUNT = "GET_COUNT";
export const SET_CURRENT_PAGE = "CURRENT_PAGE";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_SEARCH_FIELD = "SET_SEARCH_FIELD"

/*
 * action creators
 */

export default class mainActions {
  statusLoading(payload) {
    return {type: STATUS_LOADING, payload};
  }

  setData(payload) {
    return {type: SET_DATA, payload};
  }

  deleteOne(payload) {
    return {type: DELETE_ONE, payload};
  }

  setError(payload) {
    return {type: SET_ERROR, payload};
  }

  setCount(payload) {
    return {type: SET_COUNT, payload: payload};
  }

  setCurrentPage(payload) {
    return {type: SET_CURRENT_PAGE, payload};
  }

  setPageCount(payload) {
    return {type: SET_PAGE_COUNT, payload};
  }

  setSearchField(payload) {
    return {type: SET_SEARCH_FIELD, payload};
  }
}
