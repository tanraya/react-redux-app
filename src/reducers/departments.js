import {FETCH_DEPARTMENTS_DONE, UPDATE_DEPARTMENT, UPDATE_DEPARTMENT_DONE} from '../actions/index'
import initialState from './initialState'

// Update redux storage state (departments)
export default function departments(state = initialState.departments, action) {
  const items = Object.assign({}, state.items)

  switch(action.type) {
    case FETCH_DEPARTMENTS_DONE:
      return { ...state, items: action.departments }
    case UPDATE_DEPARTMENT:
      return { ...state, formData: action.formData }
    case UPDATE_DEPARTMENT_DONE:
      items[action.payload.id] = action.payload
      return { ...state, items: items }
      //return { ...state, items: [...state.items.map((x) => x.id == action.payload.id ? action.payload : x) ] }
    default:
      return state
  }
}
