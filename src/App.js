import React, { Component } from 'react';
import './App.css';
import Form from './components/form/form'
import MapUsers from './components/mapUsers/mapUsers';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

  LOC_URL = 'https://cat-lovers-server.herokuapp.com/locations';
  mylatitude = "";
  mylongitude = "";
  city = "";
  ip = "";

  constructor(props){
    super(props);
    // this.getLocation();
    this.geoFindMe();
  }

  success = (position) => {
    this.mylongitude = position.coords.longitude;
    this.mylatitude = position.coords.latitude;
    this.saveLocation()
  }

  error = () => {
    this.getLocation();
  }

  geoFindMe = () => {
  
    if(!navigator.geolocation) {
     
    } else {
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
  
  }

  saveLocation(){
    let locData = {
      IP : this.ip,
      city : this.city,
      latitude : this.mylatitude,
      longitude : this.mylongitude
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
      }).catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  getLocation = () => {
    fetch('https://ipapi.co/json/')
      .then((response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
          response.json().then((data) => {
            this.mylongitude = data.longitude;
            this.mylatitude = data.latitude;
            this.city = data.city;
            this.ip = data.ip;
            this.saveLocation();
            // if(data.latitude != "12.9721" || data.longitude != "77.5933"){
              
          // }
    });
  });
}

  render(){
    return (
      <div className="App container-fluid"> 
            <div className="navDark d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow orange">
              <h5 className="my-0 mr-md-auto font-weight-normal">Blah Rules</h5>
              <nav className="my-2 my-md-0 mr-md-3 ">
                <a className="p-2 text-light" href="#">Users</a>
                <a className="p-2 text-light" href="#">Porjects</a>
                <a className="p-2 text-light" href="#">About</a>
                <a className="p-2 text-light" href="https://www.linkedin.com/in/ashik-paul-2ab793130/">Contact</a>
                {/* <a className="p-2 text-light" href="#">Support</a> */}
              </nav>
            </div>
          <br/>
        <Form/>
        <MapUsers/>
        <br/><br/>
      </div>
    );
  }
}

export default App;
