import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Table from "../../components/table";
import MainEffects from "../../store/effects";
import MainActions from "../../store/actions";
import PaginationComponent from "../../components/pagination/pagination.component";
import SearchFilterComponent from "../../components/search-filter/search-filter.component";

class MainPage extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div id="app">
        <h2>Job List</h2>
        <SearchFilterComponent/>
        <Table/>
        <PaginationComponent/>
      </div>
    );
  }
}

const mainActions = new MainActions();
const mainEffects = new MainEffects(mainActions);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(mainEffects.loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
