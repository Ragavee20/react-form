import React from 'react';
import './App.css';


export default class ReactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    onSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["name"] = "";
            fields["dob"] = "";
            fields["age"] = "";
            fields["gender"] = "";
            fields["emailid"] = "";
            fields["phoneNum"] = "";
            this.setState({
                fields: fields
            });
            alert("Submitted successfully");
            return true
        }
    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Please enter your name.";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["name"] = "*Please enter alphabetic characters only.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            let regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!regex.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["phoneNum"]) {
            formIsValid = false;
            errors["phoneNum"] = "*Please enter your mobile no.";
        }

        if (typeof fields["phoneNum"] !== "undefined") {
            if (!fields["phoneNum"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["phoneNum"] = "*Please enter valid mobile no.(10 digits)";
            }
        }

        if (!fields["age"]) {
            formIsValid = false;
            errors["age"] = "*Please enter your age";
        }

        if (typeof fields["age"] !== "undefined") {
            if (!fields["age"].match(/^[0-9]/)) {
                formIsValid = false;
                errors["age"] = "*Please enter in numbers";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    // isDisabled() {
    //     if (this.validateForm) {
    //         return false;
    //     }
    //     return true;
    // }

    render() {
        return (
            <React.Fragment>

                <form onSubmit={this.onSubmit} >
                    <div className="split left">
                        <div className="centered">
                            <h2>React Form</h2>
                            <div className="details">
                                <div>
                                    <label>Name:</label>
                                    <input
                                        className="namefield"
                                        type="text"
                                        placeholder="enter your name"
                                        name="name"
                                        value={this.state.fields.name}
                                        onChange={this.handleChange} />
                                    <div className="errorMsg">{this.state.errors.name}</div>
                                </div>

                                <div>
                                    <label>Date of Birth:</label>
                                    <input
                                        type='date'
                                        value={this.state.fields.dob}
                                        name='dob'
                                        onChange={this.handleChange} />
                                </div>

                                <div>
                                    <label>Age:</label>
                                    <input
                                        className="agefield"
                                        type="text"
                                        placeholder="enter your Age"
                                        name="age"
                                        value={this.state.fields.age}
                                        onChange={this.handleChange} />
                                    <div className="errorMsg">{this.state.errors.age}</div>
                                </div>

                                <div>
                                    <label>Gender:</label>
                                    <select
                                        className="genderfield"
                                        value={this.state.gender}
                                        name='gender'
                                        onChange={this.handleChange}>
                                        <option value="female"> Female </option>
                                        <option value="male"> Male </option>
                                    </select>
                                </div>

                                <div>
                                    <label>Email ID:</label>
                                    <input
                                        className="emailfield"
                                        type="text"
                                        placeholder="enter your email id"
                                        name="emailid"
                                        value={this.state.fields.emailid}
                                        onChange={this.handleChange} />
                                    <div className="errorMsg">{this.state.errors.emailid}</div>
                                </div>

                                <div>
                                    <label>Phone No:</label>
                                    <input
                                        className="phonefield"
                                        type="text"
                                        placeholder="enter phone number"
                                        name="phoneNum"
                                        value={this.state.fields.phoneNum}
                                        onChange={this.handleChange} />
                                    <div className="errorMsg">{this.state.errors.phoneNum}</div>
                                </div>

                                <button type="submit" onClick={this.onSubmit}> SUBMIT </button>
                            </div>
                        </div>
                    </div>
                    <div className="split right">
                        <div className="centered">
                            <h2> Form Details </h2>
                            <div className="details">
                                <p> Name: {this.state.fields.name} </p>
                                <p> Date of Birth: {this.state.fields.dob} </p>
                                <p> Age: {this.state.fields.age} </p>
                                <p> Gender: {this.state.fields.gender} </p>
                                <p> Email-id: {this.state.fields.emailid} </p>
                                <p> Phone Number: {this.state.fields.phoneNum} </p>
                            </div>
                        </div>
                    </div>
                </form >
            </React.Fragment>
        );
    }
}
