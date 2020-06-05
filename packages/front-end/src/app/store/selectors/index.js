export const selectIsLoading = (state) => state.statusLoading;
export const selectData = (state) => state.data;
export const selectCount = (state) => state.pagination.count;
export const selectCurrentPage = (state) => state.pagination.currentPage;
export const selectPerPage = (state) => state.pagination.perPage;
export const selectPageCount = (state) => state.pagination.pageCount;
export const selectSearchField = (state) => state.search.field
