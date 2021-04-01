import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

const FloorPage = ({ style }) => {
  const { floorId } = useParams();

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