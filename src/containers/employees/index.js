import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

// Components
import EmployeesList from '../../components/employees/list'

class EmployeesPage extends React.Component {
  static propTypes = {
    employees: PropTypes.object.isRequired,
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
            <h1>Employees List</h1>
            <EmployeesList
              employees={this.props.employees.items}
              departments={this.props.departments.items}
              linkToDepartment={true} />
          </Col>
          <Col md={6}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  employees: state.employees,
  departments: state.departments
})

export default connect(mapStateToProps)(EmployeesPage)
