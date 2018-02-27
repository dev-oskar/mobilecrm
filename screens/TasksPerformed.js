import React from 'react';
import { Text, View, Button, Image, } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.


export default class TasksPerformed extends React.Component {


  static navigationOptions = {
    tapBarLabel: 'Wykonane zadania',
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.check}</FontAwesome>
      )
    }
  }
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
                Wykonane
            </Text>
          </View>
      </View>
    )}
}
