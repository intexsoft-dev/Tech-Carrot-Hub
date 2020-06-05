import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import MainEffects from "../../store/effects";
import MainActions from "../../store/actions";
import {
  selectCount,
  selectCurrentPage,
  selectData, selectPageCount,
  selectPerPage, selectSearchField,
} from "../../store/selectors";

class TableComponent extends PureComponent {
  handleDeleteButton = (id) => {
    this.props.deleteData(id);
  };

  filterData = () => {
    const condition = new RegExp(this.props.searchField, 'i');
    return this.props.data.filter((el) => condition.test(el.title));
  }

  prepareDataToShow = () => {
    return this.filterData().slice(this.props.currentPage * this.props.perPage, (this.props.currentPage + 1) * this.props.perPage);
  };

  componentDidUpdate(prevProps) {
    const newCount = this.filterData().length
    if (newCount !== this.props.count) {
      if (!newCount) {
        this.props.setCount(1)
      } else {
        this.props.setCount(this.filterData().length)
      }
    }
  }

  render() {
    return (
      <div className="container">
        <Table>
          <thead>
          <tr>
            <th>Title</th>
            <th>Link</th>
            <th>isoDate</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {this.prepareDataToShow().map((el) => (
            <tr key={el.id}>
              <td>{el.title}</td>
              <td>{el.link}</td>
              <td>{el.isoDate}</td>
              <td key={el.id} onClick={() => this.handleDeleteButton(el.id)}>
                <svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mainActions = new MainActions();
const mainEffects = new MainEffects(mainActions);

const mapStateToProps = (state) => ({
  data: selectData(state),
  count: selectCount(state),
  perPage: selectPerPage(state),
  pageCount: selectPageCount(state),
  currentPage: selectCurrentPage(state),
  searchField: selectSearchField(state),
});
const mapDispatchToProps = (dispatch) => ({
  deleteData: (id) => dispatch(mainEffects.deleteData(id)),
  setCount: (number) => dispatch(mainActions.setCount(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
