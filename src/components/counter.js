import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card m-3">
                <div className="card-header">
                    <strong>
                    {this.props.title} : {this.props.value}
                    </strong>
                </div>
            <div className="card-body">
                    <img width={100} src={this.props.image}/>
            </div>
            </div>
                
        
        );
    }
}

export default Counter;
