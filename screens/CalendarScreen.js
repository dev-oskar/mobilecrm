import React from 'react';
import { Text, View, Button, Image, } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { Calendar, CalendarList, Agenda, } from 'react-native-calendars'; // Widok kalendarza
import {LocaleConfig} from 'react-native-calendars';

import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.


export default class CalendarScreen extends React.Component {

  static navigationOptions = {
    tapBarLabel: 'Kalendarz',
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.calendar}</FontAwesome>
      )
    }
  }
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
            <Calendar
                onDayPress={(day) => {console.log('selected day', day)}}
                monthFormat={'yyyy MM'}
            />
          </View>
      </View>
    )}
}
