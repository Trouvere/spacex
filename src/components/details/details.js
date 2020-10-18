import React, { useEffect, useState } from "react";

import "./details.css";
import Main from "../main";

import { useHistory } from "react-router-dom";
import useLaunches from "../useLaunches/useLaunches";

const Details = (props) => {
  // console.log(props);
  const id = props.match.params.id;
  // console.log(id);
  const [launch, setLaunch] = useState(null);

  const { getLaunch } = useLaunches();
  useEffect(() => {
    setLaunch(getLaunch(id));
  }, [getLaunch]);
  // console.log(launch);

  const history = useHistory();

  if (!launch) return null;
  return (
    <>
      <Main name={launch.name} />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch.links.patch.small} alt="" />
            </div>
            <div className="details-content">
              <p className="details-description">{launch.details}</p>
            </div>
          </div>
          <div>
            {/* <iframe
              className="details-youtube"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dLQ2tZEH6G0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> */}
          </div>
        </div>
        <a onClick={history.goBack} className="button button-back">
          go back
        </a>
      </main>
    </>
  );
};
export default Details;
