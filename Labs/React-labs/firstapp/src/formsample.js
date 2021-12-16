import React from "react";

//this is an example of class component
class FormSample extends React.Component {

    constructor(params) {
        super();
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            formvalid: false,
            emailValid: false,
            passwordValid: false
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }
    //validate fields
    validateField(field, value) {
        let fieldValidateErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (field) {
            case 'email':
                emailValid = value.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
                fieldValidateErrors.email = emailValid ? '' : 'is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidateErrors.password = passwordValid ? '' : 'is too short';
                break;
            default:
                break
        }
        this.setState({ formErrors: fieldValidateErrors, emailValid: emailValid, passwordValid: passwordValid }, 
            this.validateForm)
    }

    validateForm() {
        this.setState({ formvalid: this.state.emailValid && this.state.passwordValid });
    }
    render() {
        return (
            <>
                <form>
                    <h2>Signup</h2>
                    <label>Email address</label>
                    <div>
                        {/* <FormErrors formErrors={this.state.formErrors}/> */}
                    </div>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleUserInput} />
                    <br /><br />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleUserInput} />
                    <br /><br />
                    <input type="button" value="Submit" disabled={!this.state.formvalid} />
                </form>

            </>
        );
    }
}

export default FormSample;