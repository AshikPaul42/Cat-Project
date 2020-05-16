import React, { Component } from 'react';
import './App.css';
import Form from './components/form/form'
import 'office-ui-fabric-react/dist/css/fabric.min.css';
import MapUsers from './components/mapUsers/mapUsers';

class App extends Component{

  LOC_URL = 'https://cat-lovers-server.herokuapp.com/locations';

  constructor(props){
    super(props);
    this.getLocation();
  }



  getLocation = () => {
    fetch('https://ipapi.co/json/')
      .then((response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
          response.json().then((data) => {
            let locData = {
              IP : data.ip,
              city : data.city,
              latitude : data.latitude,
              longitude : data.longitude
            };
            fetch(this.LOC_URL, {
              method: 'POST',
              body : JSON.stringify(locData),
              headers:{
                  'content-type' : 'application/json'
              }
            }).then(res=> res.json())
            .then((res)=> { 
              console.log(res); 
            });
        }).catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    });
}

  render(){
    return (
      <div className="App container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-2 pt-1">
              <a className="text-muted" href="https://www.linkedin.com/in/ashik-paul-2ab793130/">Contact</a>
            </div>
            <div className="col-6 text-center">
              <h3 className="font-weight-normal blog-header-logo text-dark">Twitter for cats and dogs</h3>
            </div>
            <div className="col-2 d-flex justify-content-end align-items-center"></div>
          </div>
        </header>
        <hr/>
        <Form/>
        <MapUsers/>
      </div>
    );
  }
}

export default App;
