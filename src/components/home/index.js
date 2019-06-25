import React, { Component } from 'react'
import Header from '../common/header';

export default class Home extends Component
{
    render ()
    {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate itaque dolorum ullam sunt laborum odit voluptates quidem. Natus illum nam repellat facilis. Veniam illum corporis dicta vitae necessitatibus nemo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate itaque dolorum ullam sunt laborum odit voluptates quidem. Natus illum nam repellat facilis. Veniam illum corporis dicta vitae necessitatibus nemo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate itaque dolorum ullam sunt laborum odit voluptates quidem. Natus illum nam repellat facilis. Veniam illum corporis dicta vitae necessitatibus nemo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
