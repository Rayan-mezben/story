import React, { Component } from 'react';
import Plot from "react-plotly.js";
import PropTypes from 'prop-types';



export const bubblechart = ({ xx, yy, titre,taille}) => {

    return (
    <div className="col-auto">
      <Plot
        data={[
          {
            x: xx,
            y: yy,
            type: "scatter",
            mode: "markers",
            marker: { color: "#00557d"  , size : taille},
            
          },
        ]}
        //TO DO 
        layout={{title: titre}}
        config={{setBackground:"opaque"}}
      />
    </div>
  );
}
bubblechart.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    xx: PropTypes.arrayOf(Float64Array),
    /**
     * What background color to use
     */
    yy: PropTypes.arrayOf(Float64Array),
  };
  
bubblechart.defaultProps = {
    titre:"bubblechart",
    xx:[1,1,1,1],
    yy:[2,2,2,2], 
};