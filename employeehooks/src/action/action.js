const fetchEmployeeData = () => ({
    type: 'FETCH_EMPLOYEE_DATA'
});

export const receiveEmployeeData = (data) => ({
    type: 'RECEIVE_EMPLOYEE_DATA',
    data
});

export const fetchNewEmployee = (data) => ({
    type: 'FETCH_NEW_EMPLOYEE',
    data
});

export const receiveNewEmployee = (data) => ({
    type: 'RECEIVE_NEW_EMPLOYEE',
    data
});

export default fetchEmployeeData
