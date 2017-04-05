import React, { PropTypes } from 'react'
import { FormControl, ControlLabel, Button, ButtonGroup } from 'react-bootstrap'
import { browserHistory } from 'react-router'

export default class Form extends React.Component {
  static propTypes = {
    employee: PropTypes.object.isRequired,
    departments: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    isSaving: PropTypes.bool
  }

  cancel(e) {
    e.preventDefault()
    browserHistory.push('/employees')
  }

  render() {
    const departments = this.props.departments
    return (
      <div>
        <form>
          <ControlLabel>FirstName</ControlLabel>
          <FormControl
            onChange={this.props.onChange}
            value={this.props.employee.firstName}
            name="firstName"
            type="text" />

          <ControlLabel>LastName</ControlLabel>
          <FormControl
            onChange={this.props.onChange}
            value={this.props.employee.lastName}
            name="lastName"
            type="text" />

          <ControlLabel>Department</ControlLabel>
          <FormControl componentClass="select" name="departmentId" defaultValue={this.props.employee.departmentId} onChange={this.props.onChange}>
            {Object.keys(departments).map((id, i) =>
              <option value={id} key={i}>{departments[id].name}</option>
            )}
          </FormControl>

          <hr />

          <ButtonGroup>
            <Button type="submit" bsStyle="primary"
              disabled={this.props.isSaving}
              value={this.props.isSaving ? 'Updating...' : 'Update'}
              onClick={this.props.onSave}>
              Update
            </Button>
            <Button onClick={this.cancel.bind(this)}>Cancel</Button>
          </ButtonGroup>
        </form>
      </div>
    )
  }
}
