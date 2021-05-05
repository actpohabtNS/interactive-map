import React from 'react'

import Header from '../components/Header'
import Map from '../components/Map'
import FloorItem from '../components/FloorItem'
import CustomLink from '../components/CustomLink'
import building from '../data/building.png'
import { Container, Row, Col } from 'react-bootstrap'

const floorsData = require('../data/floors.json')

const BuildingPage = () => {
  return (
    <Container fluid className="px-5">
      <Row>
        <Col>
          <Header>
            Факультет комп’ютерних наук та кібернетики
          </Header>
        </Col>
      </Row>
      
      <Row>
        <Col className="text-center">
          <span className="sf-text text-secondary">Оберіть поверх</span>
        </Col>
      </Row>

      <Row>
        <Col>
          <Map className="sf-map" asset={building} />
        </Col>

        <Col>
          <div className="sf-floors-list">
            { floorsData.map(floor => <CustomLink key={ floor.id } to={`/${floor.id}`} className="fi-block">
                <FloorItem floorNum={ floor.num } floorText={ floor.description } />
              </CustomLink> ) }
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BuildingPage;