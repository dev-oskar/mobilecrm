import React from 'react';
import { Text, View, TouchableHighlight, TextInput, Alert } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.

export default class LogInScreen extends React.Component {


  static navigationOptions = {
    tapBarLabel: 'Adres API',
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.plug}</FontAwesome>
      )
    }
  }
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
                Adres API
            </Text>
          </View>

            <View style={styles.contentAPI}>
              <Text style={styles.descLogIn}>Adres Api można zmienić w dowolnej chwili.</Text>
              <TextInput
                  style={styles.inputWhite}
                  placeholder={ 'Wpisz adres...' }
                  placeholderTextColor={'#fcfcfc'}
                  autoFocus={true} // Po uruchomieniu ekranu "skup" się na tym polu
                  autoCapitalize={'none'} // Normalnie każdy wpisany tekst zaczynałby się z wielkiej litery, ta linia zapobiega temu efektowi.
                  autoCorrect={false}
                  underlineColorAndroid='transparent' // Zniknięcie szarego podkreślenia w domyślnym TextInput Androida.
                  blurOnSubmit={true}
              />
              <TouchableHighlight
                  style={styles.submitButton}
                  onPress={() => {
                    Alert.alert('Zapisano poprawnie!')
                  }}
              >
                  <Text style={styles.submitButtonText}>Zapisz!</Text>
              </TouchableHighlight>
            </View>
      </View>
    )}
}
