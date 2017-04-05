import { takeEvery } from 'redux-saga'
import { call, put, fork, select } from 'redux-saga/effects'
import * as actions from '../actions/index'
import { getAll, update } from 'firebase-saga'
import reducers, { getDepartmentFormData, getEmployeeFormData } from '../reducers/index'

//// Departments
function* fetchDepartments() {
  try {
    const departments = yield call(getAll, 'departments')
    yield put(actions.fetchDepartmentsDone(departments))
  }
  catch (e) {
    yield put(actions.fetchDepartmentsFailed(e))
  }
}

function* watchFetchDepartments() {
  yield* takeEvery(actions.FETCH_DEPARTMENTS, fetchDepartments)
}

function* updateDepartment() {
  const department = yield select(getDepartmentFormData)
  const { id, name } = department

  try {
    yield call(update, 'departments', id, { name })
    yield put(actions.updateDepartmentDone(department))
  }
  catch (e) {
    yield put(actions.updateDepartmentFailed(e))
  }
}

function* watchUpdateDepartment() {
  yield* takeEvery(actions.UPDATE_DEPARTMENT, updateDepartment)
}

//// Employees
function* fetchEmployees() {
  try {
    const employees = yield call(getAll, 'employees')
    yield put(actions.fetchEmployeesDone(employees))
  }
  catch (e) {
    yield put(actions.fetchEmployeesFailed(e))
  }
}

function* watchFetchEmployees() {
  yield* takeEvery(actions.FETCH_EMPLOYEES, fetchEmployees)
}

function* updateEmployee() {
  const employee = yield select(getEmployeeFormData)
  const { id, firstName, lastName, departmentId } = employee

  try {
    yield call(update, 'employees', id, { firstName, lastName, departmentId })
    yield put(actions.updateEmployeeDone(employee))
  }
  catch (e) {
    yield put(actions.updateEmployeeFailed(e))
  }
}

function* watchUpdateEmployee() {
  yield* takeEvery(actions.UPDATE_EMPLOYEE, updateEmployee)
}

export default function* root() {
  yield [
    fork(watchFetchDepartments),
    fork(watchUpdateDepartment),
    fork(watchFetchEmployees),
    fork(watchUpdateEmployee)
  ]
}
