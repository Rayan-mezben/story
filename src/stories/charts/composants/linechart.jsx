import React, { Component } from 'react';
import Plot from "react-plotly.js";
import PropTypes from 'prop-types';



export const linechart = ({ xx, yy, titre}) => {

    return (
    <div className="col-auto">
      <Plot
        data={[
          {
            x: xx,
            y: yy,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "#00557d" },
          },
        ]}
        //TO DO 
        layout={{title: titre}}
        config={{setBackground:"opaque"}}
      />
    </div>
  );
}
linechart.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    xx: PropTypes.arrayOf(Float64Array),
    /**
     * What background color to use
     */
    yy: PropTypes.arrayOf(Float64Array),
  };
  
linechart.defaultProps = {
    titre:"linechart",
    xx:[1,1,1,1],
    yy:[2,2,2,2],
    
};