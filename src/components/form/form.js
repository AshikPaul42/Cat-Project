import React, { Component }from 'react';
import './form.css'
import Tweet from '../tweet/tweet'

class Form extends Component {

    API_URL = 'https://reminiscent-browser.glitch.me/mews';

    constructor(props){
        super(props);
        this.state ={
            allTweets : []
        };
        this.loadAllMews();
    }   

    loadAllMews = () =>{
        fetch(this.API_URL)
            .then(res => res.json())
            .then(allmews =>{
                this.setState({
                    allTweets : allmews
                });
            });
    };

    onSubmit = (event) => {
        event.preventDefault();
        const formElements = document.querySelector('form');
        const formData = new FormData(formElements);
        const name = formData.get("name");
        const content = formData.get("content");

        const meow = {
            name,
            content,
            created : new Date().toDateString()
        };
        fetch(this.API_URL, {
            method: 'POST',
            body : JSON.stringify(meow),
            headers:{
                'content-type' : 'application/json'
            }
        }).then(res=> res.json())
        .then(createdMew => {
            console.log(createdMew);
            formElements.reset();
            // formElements.style.display = 'none';
            // setTimeout(()=>{
            //     formElements.style.display = '';
            // }, 30000)
            this.loadAllMews();
        });
    }

    render(){
        return (
        <div className="Form">
            <form>
                <label>Name</label>
                <br/>
                <input type="text" name="name" id="name" required/>
                <br/><br/>
                <label>Description</label>
                <br/>
                <textarea type="text" name="content" id="content" required/>
                <br/><br/>
                <button onClick={this.onSubmit}>Submit</button>
            </form>
            <br/>
            {this.state.allTweets.map((tweet)=>{
                if(tweet.name)
                    return <Tweet name={tweet.name} content={tweet.content} date={tweet.created}/>
            })}
        </div>);
    }
}

export default Form;