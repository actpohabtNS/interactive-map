import React from 'react'
import { useParams, Link, Redirect } from 'react-router-dom'
import { Container, Row, Col, Breadcrumb, OverlayTrigger, Tooltip, Badge, Button, Form } from 'react-bootstrap'
import { FaQuestion, FaChevronLeft, FaUserAlt } from 'react-icons/fa'

import Map from '../components/Map'
import Room from '../components/Room'
import roomsData from '../data/rooms.json'
import floorMap from '../data/floor_1.png'

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
              <Button variant="outline-light" className="border-0 p-0">
                <Link to="/" className="text-secondary text-decoration-none h-100 w-100 d-block p-2 d-flex align-items-center">
                  <FaChevronLeft size={22} /><span className="ml-2 fi-text text-middle">Обрати поверх</span>
                </Link>
              </Button>
            </Col>

            <Col xs="auto">
              <Breadcrumb bsPrefix="breadcrumb header-text bg-transparent mb-0">
                <Breadcrumb.Item>
                  <Link to="/" className="text-secondary text-underline">ФКНК</Link>
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
          <Col className="rooms-list">
            <Form className="py-4">
              <Form.Control as="input" placeholder="🔍 Пошук кімнат"></Form.Control>
            </Form>

            <div className="accordion" id="accordionPanelsStayOpenExample">
              {roomsData.map(room => <Room room={room} /> )}              
            </div>
          </Col>

          <Col xl={9} lg={8}>
            <Map className="d-flex justify-content-center pt-5" asset={floorMap} height={800} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FloorPage;