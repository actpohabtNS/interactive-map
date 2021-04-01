import React from 'react'

import Header from '../components/Header'
import Map from '../components/Map'
import FloorItem from '../components/FloorItem'
import CustomLink from '../components/CustomLink'
import building from '../data/building.png'

const floorsData = require('../data/floors.json')

const BuildingPage = () => {
  return (
    <div className="building-screen">
      <Header>
        Факультет комп’ютерних наук та кібернетики
      </Header>

      <span className="sf-text">Оберіть поверх</span>

      <div className="sf-block">
        <Map className="sf-map" asset={building} />
        <div className="sf-floors-list">
          { floorsData.map(floor => <CustomLink key={ floor.id } to={`/${floor.id}`} className="fi-block">
              <FloorItem floorNum={ floor.num } floorText={ floor.description } />
            </CustomLink> ) }
        </div>
      </div>
    </div>
  )
}

export default BuildingPage;