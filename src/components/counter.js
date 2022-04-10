import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.props.title}
                </div>
            <div className="card-body">
                    Content
            </div>
            </div>
                
        
        );
    }
}

export default Counter;
