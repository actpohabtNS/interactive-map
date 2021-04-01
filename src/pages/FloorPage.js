import React from 'react'
import { useParams, Link, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import Map from '../components/Map'
import floorMap from '../data/floor_1.png'

const floorsData = require('../data/floors.json')

const FloorPage = ({ style }) => {
  const { floorId } = useParams();
  const floor = floorsData.find(floor => floor.id === floorId);

  if (!floor) {
    return <Redirect to='/404-page-not-found' />
  }

  return (
    <div className="floor-page">
      <Header
        backChevron
        backComponent={ <Link to="/" style={{ textDecoration: 'none', color: '#a8a8a8' }}>Обрати поверх</Link> }
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#a8a8a8' }}><pre> ФКНК / </pre></Link>
        
        <span>{ `Поверх ${floor.num}` }</span>
      </Header>

      <span className="sf-text">Наведіть чи натисніть на кабінет на мапі чи у списку</span>

      <div className="sf-block">
        <Map className="sf-map" asset={floorMap} height={800} />
        <div className="sf-floors-list">
          <div className="fi-list">
            <div>Список</div>
            <div>найважливіших</div>
            <div>об’єктів</div>
            <div>поверху</div>
            <div>Майстерня</div>
            <div>Туалет чоловічий</div>
            <div>Туалет жіночий</div>
            <div>Комора</div>
            <div>Актова зала</div>
          </div>
          <div className="fi-text">
            { floor.description }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloorPage;