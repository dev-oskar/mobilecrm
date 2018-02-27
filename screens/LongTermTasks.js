import React from 'react';
import { Text, View, Button, Image, } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class MainActivity extends React.Component {


  static navigationOptions = {
    tapBarLabel: 'Długoterminowe zadania',
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.calendarO}</FontAwesome>
      )
    }
  }
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
                Długoterminowe
            </Text>
          </View>
      </View>
    )}
}
