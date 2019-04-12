import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from "prop-types";
//import console = require('console');

/*
export default class Weather extends Component{
    render(){
        return(
        <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <Text>hello this is sea . . !</Text>
        <View style={styles.upper}>
            <Ionicons color="white" size={144} name="ios-rainy"/>
            <Text style={styles.temp}>35 degrees</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.titles}>Raining Like</Text>
            <Text style={styles.subtitle}>For more info look outside</Text>
        </View>
        </LinearGradient>
        );
    }
}
*/

const WeatherCases = {
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: 'weather-rainy'
    },
    Clear:{
        colors:['#FEF253', '#FF7300'],
        title: "Sunny!!",
        subtitle: "skin style",
        icon: 'weather-sunny'
    },
    Thunderstorm:{
        colors:['#00ECBC', '#007ADF'],
        title: "Thunderstorm!!",
        subtitle: "Vetments rain coat",
        icon: 'weather-lightning'
    },
    Clouds:{
        colors:['#D7D2CC', '#304352'],
        title: "Cloudy!!",
        subtitle: "geting a light coat!",
        icon: 'weather-cloudy'
    },
    Snow:{
        colors:['#7DE2FC', '#B9B6E5'],
        title: "Snow!!",
        subtitle: "Do you want to build a snow man?",
        icon: 'weather-snowy'
    },
    Drizzle:{
        colors:['#89F7FE', '#66A6FF'],
        title: "Drizzle!!",
        subtitle: "hating the cold ice skates",
        icon: 'weather-hail'
    },
    Mist:{
        colors: ['#D7D2CC', '#304352'],
        title: "Mist!!",
        subtitle: "feels good like a mist",
        icon: 'weather-fog'
    },
    Haze:{
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "this is Haze!",
        icon: "weather-windy-variant"
    }
}

function Weather({ weatherName, temp }, ){
    console.log('**************',weatherName)
    return(
        <LinearGradient colors={WeatherCases[weatherName].colors} style={styles.container}>
        <View style={styles.upper}>
            <MaterialCommunityIcons color="white" size={144} name={WeatherCases[weatherName].icon}/>
            <Text style={styles.temp}>{temp} degrees</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.titles}>{WeatherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>{WeatherCases[weatherName].subtitle}</Text>
        </View>
        </LinearGradient>
    )
}
//what is this proptypes?
Weather.propTypes = {
    temp: PropTypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "transparent"
    },
    temp:{
        fontSize: 45,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower:{
        flex: 1,
        alignItems: "flex-start",
        justifyContent:"flex-end",
        paddingLeft: 25
    },
    titles: {
        fontSize: 30,
        backgroundColor:"transparent",
        color: "white",
        marginBottom:10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize:25,
        backgroundColor:"transparent",
        color: "white",
        marginBottom:24
    }
})