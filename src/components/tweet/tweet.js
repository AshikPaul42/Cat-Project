import React, { Component }from 'react';
import './tweet.css'

class Tweet extends Component {
    render(){
        return(
            <div className="tweet">
                <label>{this.props.name}</label>
                <br/>
                <label>{this.props.content}</label>
                <br/>
                <label>{this.props.date}</label>
            </div>
        );
    }
}

export default Tweet;