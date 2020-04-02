import React from 'react'
import fetchNewEmployee from '../action/action'
import { connect } from 'react-redux'

const createEmployee = (props) => {

    const [newEmployee, setNewEmployee] = useState('');

    useEffect(() => {
        console.log("id: ", props.success.id);
        if (props.success.id) {
            const route = true;
            console.log('route: ', route)
        }
    });

    const handleChange = () => {
        setNewEmployee(newEmployee = { name: document.getElementById('name').newEmployee, salary: document.getElementById('salary').newEmployee, age: document.getElementById('age').newEmployee });
        fetchNewEmployee(newEmployee);
    }

    return (

        <form>
            <div>
                <label> NAME </label>
                <input type = "text" id = "name" /> 
            </div>
            <div>
                <label> SALARY </label>
                <input type = "number" id = "salary" />
            </div>
            <div> 
                <label> AGE </label>
                <input type = "number" id = "age" />
            </div>
            <button onClick={() => handleChange()} > CREATE </button>
        </form>

    )
}

const mapStateToProps = (state) => ({
    success: _.get(state, 'userSuccess.data', [])
});

function mapDispatchToProps(dispatch) {
    return {
        fetchNewEmployee: () => { dispatch(fetchNewEmployee()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(createEmployee)

