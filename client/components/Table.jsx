import React from "react";
import ReactDOM from "react-dom";
import OTable from 'o-table';

class Table extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.oTable = OTable.init(this.table);
  }
  
  componentWillUnmount() {
    this.oTable.destroy();
  }

  render() {
    return (
        <table className="o-table" data-o-component="o-table" ref={(table) => { this.table = table; }}>
          <thead>
            <tr>
              <th>Cheese <span className="o-table__cell--content-secondary">Type of cheese</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cheddar</td>
            </tr>
            <tr>
              <td>stilton</td>
            </tr>
            <tr>
              <td>red leicester</td>
            </tr>
          </tbody>
        </table>
    );
  }
};

export {Table};
