import React, { Component } from 'react';
import Plot from "react-plotly.js";
import PropTypes from 'prop-types';
import { Container } from '../../container';



export const barchart = ({ xx, yy, titre}) => {

        return (
          <Container>
    
   <div className="col-auto">
      <Plot
              data={[
                {
                  x: xx,
                  y:  yy,
                  type: "bar",
                  mode: "lines+markers",
                  marker: { color: "#00557d" },
                },
                {
                    x: xx,
                    y:  yy,
                    type: "bar",
                    mode: "lines+markers",
                    marker: { color: "#00727d" },
                  },
              ]}
              //TODO
              layout={{ title: titre, width:400, height: 550} }
              config={{edits: {legendPosition:true}}} // moveable legend
            />
               </div>
        </Container>
       
        );
            }    


barchart.defaultProps = {
    titre:"barchart",
    xx:[1,1,1,1],
    yy:[2,2,2,2],
    
};
