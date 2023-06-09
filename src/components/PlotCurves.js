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
              x: this.props.x,
              y:  this.props.y,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "#00557d" },
            },
          ]}
          //TO DO 
          layout={{ title: this.props.title}} 
          config={{setBackground:"opaque"}}
        />
      </div>
    );
  }
}
export default PlotCurves;