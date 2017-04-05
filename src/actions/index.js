// Constants
export const FETCH_DEPARTMENTS = 'FETCH_DEPARTMENTS'
export const FETCH_DEPARTMENTS_DONE = 'FETCH_DEPARTMENTS_DONE'
export const UPDATE_DEPARTMENT = 'UPDATE_DEPARTMENT'
export const UPDATE_DEPARTMENT_DONE = 'UPDATE_DEPARTMENT_DONE'

export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES'
export const FETCH_EMPLOYEES_DONE = 'FETCH_EMPLOYEES_DONE'
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE'
export const UPDATE_EMPLOYEE_DONE = 'UPDATE_EMPLOYEE_DONE'

////
// Department actions
export function fetchDepartments() {
  return {
    type: FETCH_DEPARTMENTS
  }
}

export function fetchDepartmentsDone(departments) {
  return { type: FETCH_DEPARTMENTS_DONE, departments }
}

export function fetchDepartmentsFailed(error) {
  // TODO
}

export function updateDepartment(department) {
  return {
    type: UPDATE_DEPARTMENT,
    formData: department
  }
}

export function updateDepartmentDone(department) {
  return {
    type: UPDATE_DEPARTMENT_DONE,
    payload: department
  }
}

export function updateDepartmentFailed() {
  // TODO
}

////
// Employee actions
export function fetchEmployees() {
  return {
    type: FETCH_EMPLOYEES
  }
}

export function fetchEmployeesDone(employees) {
  return { type: FETCH_EMPLOYEES_DONE, employees }
}

export function fetchEmployeesFailed(error) {
  // TODO
}

export function updateEmployee(employee) {
  console.log('updateEmployee', employee)
  return {
    type: UPDATE_EMPLOYEE,
    formData: employee
  }
}

export function updateEmployeeDone(employee) {
  return {
    type: UPDATE_EMPLOYEE_DONE,
    payload: employee
  }
}

export function updateEmployeeFailed() {
  // TODO
}
