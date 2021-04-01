import React from 'react'
import Header from '../components/Header'
import Map from '../components/Map'
import FloorItem from '../components/FloorItem'

const floorsData = require('../data/floors.json')

const BuildingPage = () => {
  return (
    <div className="building-screen">
      <Header>
        Факультет комп’ютерних наук та кібернетики
      </Header>

      <span className="sf-text">Оберіть поверх</span>

      <div className="sf-block">
        <Map className="sf-map"/>
        <div className="sf-floors-list">
          { floorsData.map(floor => <FloorItem floorNum={ floor.num } floorText={ floor.description } />) }
        </div>
      </div>
    </div>
  )
}

export default BuildingPage;