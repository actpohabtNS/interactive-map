import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Header from '../components/Header'

const floorsData = require('../data/floors.json')

const FloorPage = ({ style }) => {
  const { floorId } = useParams();
  const floor = floorsData.find(floor => floor.id === floorId);

  if (!floor) {
    return <Redirect to='/404' />
  }

  return (
    <div>
      <Header
        backText="Обрати поверх"
      />
      <span>{ floorId }</span>
    </div>
  )
}

export default FloorPage;