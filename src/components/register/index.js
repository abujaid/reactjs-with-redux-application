import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Register extends Component
{
    constructor (props)
    {
        super(props)
        this.state = {
            form: {
                email: '',
                password: '',
                phone: ''
            }
        }
    }
    handelChange = (event) =>
    {
        let name = event.target.name
        let value = event.target.value;
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }
    handelSubmit = (event) =>
    {
        event.preventDefault();
        this.props.submit(this.state.form)
    }
    handleMessage = () =>
    {
        if (this.props.error) {
            return (
                <div className="alert alert-danger" role="alert">
                    <strong>Error!:</strong> {this.props.error}
                </div>
            );
        }
        else if (this.props.success !== "") {
            return (
                <div className="alert alert-success" role="alert">
                    <strong>Success:</strong> {this.props.success}
                </div>
            );
        }
    };
    render ()
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card">
                            {this.handleMessage()}
                            <div className="card-body">
                                <form action="" onSubmit={this.handelSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="text" className="form-control"
                                            name="email"
                                            value={this.state.form.email}
                                            onChange={this.handelChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <input type="password" className="form-control"
                                            name="password"
                                            value={this.state.form.password}
                                            onChange={this.handelChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Phone</label>
                                        <input type="text" className="form-control"
                                            name="phone"
                                            value={this.state.form.phone}
                                            onChange={this.handelChange}
                                        />
                                    </div>
                                    <div className="form-group mt-2">
                                        <button className="btn btn-primary mr-2">Sign In</button>
                                        <Link to="/login" className="btn btn-success">Log In</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
