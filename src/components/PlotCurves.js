import React, { Component } from 'react';

import Plot from "react-plotly.js";

export class PlotCurves extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-5">
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{ title:  this.props.title}}
        />
      </div>
    );
  }
}
export default PlotCurves;