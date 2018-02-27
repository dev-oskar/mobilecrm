import React from 'react';
import { Text, View, Button, Image, TextInput, TouchableHighlight } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.

export default class LogInScreen extends React.Component {


  static navigationOptions = {
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
          <View style={styles.header}>
              <Text style={styles.title}>
                  Logowanie
              </Text>
          </View>
          <View style={styles.contentLogIn}>
              <Text style={styles.descLogIn}>Pamiętaj o wpisaniu poprawnego adresu API przed logowaniem.</Text>
              <TextInput
                  style={styles.inputWhite}
                  placeholder='Adres e-mail'
                  placeholderTextColor='#fff'
                  autoCapitalize={'none'}
                  keyboardType={'email-address'}
                  autoFocus={true}
                  autoCorrect={false}
                  underlineColorAndroid='transparent'
              />
              <TextInput
                  style={styles.inputWhite}
                  placeholder='Hasło'
                  placeholderTextColor='#fff'
                  autoCapitalize={'none'}
                  keyboardType={'email-address'}
                  autoFocus={true}
                  autoCorrect={false}
                  underlineColorAndroid='transparent'
                  secureTextEntry={true}
              />
              <TouchableHighlight
                  style={styles.submitButton}
                  onPress={() => {
                    Alert.alert('Zalogowano użytkownika!')
                  }}
              >
                  <Text style={styles.submitButtonText}>Zaloguj</Text>
              </TouchableHighlight>
          </View>
      </View>
    )
  }
}
