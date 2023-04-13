import React, { Component } from "react";
import Plot from "react-plotly.js";
import PropTypes, { shape } from "prop-types";
import { Container } from "../../container";

 const Gauge = ({ val, sh, titre }) => {
  var couleur;
  if (val < 83.33) couleur = "#2a932a";
  else if (val < 166.66) couleur = "#ffb900";
  else couleur = "#bf1b1b";
  return (
    <div className="col-auto">
      <Plot
        data={[
          {
            value: val,
            number: { suffix: "km/h", font: { family: "arial", size: "45" } },
            x: [0, 1],
            y: [0, 1],
            type: "indicator",
            mode: "gauge+number",
            delta: { reference: {} },

            gauge: {
              shape: sh,
              axis: {
                range: [null, 250],
                showticklabels: true,
                showtickprefix: "none",
                ticks: "",
                tickvals: [0, 250],
              },
              bar: { color: "transparent" },
              steps: [
                { range: [0, val], color: couleur },
                { range: [val, 500], color: "#606a75" },
              ],
            },
          },
        ]}
        //TODO
        layout={{ title: titre, width: 550, height: 400 , plot_bgcolor: "#fbfbfb",
        paper_bgcolor: "#fbfbfb",}}
      />
    </div>
  );
};
export const Gaugeplot = ({ valeur, shape, title }) => (
  <Container child={<Gauge val={valeur} sh={shape} titre={title} />} />
);
Gaugeplot.defaultProps = {
  title: "linechart",
  valeur: [400, 200, 250],
  shape: "bullet",
};
