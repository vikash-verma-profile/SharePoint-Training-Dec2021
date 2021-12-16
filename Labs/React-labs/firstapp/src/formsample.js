import React from "react";

//this is an example of class component
class FormSample extends React.Component {
    constructor(params) {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleUserInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    validateForm=()=>{
        console.log(this.state.email);
        console.log(this.state.password);
    }
    render() {
        return (
            <>
                <form>
                    <h2>Signup</h2>
                    <label>Email address</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleUserInput} />
                    <br/><br/>
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleUserInput} />
                    <br/><br/>
                    <input type="button" value="Submit" onClick={this.validateForm}/>
                </form>

            </>
        );
    }
}

export default FormSample;