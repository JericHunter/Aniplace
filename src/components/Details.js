import React from 'react';
import data from '../anime-data.js';
import '../styles/Details.css';


function Details(props) {
    const { id } = props.match.params;
    const { images, title, desc, hours, features, geo } = data[id];

    return (
        <div className="Details">
          <div className="Details-image">
              <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt="header" />
          </div>

          <div className="Details-info">

              <h1 className="Details-title">{ title }</h1>
              <p className="Details-desc">{ desc }</p>


          </div>

        </div>
    );
}

export default POPOSDetails;