import React from 'react'
import { useParams, Link, Redirect } from 'react-router-dom'
import { Container, Row, Col, Breadcrumb, OverlayTrigger, Tooltip, Badge, Button } from 'react-bootstrap'
import { FaQuestion, FaChevronLeft } from 'react-icons/fa'

import Map from '../components/Map'
import roomsData from '../data/rooms.json'
import floorMap from '../data/floor_1.png'
import RoomList from '../components/RoomList'

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

        <Row>
            <Col className="d-flex align-items-center">
              <Link to="/" className="btn-outline-light border-0 p-0 text-secondary text-decoration-none h-100 w-100 d-block p-2 d-flex align-items-center">
                <FaChevronLeft size={22} /><span className="ml-2 fi-text text-middle">Обрати поверх</span>
              </Link> 
            </Col>

            <Col xs="auto">
              <Breadcrumb bsPrefix="breadcrumb header-text bg-transparent mb-0">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/', className: "text-secondary text-underline" }}>
                  ФКНК
                </Breadcrumb.Item>

                <Breadcrumb.Item active className="text-dark">
                  { `Поверх ${floor.num}` }
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>

            <Col className="d-flex align-items-center justify-content-end">
              <OverlayTrigger
                key="info"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-info">
                    <strong>Оберіть кабінет</strong>, натиснувши на нього на мапі або у списку
                  </Tooltip>
                }
              >
                <Badge pill className="p-1 text-secondary"><FaQuestion size={22} /></Badge>
              </OverlayTrigger>
            </Col>
          </Row>

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