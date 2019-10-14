import React from 'react';

import Photos from './Photos';

import cancel from '../assets/cancel.svg';

const ParkDetails = ({ park, closeModal }) => {
  return (
    park &&
    <div className="park-modal">
      <div className="park-details">
        <div
          className="close-modal"
          onClick={closeModal}
        ><img src={cancel} /></div>
        <h2>{park.name}</h2>
        <Photos photos={park.photos} />
        <p>{park.location.display_address[0]}</p>
        <p>{park.location.display_address[1]}</p>
        <p>Rating: {park.rating}</p>
      </div>
    </div>
  )
}

export default ParkDetails;