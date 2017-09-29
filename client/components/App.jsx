import React from "react";
import {Table} from "./Table.jsx";
import OTable from '../../bower_components/o-table/src/js/oTable.js';

export default class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    OTable(this.table);
  }

  render(){
    return(
      <div>
        <h1> THE FINANCIAL TIMES </h1>
        <p> Made in react with origami </p>
        <button className="o-buttons o-buttons--primary"> Correctly styled button </button>
        <Table ref={(table) => { this.table = table; }}/>
      </div>
    )
  }
};
