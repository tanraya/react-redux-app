import React, { PropTypes } from 'react'
import { FormControl, ControlLabel, Button, ButtonGroup } from 'react-bootstrap'
import { browserHistory } from 'react-router';

export default class Form extends React.Component {
  static propTypes = {
    department: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    isSaving: PropTypes.bool
  }

  cancel(e) {
    e.preventDefault()
    browserHistory.push('/departments')
  }

  render() {
    return (
      <div>
        <form>
          <ControlLabel>Department</ControlLabel>
          <FormControl
            onChange={this.props.onChange}
            value={this.props.department.name}
            name="name"
            type="text" />

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
