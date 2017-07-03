/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FinanceApp extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
            <View style={styles.leftHeaderContainer}>
                <Text style={styles.logoText}>UPATU</Text>
            </View>
            <View style={styles.rightHeaderContainer}>
                <Icon name='search' color='#ffffff' size={23} style={{padding:5}}/>
                <Icon name='call' color='#ffffff' size={23} style={{padding:5}}/>
                <Icon name='more-vert' color='#ffffff' size={23} style={{padding:5}}/>

            </View>
        </View>
        <View style={styles.contentContainer}>
            <Text> this is the content container </Text>

        </View>
   
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    backgroundColor: '#6633CC',
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent : 'space-between',
    paddingRight: 5,
  },
  contentContainer: {
    backgroundColor: '#ffffff',
    flex : 6,
  },
  rightHeaderContainer:{
    flexDirection:'row',
    alignItems:'flex-end',
  },

  leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  logoText:{
    color: 'white',
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10,
  },

});

AppRegistry.registerComponent('FinanceApp', () => FinanceApp);
