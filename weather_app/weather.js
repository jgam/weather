import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import {Ionicons} from "@expo/vector-icons";
import PropTypes from "prop-types";

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
        
    }
}

function Weather({ temp }, ){
    return(
        <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <Text>hello this is sea . . !</Text>
        <View style={styles.upper}>
            <Ionicons color="white" size={144} name="ios-rainy"/>
            <Text style={styles.temp}>{temp} degrees</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.titles}>Raining Like</Text>
            <Text style={styles.subtitle}>For more info look outside</Text>
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