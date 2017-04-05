import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const DepartmentList = ({ departments }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Department Name</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(departments).map((id, i) =>
          <tr key={i}>
            <td><Link to={'/departments/' + id}>{departments[id].name}</Link></td>
            <td><Link to={'/departments/' + id + '/edit'}>Edit</Link></td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

DepartmentList.propTypes = {
  departments: PropTypes.object.isRequired
}

export default DepartmentList
