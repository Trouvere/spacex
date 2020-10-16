import React from "react";
import ReactRelluxWrapper from "react-rellax-wrapper";
import "./features.css";

const images = {
  "Falcon 1": "falcon-1",
  "Falcon 9": "falcon-9",
  "Falcon Heavy": "falcon-heavy",
  other: "starship",
};

const Features = ({
  name,
  height,
  diameter,
  mass,
  payload_weights,
  description,
}) => {
  return (
    <section className="features">
      <h2 className="features-title">
        {name} <br />
        Overview
      </h2>
      <div className="overview">
        <table className="table">
          <caption className="table-title">Size</caption>
          <thead>
            <tr>
              <td className="table-column">HEIGHT</td>
              <td className="table-column">
                {`${height.meters} m / ${height.feet} ft`}
              </td>
            </tr>
            <tr>
              <td className="table-column">DIAMETER</td>
              <td className="table-column">
                {`${diameter.meters} m / ${diameter.feet} ft`}
              </td>
            </tr>
            <tr>
              <td className="table-column">MASS</td>
              <td className="table-column">
                {`${mass.kg} kg / ${mass.lb} lb`}
              </td>
            </tr>
            {payload_weights.map((item, i) => (
              <tr key={i}>
                <td className="table-column">
                  PAYLOAD TO {item.id.toUpperCase()}
                </td>
                <td className="table-column">
                  {`${item.kg} kg / ${item.lb} lb`}
                </td>
              </tr>
            ))}
          </thead>
        </table>
        <ReactRelluxWrapper speed={14}>
          <img
            src={`./img/${
              images.hasOwnProperty(name) ? images[name] : images.other
            }.png`}
            alt="rocket"
            className="rocket"
            data-rellax-speed="14"
          />
        </ReactRelluxWrapper>{" "}
        <article>
          <h3 className="features-subtitle">DESCRIPTION</h3>
          <p className="features-text">{description}</p>
        </article>
      </div>
    </section>
  );
};

export default Features;
