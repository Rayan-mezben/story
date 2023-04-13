import React, { Component } from "react";
import Plot from "react-plotly.js";
import PropTypes from "prop-types";
import { Container } from "../../container";
 const Line = ({ xx, yy, titre }) => {
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
        layout={{
          title: titre,
          plot_bgcolor: "#fbfbfb",
          paper_bgcolor: "#fbfbfb",
          xaxis: { range: [0, Math.max(...xx) + 1], autorange: false,ticks:"outside" },
          yaxis: { range: [0, Math.max(...yy) + 1], autorange: false,ticks:"outside" },
        }}
        config={{ setBackground: "opaque" }}
      />
    </div>
  );
};
export const linechart = ({ x, y, title }) => (
  <Container child={<Line  xx={x} yy={y}  titre={title}/>} />
);
linechart.defaultProps = {
  title: "linechart",
  x: [1, 1, 1, 1],
  y: [2, 2, 2, 2],
};
