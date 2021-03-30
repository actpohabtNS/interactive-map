import React from 'react'
import Header from '../components/Header'
import Map from '../components/Map'

const BuildingScreen = () => {
  return (
    <div className="building-screen">
      <Header>
        Факультет комп’ютерних наук та кібернетики
      </Header>

      <span className="sf-text">Оберіть поверх</span>

      <div className="sf-block">
        <Map className="sf-map"/>
        <div className="sf-floors-list">

        </div>
      </div>
    </div>
  )
}

export default BuildingScreen;