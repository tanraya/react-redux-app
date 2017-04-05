import {FETCH_EMPLOYEES_DONE, UPDATE_EMPLOYEE, UPDATE_EMPLOYEE_DONE} from '../actions/index'
import initialState from './initialState'

// Update redux storage state (employees)
export default function employees(state = initialState.employees, action) {
  const items = Object.assign({}, state.items)

  switch(action.type) {
    case FETCH_EMPLOYEES_DONE:
      return { ...state, items: action.employees }
    case UPDATE_EMPLOYEE:
      return { ...state, formData: action.formData }
    case UPDATE_EMPLOYEE_DONE:
      items[action.payload.id] = action.payload
      return { ...state, items: items }
    default:
      return state
  }
}
