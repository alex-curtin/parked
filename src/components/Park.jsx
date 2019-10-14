import React from 'react';

const Park = ({ park, selectPark }) => {
  return (
    <div className="park" onClick={() => selectPark(park.id)}>
      <img src={park.image_url} alt={park.name} />
      <h3>{park.name}</h3>
    </div>
  )
}

export default Park;