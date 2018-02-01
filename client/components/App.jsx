import React from "react";
import {Table} from "./Table.jsx";

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: {
        "Table Heading One": [
          "10",
          "20",
          "30"
        ],
        "Table Heading Two": [
          "11",
          "21",
          "31"
        ],
        "Table Heading Three": [
          "12",
          "22",
          "32"
        ]
      }
    };
  }

  updateData(e) {
    const key = Object.keys(this.state.data)[0];
    const updatedData = Object.assign({}, this.state.data);
    Object.keys(updatedData).map((key) => {
      updatedData[key] = [...Array(10)].map(
        () => Math.floor(Math.random() * (100 - 1) + 1)
      );
    });

    this.setState({ data: updatedData });
  }

  tableHeadings() {
    return Object.keys(this.state.data);
  }

  tableRows() {
    const data = Object.values(this.state.data);
    console.log(data);
    const rows = {};
    data.forEach((dataSet) => {
      dataSet.forEach((dataItem, key) => {
        if (!rows[key]) {
          rows[key] = [];
        }
        rows[key].push(dataItem)
      });
    });
    return rows;
  }

  render() {
    return(
      <div className="o-grid-container">
        <h2>Made With React &amp; Origami</h2>
        <Table headings={this.tableHeadings.call(this)} rows={this.tableRows.call(this)} data-o-table-data-type="numeric" />
          <button
            onClick={(e) => this.updateData(e)}
            className="o-buttons o-buttons--big o-buttons--primary"
          >
            Update Table
          </button>
      </div>
    )
  }
};
