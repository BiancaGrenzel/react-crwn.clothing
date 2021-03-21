import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.prevent.Default();
        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name }= event.target;

        this.setState({ [name]: value })
    }


    render(){
        return(
            <div className='sign-in'>
                <h2 className=''>I already have an account</h2>
                <span>Sign in with your email account</span>

                <form onSubmit={this.handleSubmit}>
                    <input name='email' type='email' value={this.state.email} onChange={this.handleChange} required></input>
                    <label>Email</label>
                    <input name='password' type='password' value={this.state.password} onChange={this.handleChange} required></input>
                    <label>Password</label>

                    <input type='submit' value='Submit Form'></input>
                </form>
            </div>
        )
    }
}

export default SignIn;