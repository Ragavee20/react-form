import React, { Component } from 'react';
import { connect } from 'react-redux';
import  fetchEmployeeData  from './action/action';
import * as _ from 'lodash';
import { useState, useEffect } from 'react'

const App = (props) => {

  useEffect(() => {
    props.fetchEmployeeData();
  }, []);

  const [employeeDetail, setEmployeeDetail] = useState('');

  const handleChange = () => {
    setEmployeeDetail(employeeDetail = document.getElementById('getId').employeeDetail);
    console.log('data: ', employeeDetail)
  }
  
  console.log("info: ", props)

    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Age</th>
              </tr>
            </thead>
            {!_.isEmpty(props.employee_detail.data) && props.employee_detail.data.map(detail =>
              <tbody key={detail.id}>
                <tr>
                  <td>{detail.id}</td>
                  <td>{detail.employee_name}</td>
                  <td>{detail.employee_salary}</td>
                  <td>{detail.employee_age}</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    )
  }

const mapStateToProps = state => ({
  employee_detail: _.get(state, 'data', [])
});

const mapDispatchToProps = (dispatch) => ({
  fetchEmployeeData: () => { dispatch(fetchEmployeeData()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
