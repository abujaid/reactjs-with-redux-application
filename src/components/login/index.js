import React, { Component } from 'react'

export default class Login extends Component
{
    constructor (props)
    {
        super(props)
        this.state = {
            form: {
                email: "",
                password: ""
            }
        };
    }

    handelChange = (event) =>
    {
        // this.setState({ [e.target.name]: e.target.value })
        let attribute = event.target.getAttribute("data-state");
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [attribute]: event.target.value
            }
        });
    }
    handelSubmit = (event) =>
    {
        event.preventDefault()
        this.props.submit(this.state.form);
    }
    render ()
    {

        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">

                        <form action="" onSubmit={this.handelSubmit}>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" name="email"
                                    data-state="email"
                                    className="form-control"
                                    value={this.state.form.email}
                                    onChange={this.handelChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" name="password"
                                    data-state="password"
                                    className="form-control"
                                    value={this.state.form.password}
                                    onChange={this.handelChange}
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">LogIn</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
