import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Containers
import App from '../containers/app'
import Home from '../containers/home'
import DepartmentsPage from '../containers/departments/index'
import DepartmentPage from '../containers/departments/show'
import EmployeesPage from '../containers/employees/index'
import EmployeePage from '../containers/employees/show'

// Routes
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/departments" component={DepartmentsPage} >
      <Route path="/departments/:id(/:action)" component={DepartmentPage} />
      <Route path="/departments/:id" component={DepartmentPage} />
    </Route>
    <Route path="/employees" component={EmployeesPage} >
      <Route path="/employees/:id(/:action)" component={EmployeePage} />
      <Route path="/employees/:id" component={EmployeePage} />
    </Route>
  </Route>
)
