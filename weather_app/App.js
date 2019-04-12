import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, StatusBar} from 'react-native';
import Weather from "./weather";
//import console = require('console');

const API_KEY = "2a21c6eb2cbf24a78d9f4e5c7daeaf06";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
    position => {
      console.log(position)
      this._getWeather(position.coords.latitude, position.coords.longitude);
    
      
      //what is set State here?
    /*  this.setState({
        isLoaded: true,
        error: null
      })
    */
    }//,
    /*
    error => {
      this.setState({
        error: error
      })
      console.log(error);
    }
    */
    )
  }
  _getWeather = (lat, lon) => {
    console.log('here in get weather!');
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json =>{
        this.setState({
          temperature:json.main.temp,
          name:json.weather[0].main,
          isLoaded: true
        })
        console.log(json);
      });
  }
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (//view component will be returned to necessary component.
      <View style={styles.container}>
      <StatusBar barStyle = "dark-content" />
        {isLoaded ? (<Weather weatherName = {name} temp={Math.floor(temperature - 273.15)}/>) : (
        <View style={styles.loading}>
          <ActivityIndicator />
          <Text style={styles.loadingText}>Getting the weather . . !</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}     
        </View>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText:{
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading:{
    flex:1,
    backgroundColor:"#FDF6AA",
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 30,
    marginBottom: 500
  }
});
