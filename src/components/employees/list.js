import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

const EmployeesList = ({ employees, departments, linkToDepartment }) => {
  const departmentLink = (id, name) => linkToDepartment
    ? <Link to={'/departments/' + id}>{name}</Link>
    : name

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Department</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(employees).map((id, i) =>
          <tr key={i}>
            <td><Link to={'/employees/' + employees[id].id}>{employees[id].firstName} {employees[id].lastName}</Link></td>
            <td>
              {departmentLink(employees[id].departmentId, departments[employees[id].departmentId].name)}
            </td>
            <td><Link to={'/employees/' + employees[id].id + '/edit'}>Edit</Link></td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

EmployeesList.propTypes = {
  employees: PropTypes.any.isRequired,
  departments: PropTypes.object.isRequired,
  linkToDepartment: PropTypes.bool.isRequired
}

export default EmployeesList
