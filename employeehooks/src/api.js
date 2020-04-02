export const fetchEmployeeDetail = async () => {
    const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    const data = await response.json();
    return data;
};

export const createNewEmployee = async(data) => {
    const url = `http://dummy.restapiexample.com/api/v1/create`;
    const post = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: data.data.name, salary: data.data.salary, age: data.data.age })
    };
    const response = await fetch(url, post);
    const data = await response.json();
    return data;
};

