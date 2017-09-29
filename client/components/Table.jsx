import React from "react";
import ReactDOM from "react-dom";

class Table extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table className="o-table" data-o-component="o-table">
          <thead>
            <tr><td>Cheese <span className="o-table__cell--content-secondary">Type of cheese</span></td></tr>
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
      </div>
    );
  }
};

export {Table};
