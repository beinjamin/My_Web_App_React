import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            couter:1,
            list:[0]

        }
    }
    render() {
        return (
            <div className="card m-3">
                <div className="card-header">
                    <strong>
                    {this.props.title} : {this.state.counter}
                    </strong>
                    <div className="m1-auto">
                        <button onClick={()=>this.computer('+')} className="btn btn-primary m-2">+</button>
                        <button onClick={()=>this.computer('-')} className="btn btn-primary m-2">-</button>
                    </div>
                </div>
            <div className="card-body">
                    <img width={100} src={this.props.image}/>
            </div>
            </div>
                
        
        );
    }
}

export default Counter;
