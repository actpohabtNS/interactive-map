import React from 'react'
import building from '../data/building.png'

const Map = ({ style, svg }) => {
  return (
    <div style={ style }>
      <img src={building} alt="" />
    </div>
  )
}

export default Map;