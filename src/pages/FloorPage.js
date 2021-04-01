import React from 'react'
import { useParams, Link, Redirect } from 'react-router-dom'
import Header from '../components/Header'

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

      <span>{ floorId }</span>
    </div>
  )
}

export default FloorPage;