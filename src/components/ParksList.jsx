import React from 'react'

import Park from './Park';

const ParksList = ({ parks, selectPark }) => {
  return (
    <div className="parks-list">
      {parks.map(park => (
        <Park
          key={park.id}
          park={park}
          selectPark={selectPark}
        />
      ))}
    </div>
  )
}

export default ParksList;