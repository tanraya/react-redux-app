import React, {PropTypes} from 'react'
import { Grid, Row, Col, Nav, NavItem } from 'react-bootstrap'
import { Link, IndexLink } from 'react-router'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router';

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)

    // Default state
    this.state = {
      activeKey: 1
    }
  }

  handleNav(selectedKey) {
    this.setState({ activeKey: selectedKey })

    browserHistory.push({
      1: '/',
      2: '/departments',
      3: '/employees'
    }[selectedKey])
  }

  render() {
    return (
      <Grid className="main" bsClass="container-fluid">
        <Row>
          <Col md={2}>
            <Nav bsStyle="pills" stacked activeKey={this.state.activeKey} onSelect={this.handleNav.bind(this)}>
              <NavItem eventKey={1}>Home</NavItem>
              <NavItem eventKey={2}>Departments</NavItem>
              <NavItem eventKey={3}>Employees</NavItem>
            </Nav>
          </Col>
          <Col md={5}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
}


