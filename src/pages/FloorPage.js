import React from 'react'
import { withRouter , Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import RoomList from '../components/RoomList'
import Header from '../components/Header'
import { SVGMap } from 'react-svg-map'
import fcsc from '../data/fcsc'
import DataAdapter from '../data/DataAdapter'
import { getLocationName, getLocationId } from '../utils/event-utils';

const floorsData = require('../data/floors.json')

class FloorPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      DataAdapter: new DataAdapter(fcsc),
      hoveredMapLocationName: null,
			hoveredMapLocationId: null,
      hoveredListLocationId: null,
			tooltipStyle: {
				display: 'none'
			}
    }

    this.getLocationClassName = this.getLocationClassName.bind(this);
		this.handleLocationClick = this.handleLocationClick.bind(this);
		this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
		this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
		this.handleLocationMouseMove = this.handleLocationMouseMove.bind(this);
		this.handleItemMouseOver = this.handleItemMouseOver.bind(this); 
		this.handleItemMouseOut = this.handleItemMouseOut.bind(this); 
  }

  handleItemMouseOver(event) {
    const hoveredListLocationId = getLocationId(event);
    this.setState({ hoveredListLocationId });
  }

  handleItemMouseOut() {
    this.setState({ hoveredListLocationId: null });
  }
  
  handleLocationClick(event) {
    const hoveredMapLocationId = getLocationId(event);
    this.props.history.push(`/${hoveredMapLocationId}`);
  }

  handleLocationMouseOver(event) {
    const hoveredMapLocationName = getLocationName(event);
    const hoveredMapLocationId = getLocationId(event);
    this.setState({ hoveredMapLocationName, hoveredMapLocationId });
  }

  handleLocationMouseOut() {
    this.setState({ hoveredMapLocationName: null, hoveredMapLocationId: null, tooltipStyle: { display: 'none' } });
  }

  handleLocationMouseMove(event) {
    const tooltipStyle = {
      display: 'block',
      top: event.clientY + 10,
      left: event.clientX - 100
    };
    this.setState({ tooltipStyle });
  }

  getLocationClassName(location, index) {
		return `${location.id} floor ${this.state.hoveredListLocationId === location.id ? "hovered" : ""}`;
	}

  render() {
    const { floorId } = this.props.match.params;
    const floor = floorsData.find(floor => floor.id === floorId);

    if (!floor) {
      return <Redirect to='/404-page-not-found' />
    }

    const { map, childrenBefore, childrenAfter } = this.state.DataAdapter.floorSVGmap(floorId);
    const rooms = this.state.DataAdapter.roomsList(floorId);

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
            <Col>
              <RoomList
                rooms={rooms} 
                onItemMouseOver={this.handleItemMouseOver}
                onItemMouseOut={this.handleItemMouseOut}
                itemClassName={room => this.state.hoveredMapLocationId === room.id ? "hovered" : ""}
              />
            </Col>

            <Col xl={9} lg={8}>
              <div className="d-flex justify-content-center p-5">
                <SVGMap
                  className="w-75"
                  map={map}
                  locationClassName={this.getLocationClassName}
                  onLocationClick={this.handleLocationClick}
                  onLocationMouseOver={this.handleLocationMouseOver}
                  onLocationMouseOut={this.handleLocationMouseOut}
                  onLocationMouseMove={this.handleLocationMouseMove}
                  childrenBefore={childrenBefore}
                  childrenAfter={childrenAfter}
                />
                <div className="map-tooltip" style={this.state.tooltipStyle}>
                  {this.state.hoveredMapLocationName}
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default withRouter(FloorPage);