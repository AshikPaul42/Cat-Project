import React, { Component }from 'react';
// import * as LMap from 'leaflet';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

class MapUsers extends Component {

    API_URL = 'https://cat-lovers-server.herokuapp.com/locations';

    constructor(props){
        super(props);
        this.state = {
            locations : []
        };
        this.getExistingLocations();
    }

    getExistingLocations = () => {
        fetch(this.API_URL)
            .then(res => res.json())
            .then(locations =>{
                this.setState({
                    locations : locations
                });
                console.log(locations);
            });
    }

    render(){
        return (<div>
            <Map center={[50.879, 4.6997]} zoom={3} width={1000} height={1000}>
                {this.state.locations.map((loc)=>{
                    return <Marker anchor={[parseFloat(loc.latitude), parseFloat(loc.longitude)]} payload={1} onClick={({ event, anchor, payload }) => {}} />
                })}

                <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
                <img src='pigeon.jpg' width={240} height={158} alt='' />
                </Overlay>
            </Map>
        </div>);
    }
}

export default MapUsers;