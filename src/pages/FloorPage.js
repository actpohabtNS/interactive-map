import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import Map from '../components/Map'
import roomsData from '../data/rooms.json'
import floorMap from '../data/floor_1.png'
import RoomList from '../components/RoomList'
import Header from '../components/Header'

const floorsData = require('../data/floors.json')

const FloorPage = ({ style }) => {
  const { floorId } = useParams();
  const floor = floorsData.find(floor => floor.id === floorId);

  if (!floor) {
    return <Redirect to='/404-page-not-found' />
  }

  return (
    <>
      <Container fluid className="px-5 position-fixed bg-light-gray header-breadcrumb">
        <Header
          goBack="Обрати поверх"
          goBackLink="/"
          tooltip={<span><strong>Оберіть кабінет</strong>, натиснувши на нього на мапі або у списку</span>}
          activeBreadcrumb={ `Поверх ${floor.num}` }
          breadcrumbs={[ { to: "/", title: "ФКНК" } ]}
        />

      </Container>

      <Container fluid className="px-5 pt-7vh">

        <Row>
          <RoomList rooms={roomsData} className="col" />

          <Col xl={9} lg={8}>
            <Map className="d-flex justify-content-center pt-5" asset={floorMap} height={800} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FloorPage;