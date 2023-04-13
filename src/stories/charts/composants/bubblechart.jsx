import React, { Component } from "react";
import Plot from "react-plotly.js";
import PropTypes from "prop-types";
import { Container } from "../../container";

const Bubble = ({ xx, yy, titre, taille }) => {
  return (
    <div className="col-auto">
      <Plot
        data={[
          {
            x: xx,
            y: yy,
            type: "scatter",
            mode: "markers",
            marker: { color: "#00557d", size: taille },
          },
        ]}
        //TO DO
        layout={{ title: titre }}
        config={{ setBackground: "opaque" }}
      />
    </div>
  );
};

export const bubblechart = ({ x, y, title, size }) => (
  <Container child={<Bubble xx={x} yy={y} titre={title} taille={size} />} />
);

bubblechart.defaultProps = {
  titre: "bubblechart",
  x: [1, 1, 1, 1],
  y: [2, 2, 2, 2],
};
