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
      stateUsername: '',
      isLoading: true,
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

  componentDidMount() {
    AsyncStorage.getItem('loggedUserName')
    .then((value) => {
      if(value !== null){
      this.setState({'stateUsername': value, isLoading: false,})
    }else{ }
    })
    .done();
  }

  render(){
    // Jeśli użytkownik nie jest zalogowany, wyswietl:
    if(this.state.stateUsername !== ''){
      return(
        <View style={styles.container}>
          <View style={styles.contentLoggedOut}>
              <View style={{width: '80%', alignSelf: 'center'}}>
              <Text style={styles.descLoggedOut}>Jesteś już zalogowany, <Text style={{fontSize: 25}}>{ this.state.stateUsername }</Text>.{"\n"}<Text style={{fontSize: 15,}}>Czy chcesz się wylogować?</Text></Text>
              </View>
              <TouchableHighlight
                style={styles.addTaskButton}
                onPress={
                () => {
                  AsyncStorage.removeItem('loggedUserName')
                  Alert.alert("Wylogowano pomyślnie")
                }
              } >
                <Text style={styles.addTaskButtonText}>Wyloguj</Text>
              </TouchableHighlight>
          </View>
        </View>
      )

      // Jeśli użytkownik jest zalogowany, wyświetl:
    }else{return(
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
                      if(json.status === "1"){
                        Alert.alert('Witaj ' + json.username + '. Miłego dnia!');
                        AsyncStorage.setItem('loggedUserId', json.id);
                        AsyncStorage.setItem('loggedUserName', json.username);
                      }else{
                        Alert.alert('Wprowadzono niepoprawne dane!')
                      }
                    })
                  }}
              >
                  <Text style={styles.addTaskButtonText}>Zaloguj</Text>
              </TouchableHighlight>
          </View>
      </View>
    )}
  }
}
