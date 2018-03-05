import React from 'react';
import { Text, View, Button, Image, TextInput, TouchableHighlight, Alert, AsyncStorage } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.

export default class LogInScreen extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      apiAddress: '',
      username: '',
      password: '',
    }
  }

  static navigationOptions = {
    title: 'Logowanie',
    headerStyle: {backgroundColor: '#3399FF'},
    headerTitleStyle: {color: '#fff'},
    tapBarLabel: 'Logowanie',
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.signIn}</FontAwesome>
      )
    }
  }
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.contentLogIn}>
              <View style={{width: '80%', alignSelf: 'center'}}>
                  <Text style={styles.descLogIn}>Pamiętaj o wpisaniu poprawnego adresu API przed logowaniem.</Text>
              </View>
              <TextInput
                  style={styles.inputWhite}
                  placeholder='Adres e-mail'
                  placeholderTextColor='#000'
                  autoCapitalize={'none'}
                  keyboardType={'email-address'}
                  autoFocus={true}
                  autoCorrect={false}
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({username: text})}
              />
              <TextInput
                  style={styles.inputWhite}
                  placeholder='Hasło'
                  placeholderTextColor='#000'
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  underlineColorAndroid='transparent'
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({password: text})}
              />
              <TouchableHighlight
                  style={styles.addTaskButton}
                  onPress={() => {
                    fetch('https://crm.veeo.eu/json', {
                      method: 'POST',
                      body: JSON.stringify({
                        action: "login",
                        user: this.state.username,
                        password: this.state.password
                      }),
                    })
                    .then(response => response.json())
                    .then(json => {
                      console.log(json)
                      if(Object.keys(json).length > 0){
                        Alert.alert('Zalogowano poprawnie')
                      }
                      if(Object.keys(json).length = null){
                        Alert.alert('Wprowadzono niepoprawne dane')
                      }
                    })
                  }}
              >
                  <Text style={styles.addTaskButtonText}>Zaloguj</Text>
              </TouchableHighlight>
          </View>
      </View>
    )
  }
}
