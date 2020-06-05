import React, { PureComponent } from "react";
import { connect } from "react-redux";
import MainEffects from "../../store/effects";
import MainActions from "../../store/actions";

import {
  selectCount,
  selectCurrentPage,
  selectData,
  selectPageCount,
  selectPerPage,
} from "../../store/selectors";
import ReactPaginate from "react-paginate";

class PaginationComponent extends PureComponent {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.count !== prevProps.count) {
      this.props.setPageCount(Math.ceil(this.props.count / this.props.perPage));
    }
  }

  handlePageClick = (data) => {
    this.props.setCurrentPage(data.selected);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              nextLinkClassName={"material-icons"}
              previousLinkClassName={"material-icons"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.props.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mainActions = new MainActions();
const mainEffects = new MainEffects(mainActions);

const mapStateToProps = (state) => ({
  count: selectCount(state),
  data: selectData(state),
  currentPage: selectCurrentPage(state),
  perPage: selectPerPage(state),
  pageCount: selectPageCount(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(mainEffects.loadData()),
  setData: (data) => dispatch(mainActions.setData(data)),
  setCurrentPage: (currentPage) =>
    dispatch(mainActions.setCurrentPage(currentPage)),
  setPageCount: (count) => dispatch(mainActions.setPageCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);
