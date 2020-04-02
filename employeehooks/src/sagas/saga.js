import { call, put, takeLatest } from 'redux-saga/effects';
import  FETCH_EMPLOYEE_DATA, { FETCH_NEW_EMPLOYEE}  from '../action/action'
import RECEIVE_EMPLOYEE_DATA from '../action/action'
import { receiveEmployeeData, receiveNewEmployee} from '../action/action';
import { fetchEmployeeDetail, createNewEmployee } from '../api';

function* fetchInfo() {
    const data = yield call(fetchEmployeeDetail);
    yield put(receiveEmployeeData(data));
    yield put({ type: RECEIVE_EMPLOYEE_DATA, data })
}

function* createEmployee(data) {
        const data = yield call(createNewEmployee, data);
        yield put(receiveNewEmployee(data));
}

export default function* rootSaga() {
    yield takeLatest(FETCH_EMPLOYEE_DATA, fetchInfo);
    yield takeLatest(FETCH_NEW_EMPLOYEE, createEmployee);
}
