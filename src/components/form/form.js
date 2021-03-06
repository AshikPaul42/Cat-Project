import React, { Component }from 'react';
import './form.css';
import Tweet from '../tweet/tweet';
// import {  } from 'office-ui-fabric-react/lib/TextField';
import { TextField, PrimaryButton } from 'office-ui-fabric-react';

class MainForm extends Component {

    API_URL = 'https://cat-lovers-server.herokuapp.com/mews';

    constructor(props){
        super(props);
        this.state ={
            allTweets : [],
            name : "",
            description : ""
        };
        this.loadAllMews();
        console.log("Hello");
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
        const name = document.querySelector('#name').value;
        const content = document.querySelector('#content').value;

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
        .then(()=> {
            document.querySelector('#name').value = "";
            document.querySelector('#content').value = "";
            // setTimeout(()=>{
            //     document.querySelector('form').style.display = '';
            // }, 30000)
            this.loadAllMews();
        });
    }

    render(){
        return (
            <div className="Form ms-Grid" dir="ltr">
                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className={"row mb-2 alignItemsDown"}>
                    <div className="col-md-2 col-sm-12 col-lg-2">
                        <TextField label="Your pet's name " required id="name"/>
                    </div>
                    <div className="col-md-8 col-sm-12 col-lg-9">
                        <TextField label="Describe your pet " required id="content" rows={1}/>
                    </div>
                    <div className="col-md-2 col-sm-12 col-lg-1">
                        <PrimaryButton onClick={this.onSubmit}>Submit</PrimaryButton>
                    </div>
                </div>
                <br/>
                </div>
                <div className="row"> 
                        {this.state.allTweets.map((tweet)=>{
                            if(tweet.name)
                                return <Tweet name={tweet.name} content={tweet.content} date={tweet.created}/>
                        })}
                </div>
            </div>);
    }
}

export default MainForm;