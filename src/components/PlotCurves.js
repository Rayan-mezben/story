import React, { Component } from 'react';

import Plot from "react-plotly.js";

export class PlotCurves extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-auto">
        <Plot
          data={[
            {
              x: [1, 2, 3, 4],
              y: [2, 6, 3, 4],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{ title: this.props.title}}
        />
      </div>
    );
  }
}
export default PlotCurves;