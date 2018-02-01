import React from "react";
import ReactDOM from "react-dom";
import OTable from 'o-table';

class Table extends React.Component {

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount(){
    OTable.init(this.table);
  }

  render() {
    return (
      <table className="o-table o-table--responsive-scroll o-table--row-stripes" data-o-component="o-table" ref={(table) => { this.table = table; }}>
          <thead>
            <tr>
            {this.props.headings.map((heading, index) =>
              <th data-o-table-data-type="numeric" key={`${heading}${index}`}>{heading}</th>
            )}
            </tr>
          </thead>
          <tbody>
            {Object.values(this.props.rows).map((row, index) =>
            <tr key={`${row}${index}`}>
              {row.map((rowItem, rowItemIndex) => {
                return (<td key={`${rowItem}${rowItemIndex}`}>{rowItem}</td>)
                })}
              </tr>
            )}
          </tbody>
        </table>
    );
  }
};

export { Table };
