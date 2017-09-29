import React from "react";
import {Table} from "./Table.jsx";

export default class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1> THE FINANCIAL TIMES </h1>
        <p> Made in react with origami </p>
        <h3> A correctly styled button</h3>
        <button className="o-buttons o-buttons--primary"> Correctly styled button </button>
        <h3> A correctly styled table (using o-table js AND css)</h3>
        <Table />
      </div>
    )
  }
};
