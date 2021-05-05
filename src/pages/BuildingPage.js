import React from 'react'

import Map from '../components/Map'
import FloorItem from '../components/FloorItem'
import CustomLink from '../components/CustomLink'
import building from '../data/building.png'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'

const floorsData = require('../data/floors.json')

const BuildingPage = () => {
  return (
    <Container fluid className="px-5">
      <Row>
        <Col className="d-flex justify-content-center">
          <Breadcrumb bsPrefix="breadcrumb header-text bg-transparent mt-4">
            <Breadcrumb.Item active className="text-dark">
              Факультет комп’ютерних наук та кібернетики
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      
      <Row>
        <Col className="text-center">
          <span className="sf-text text-secondary">Оберіть поверх</span>
        </Col>
      </Row>

      <Row>
        <Col>
          <Map className="d-flex justify-content-end mr-3" asset={building} />
        </Col>

        <Col>
          <div className="d-flex flex-column-reverse align-items-start h-100">
            { floorsData.map(floor => <CustomLink key={ floor.id } to={`/${floor.id}`} className="fi-block text-secondary">
                <FloorItem floorNum={ floor.num } floorText={ floor.description } />
              </CustomLink> ) }
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BuildingPage;