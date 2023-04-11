import React, { Component } from 'react';
import Plot from "react-plotly.js";
import PropTypes, { shape } from 'prop-types';



export const Gaugeplot = ({val,sh, titre}) => {

    return (
    <div className="col-auto">
     <Plot
          data={[
            {
              value: val,
              x: [0,1],y:[0,1],
              type: "indicator",
              mode: "gauge+number",
              delta:{reference:{}},
              
              gauge:{shape:sh,axis:{range:[null,500]},bar: { color: "white",line:{width:"20px"}},steps: [
                { range: [0, 166], color: "#bf1b1b" },
                { range: [166, 333], color: "#ffb900" },
                { range: [333, 500], color: "#2a932a " }]}
            },
          ]}
          //TODO
          layout={{ title: titre, width:800, height: 450}}
        />
    </div>
  );
}

  
Gaugeplot.defaultProps = {
    titre:"linechart",
   val:[400,200,250],
   sh:"bullet"
};