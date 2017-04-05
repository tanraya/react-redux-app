import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

// Components
import DepartmentList from '../../components/departments/list'

class DepartmentsPage extends React.Component {
  static propTypes = {
    departments: PropTypes.object.isRequired,
    children: PropTypes.object
  }

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <h1>Department List</h1>
            <DepartmentList departments={this.props.departments.items} />
          </Col>
          <Col md={6}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  departments: state.departments
})

export default connect(mapStateToProps)(DepartmentsPage)
