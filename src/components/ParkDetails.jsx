import React from 'react';

const ParkDetails = ({ park, closeModal }) => {
  return (
    park &&
    <div className="park-modal">
      <div className="park-details">
        <div
          className="close-modal"
          onClick={closeModal}
        >X</div>
        <h2>{park.name}</h2>
        <img src={park.image_url} alt={park.name} />
        <p>{park.location.address1}</p>
        <p>{park.location.city}, {park.location.state}</p>
        <p>{park.location.zip_code}</p>
        <p>Rating: {park.rating}</p>
      </div>
    </div>
  )
}

export default ParkDetails;