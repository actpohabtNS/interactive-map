import React from 'react'

import Map from '../components/Map'
import FloorItem from '../components/FloorItem'
import CustomLink from '../components/CustomLink'
import building from '../data/building.png'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'

const floorsData = require('../data/floors.json')

const BuildingPage = () => {
  return (
    <>
      <Container fluid className="px-5 position-fixed bg-light-gray header-breadcrumb">
        
        <Header
          tooltip={<span><strong>Оберіть поверх</strong>, натиснувши на нього на мапі або у списку</span>}
          activeBreadcrumb="Факультет комп’ютерних наук та кібернетики"
        />

      </Container>

      <Container fluid className="px-5 pt-7vh">

        <Row className="my-3">
          <Col>
            <Map className="d-flex justify-content-center" asset={building} />
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="floors-list">
              { floorsData.map(floor => <CustomLink key={ floor.id } to={`/${floor.id}`} className="text-secondary">
                  <FloorItem floorNum={ floor.num } floorText={ floor.description } />
                </CustomLink> ) }
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BuildingPage;