import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Addapi from "./Addapi";
import MaterialTable from "material-table";

import { tableIcons, columns } from "./app_constants";

const mapStateToProps = (state) => ({
  api_data: state.reducers.simpleReducer.api_data,
});

const mapDispatchToProps = (dispatch) => ({});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news_data: "",
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.api_data !== this.props.api_data) {
      this.setState({ news_data: this.props.api_data.articles });
    }
  }

  render() {
    if (this.state.news_data) {
      return (
        <div>
          <MaterialTable
            icons={tableIcons}
            title="News"
            data={this.state.news_data}
            columns={columns}
            options={{
              pageSize: 10,
              search: true,
              paging: true,
              exportButton: false,
            }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Addapi />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
