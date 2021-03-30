import React from 'react'
import building from '../data/building.png'

const Map = ({ style, className, svg }) => {
  return (
    <div style={ style } className={className}>
      <img src={building} alt="" />
    </div>
  )
}

export default Map;