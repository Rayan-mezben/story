import React, { Component } from 'react';
import Plot from "react-plotly.js";
import PropTypes from 'prop-types';



export const scatterplot = ({ xx, yy, titre}) => {

    return (
    <div className="col-auto">
      <Plot
        data={[
          {
            x: xx,
            y: yy,
            type: "scatter",
            mode: "markers",
            marker: { color: "green" },
          },
        ]}
        //TO DO 
        layout={{title: titre}}
        config={{setBackground:"opaque"}}
      />
    </div>
  );
}
scatterplot.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    xx: PropTypes.arrayOf(Float64Array),
    /**
     * What background color to use
     */
    yy: PropTypes.arrayOf(Float64Array),
  };
  
scatterplot.defaultProps = {
    titre:"scatterplot",
    xx:[1,1,1,1],
    yy:[2,2,2,2], 
};