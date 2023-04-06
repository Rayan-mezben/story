import React, { Component } from 'react';

import Plot from "react-plotly.js";

export class PlotBars extends Component {
  
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
              type: "bar",
              mode: "lines+markers",
              marker: { color: "#00557d" },
            },
            {
                x: this.props.x,
                y:  this.props.y,
                type: "bar",
                mode: "lines+markers",
                marker: { color: "#00727d" },
              },
          ]}
          //TODO
          layout={{ title: this.props.title, width:600, height: 600} }
          config={{edits: {legendPosition:true}}} // moveable legend
        />
      </div>
    );
  }
}

export default PlotBars;