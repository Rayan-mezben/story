import React, { Component } from "react";
import Plot from "react-plotly.js";
import { Container } from "../../container";
const Bar = ({ xx, yy, titre }) => {
  return (
    <div className="col-auto">
      <Plot
        data={[
          {
            x: xx,
            y: yy,
            type: "bar",
            mode: "lines+markers",
            marker: { color: ["#0f789b", "#e5c04c", "#db535a", "#606a75"] },
            width: 0.5,
          },
        ]}
        //TODO
        layout={{
          title: titre,
          width: 400,
          height: 550,
          plot_bgcolor: "#fbfbfb",
          paper_bgcolor: "#fbfbfb",
        }}
        config={{ edits: { legendPosition: true } }} // moveable legend
      />
    </div>
  );
};
export const barchart = ({ x, y, title }) => (
  <Container child={<Bar xx={x} yy={y} titre={title} />} />
);
barchart.defaultProps = {
  title: "barchart",
  x: [1, 1, 1, 1],
  y: [2, 2, 2, 2],
};
