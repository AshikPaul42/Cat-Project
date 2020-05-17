import React, { Component }from 'react';
import './tweet.css'

class Tweet extends Component {
    render(){
        return(
            <div className="col-md-3">
                <div className="card flex-md-row mb-4 box-shadow h-md-250 bg-dark ">
                    <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">
                            <a className="text-light" href="#">{this.props.name}</a>
                        </h3>
                            <div className="mb-1 text-light">{new Date(this.props.date).toDateString()}</div>
                            <p className="card-text text-light mb-auto">{this.props.content}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tweet;