import React from 'react';
import { Text, View, Button, Image, TouchableHighlight, Alert, ActivityIndicator, AsyncStorage } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.
import { StackNavigator } from 'react-navigation';
import AddTaskForm from './AddTaskForm'

export default class MainActivity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasksCount: 1,
      isLoading: true,
      stateUsername: ''
    }
  }
  static navigationOptions = {
    title: 'Strona główna',
    tapBarLabel: 'Okno głowne',
    headerStyle: {backgroundColor: '#3399FF'},
    headerTitleStyle: {color: '#fff'},
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.home}</FontAwesome>
      )
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('loggedUserName')
    .then((value) => {
      if(value !== null){
      this.setState({'stateUsername': value})
    }else{this.setState({'stateUsername': 'DUPA'})}
    })
    .done();

    return fetch('http://crm.veeo.eu/json/zadania')
      .then((response) => {
        this.setState({
            tasksCount: Object.keys(response).length,
            isLoading: false,
        })
        response.json()
      })
      .then((responseJson) => {
        return responseJson;
        console.log(tasksCount)
        Alert.alert("dupa : " + this.state.stateUsername)

      })
      .catch((error) => {
        console.error(error);
      })
      .done();
  }

  render(){
    const userName = this.state.stateUsername
    const { navigation } = this.props.navigation;

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, position: 'absolute', bottom: '50%', alignSelf: 'center'}}>
          <ActivityIndicator size={'large'} color={'#46237A'} />
        </View>
      );
    }
    return(
    <View style={styles.container}>
        <View style={styles.mainContent}>
            <Text style={styles.mainHello}>Witaj, { userName }</Text>
            <Text style={styles.mainString}>Ilość zadań aktywnych: { this.state.tasksCount }</Text>
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
