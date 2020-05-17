import React, { Component }from 'react';
import './mapUsers.css'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

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
                this.setState({ locations : locations });
            });
    }

    render(){
        const Map = ReactMapboxGl({
            accessToken:'pk.eyJ1IjoiYXNoaWtwYXVsIiwiYSI6ImNrYWFwdWlqYjB1dHYzMnM5ZmhybXoweXUifQ.c-RJnUB83cyvk-o0iUnhQQ'
        });
        return (<div className="MapMain">
                <div id="MapBoxDiv">
                    <Map
                        style="mapbox://styles/mapbox/dark-v10"
                        center={[77.5946, 12.9716]}
                        zoom={[3]}
                        containerStyle={{
                            height: '720px',
                            width: '100%'
                        }}>
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'rocket-15' }}>
                            {this.state.locations.length ? this.state.locations.map((loc)=>{
                                return <Feature coordinates={[ loc.longitude, loc.latitude ]} />
                            }) : ""}
                        </Layer>
                    </Map>
                </div>
        </div>);
    }
}

export default MapUsers;