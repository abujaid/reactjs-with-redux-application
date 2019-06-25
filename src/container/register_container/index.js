import React, { Component } from 'react'
import Register from '../../components/register'
import Header from '../../components/common/header';
import { connect } from 'react-redux'
import { signup } from '../../actions/signup_action'

class RegisterContainer extends Component
{
    constructor (props)
    {
        super(props)
        this.state = {
            registerSuccessMessage: '',
            registerErrorMessage: '',
            registerSuccess: false

        }
    }
    submit = (formData) =>
    {
        this.props.signup(formData)

        if (this.props.Signup.status) {
            this.setState({
                ...this.state,
                registerSuccessMessage: 'Congratulation! Your account has been created.',
                registerErrorMessage: '',
                registerSuccess: true
            })
        } else {
            this.setState({
                ...this.state,
                registerSuccessMessage: '',
                registerErrorMessage: 'Something gone wrong!',
                registerSuccess: false
            })
        }
    }

    render ()
    {
        console.log('====>', this.state)
        return (
            <div>
                <Header />
                <Register
                    success={this.state.registerSuccessMessage}
                    error={this.state.registerErrorMessage}
                    submit={this.submit}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) =>
{
    return {
        Signup: state.Signup
    }
}
export default connect(mapStateToProps, { signup })(RegisterContainer)