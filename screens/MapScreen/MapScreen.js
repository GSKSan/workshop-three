import React from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";
import axios from 'axios';
import { Button } from 'react-native-elements';

const initialRegion = {
    longitude: -122,
    latitude: 37,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09
}

export class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: initialRegion
        }
    }

    onRegionChangeComplete = (region) => {
        this.setState({
            region: region
        })
    }

    fetchJobs = async () =>{
            const latitude = this.state.latitude;
            const longitude = this.state.longitude;
            const response = await axios.get(`https://jobs.github.com/positions.json?lat=${latitude}&long=${longitude}`);
            console.log(response)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView region={this.state.region} style={{flex: 1}} onRegionChangeComplete={this.onRegionChangeComplete}/>
                <Button title="fetch" onPress={this.fetchJobs}/>
            </View>
        )
    }
}
