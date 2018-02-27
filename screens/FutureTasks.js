import React from 'react';
import { Text, View, Button, Image, } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.

export default class MainActivity extends React.Component {


  static navigationOptions = {
    tapBarLabel: 'Przyszłe zadania',
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.road}</FontAwesome>
      )
    }
  }
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
                Przyszłe
            </Text>
          </View>
      </View>
    )}
}
