import React, { Component } from 'react';

import Plot from "react-plotly.js";
export class Plotgauge extends Component {
  
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
              value: 430,
              x: [0,1],y:[0,1],
              type: "indicator",
              mode: "gauge+number",
              delta:{reference:400},
              
              gauge:{shape:"Angular",axis:{range:[null,500]},bar: { color: "white",line:{width:"20px"}},steps: [
                { range: [0, 166], color: "#bf1b1b" },
                { range: [166, 333], color: "#ffb900" },
                { range: [333, 500], color: "#2a932a " }]}
            },
          ]}
          //TODO
          layout={{ title: this.props.title, width:800, height: 450}}
        />
      </div>
    );
  }
}
export default Plotgauge;