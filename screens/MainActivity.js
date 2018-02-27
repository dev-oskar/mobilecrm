import React from 'react';
import { Text, View, Button, Image, TouchableHighlight, Alert } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.
import { StackNavigator } from 'react-navigation';
import AddTaskForm from './AddTaskForm'

export default class MainActivity extends React.Component {

  static navigationOptions = {
    title: 'Okno główne',
    header: null,
    tapBarLabel: 'Okno głowne',
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.home}</FontAwesome>
      )
    }
  }
  render(){
    const name = 'Oskar'
    const { navigation } = this.props.navigation;

    return(
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
              Strona główna
          </Text>
        </View>

        <View style={styles.mainContent}>
            <Text style={styles.mainHello}>Witaj, { name }</Text>
            <Text style={styles.mainString}>Ilość zadań aktywnych: 0</Text>
            <Text style={styles.mainString}>Ilość zadań wykonanych: 0</Text>
        </View>
        <TouchableHighlight
          style={styles.addButton}
          onPress={() => this.props.navigation.navigate('AddTaskForm')}>
              <Text style={styles.addButtonSign}>+</Text>
        </TouchableHighlight>
    </View>
  )}
}
