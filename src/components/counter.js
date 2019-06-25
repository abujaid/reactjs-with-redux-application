import React, { Component } from 'react'
import {connect} from 'react-redux'
 class Counter extends Component
{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }
    handelClick = ()=>{
       this.props.dispatch({type:'INC_COUNTER',payload:10})
    }
    handleSub = ()=>{
       this.props.dispatch({type:'DEC_COUNTER'})
    }
    render ()
    {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        
                        <div className="text-center bg-warning" style={{height:'50px',color:'white'}}>{this.props.ctr}</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-12 text-center"> 
                        <button className="btn btn-primary mr-2" onClick={this.handelClick}>Click</button>
                        <button className="btn btn-danger" onClick={this.handleSub}>Click</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
return{
    ctr:state.counter
}
}
export default connect(mapStateToProps)(Counter)