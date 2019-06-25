import React, { Component } from 'react';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }
    handelChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    render () {
        return (
            <div className="AddPerson">
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    onChange={this.handelChange}
                    value={this.state.name} />
                <input 
                    type="number" 
                    name="age"
                    placeholder="Age"
                    onChange={this.handelChange}
                    value={this.state.age} />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;