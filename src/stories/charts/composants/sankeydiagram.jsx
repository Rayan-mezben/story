import React, { Component } from 'react';
import Plot from "react-plotly.js";
import PropTypes from 'prop-types';



export const sankeydiagram = ( {lab,coulor,sources,dest,valeur} ) => {

    return (
    <div className="col-auto">
      <Plot
        data = {[{  type: "sankey",
        orientation: "h",
        node: {
          pad: 15,
          thickness: 30,
          line: {
            color: "black",
            width: 0.5
          },
         label: lab,
         color: coulor
            },
      
        link: {
          source: sources,
          target: dest,
          value:  valeur
        }
    }
     ]
    }
  
    layout = {{title: "Basic Sankey",font: { size: 10}}}
      />
    </div>
  );
}

sankeydiagram.defaultProps = {
    lab:["A1", "A2", "B1", "B2", "C1", "C2"],
    coulor:["blue", "blue", "blue", "blue", "blue", "blue"],
    sources:[0,1,0,2,3,3],
    dest:[2,3,3,4,4,5],
    valeur:[8,4,2,8,4,2]
};