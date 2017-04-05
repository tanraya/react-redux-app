import React, { PropTypes } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import EmployeesList from '../../components/employees/list'

// Actions
import * as actions from '../../actions/index'

// Containers
import Form from './form';

class DepartmentPage extends React.Component {
  static propTypes = {
    department: PropTypes.object.isRequired,
    departments: PropTypes.object.isRequired,
    employees: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    isEdit:  PropTypes.bool.isRequired
  }

  constructor(props, context) {
    super(props, context)

    // Default state
    this.state = {
      department: Object.assign({}, this.props.department),
      isSaving: false,
      isEdit: false
    }
  }

  // Update state when click on departments list edit btn
  componentWillMount() {
    const props = this.props
    this.setState({ isEdit: props.params.action == 'edit' })
  }

  componentWillReceiveProps(nextProps) {
    // Replace department page with another if needed
    if (this.props.department.id != nextProps.department.id) {
      this.setState({ department: Object.assign({}, nextProps.department) })
    }

    this.setState({ isSaving: false, isEdit: nextProps.isEdit })
  }

  toggleEdit() {
    this.setState({ isEdit: true })
  }

  save(e) {
    e.preventDefault()

    this.setState({ isSaving: true })
    this.props.actions.updateDepartment(this.state.department)
  }

  updateDepartmentState(e) {
    const department = this.state.department
    department[e.target.name] = e.target.value

    return this.setState({ department: department, isSaving: false })
  }

  cancel(e) {
    e.preventDefault()
    browserHistory.push('/departments')
  }

  render() {
    // Edit
    if (this.state.isEdit) {
      return (
        <div>
          <h1>Edit Department</h1>

          <Form
            department={this.state.department}
            onSave={this.save.bind(this)}
            onChange={this.updateDepartmentState.bind(this)}
            isSaving={this.state.isSaving} />
        </div>
      )
    }

    const departmentEmployees = Object.keys(this.props.employees).filter((key) => {
      return this.props.employees[key]['departmentId'] == this.state.department.id
    }).map((key) => this.props.employees[key])

    // Show
    return (
      <div>
        <h1>Department &laquo;{this.state.department.name}&raquo;</h1>

        <h3>Employees</h3>
        <EmployeesList
          employees={departmentEmployees}
          departments={this.props.departments}
          linkToDepartment={false} />

        <ButtonGroup>
          <Button onClick={this.toggleEdit.bind(this)} bsStyle="success">Edit</Button>
          <Button onClick={this.cancel.bind(this)}>Cancel</Button>
        </ButtonGroup>
      </div>
    )
  }
}

const mapStateToProps = (state, p) => ({
  department: state.departments.items[p.params.id],
  departments: state.departments.items,
  employees:  state.employees.items,
  isEdit: p.params.action == 'edit'
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentPage)
