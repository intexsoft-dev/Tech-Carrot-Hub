import React, { PureComponent } from "react";
import { connect } from "react-redux";
import MainActions from "../../store/actions";

import { selectSearchField } from "../../store/selectors";

class SearchFilterComponent extends PureComponent {
  handleSearch = (e) => {
    this.props.searchFiled(e.target.value);
  };

  render() {
    const {search} = this.props;
    return (
      <div className="container pb-3">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-4">
            <form onSubmit={this.handleSearch}>
              <input
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                id="search-example"
                type="search"
                name="search"
                value={search}
                onChange={this.handleSearch}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mainActions = new MainActions();

const mapStateToProps = (state) => ({
  search: selectSearchField(state),
});

const mapDispatchToProps = (dispatch) => ({
  searchFiled: (value) => dispatch(mainActions.setSearchField(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilterComponent);
