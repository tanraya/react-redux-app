import React, { PropTypes } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory, Link } from 'react-router'

// Actions
import * as actions from '../../actions/index'

// Containers
import Form from './form';

class EmployeePage extends React.Component {
  static propTypes = {
    employee: PropTypes.object.isRequired,
    departments: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    isEdit:  PropTypes.bool.isRequired,
    departmentName: PropTypes.string.isRequired
  }

  constructor(props, context) {
    super(props, context)

    // Default state
    this.state = {
      employee: Object.assign({}, this.props.employee),
      isSaving: false,
      isEdit: false,
      departmentName: this.props.departmentName
    }
  }

  // Update state when click on employees list edit btn
  componentWillMount() {
    const props = this.props
    this.setState({ isEdit: props.params.action == 'edit' })
  }

  componentWillReceiveProps(nextProps) {
    // Replace employee page with another if needed
    if (this.props.employee.id != nextProps.employee.id) {
      this.setState({ employee: Object.assign({}, nextProps.employee) })
    }

    this.setState({
      isSaving: false,
      isEdit: nextProps.isEdit,
      departmentName: nextProps.departmentName
    })
  }

  toggleEdit() {
    this.setState({ isEdit: true })
  }

  save(e) {
    e.preventDefault()

    this.setState({ isSaving: true })
    this.props.actions.updateEmployee(this.state.employee)
  }

  updateEmployeeState(e) {
    const employee = this.state.employee
    employee[e.target.name] = e.target.value

    return this.setState({ employee: employee, isSaving: false })
  }

  cancel(e) {
    e.preventDefault()
    browserHistory.push('/employees')
  }

  render() {
    // Edit
    if (this.state.isEdit) {
      return (
        <div>
          <h1>Edit Employee</h1>

          <Form
            employee={this.state.employee}
            departments={this.props.departments}
            onSave={this.save.bind(this)}
            onChange={this.updateEmployeeState.bind(this)}
            isSaving={this.state.isSaving} />
        </div>
      )
    }

    // Show
    return (
      <div>
        <h1>Employee Card</h1>

        <p>FirstName: {this.state.employee.firstName}</p>
        <p>LastName: {this.state.employee.lastName}</p>
        <p>Department: <Link to={'/departments/' + this.state.employee.departmentId}>{this.state.departmentName}</Link></p>

        <ButtonGroup>
          <Button onClick={this.toggleEdit.bind(this)} bsStyle="success">Edit</Button>
          <Button onClick={this.cancel.bind(this)}>Cancel</Button>
        </ButtonGroup>
      </div>
    )
  }
}

const mapStateToProps = (state, p) => {
  const employee = state.employees.items[p.params.id]
  const department = state.departments.items[employee.departmentId]

  return {
    employee: employee,
    departments: state.departments.items,
    departmentName: department.name,
    isEdit: p.params.action == 'edit'
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage)
