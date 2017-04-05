import {combineReducers} from 'redux'
import departments from './departments'
import employees from './employees'

export default combineReducers({
  departments, employees
})

export function getDepartmentFormData(state) {
  return state.departments.formData
}

export function getEmployeeFormData(state) {
  return state.employees.formData
}
