import React from 'react';
import { Text, View, TouchableHighlight, TextInput, Alert, AsyncStorage } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.

export default class LogInScreen extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      isLoading: true, // Wartość ta ustawiona na true pozwala nam wykonać jakieś działanie podczas ładowania danych.
      myKey: null
    }
  }

  static navigationOptions = {
    title: 'Adres API',
    tapBarLabel: 'Adres API',
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.plug}</FontAwesome>
      )
    }
  }

  async getKey(){
    try{
      const value = await AsyncStorage.getItem('apiAddress');
      this.setState({myKey: value});
    } catch (error) { console.log("Błąd podczas ładowania danych: " + error); }
  }

  async saveKey(value){
    try {
      await AsyncStorage.setItem('apiAddress', value);
    } catch (error) { console.log("Błąd podczas zapisywania danych: " + error); }
  }

  async resetKey() {
    try {
      await AsyncStorage.removeItem('apiAddress');
      const value = await AsyncStorage.getItem('apiAddress');
      this.setState({myKey: value});
    } catch (error) { console.log("Błąd podczas resetowania danych: " + error); }
}

  render(){
    return(
      <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>
                  Ustawienia API
              </Text>
            </View>
            <View style={styles.contentAPI}>
              <View style={{width: '80%', alignSelf: 'center'}}>
                  <Text style={styles.descLogIn}><Text style={{color: 'red', fontSize: 12,}}>Pamiętaj!</Text>{"\n"}Adres możesz zmienić w dowolnej chwili</Text>
                  <Text style={{color: '#b0b0b0', fontSize: 10, fontWeight: 'bold'}}>Adres powinien zawierać szyfrowaną (https) ścieżkę URL do odpowiedniego pliku w formacie .json</Text>
              </View>
              <TextInput
                  style={styles.inputWhite}
                  placeholder={ 'Wpisz adres...' }
                  placeholderTextColor={'#000'}
                  autoFocus={true}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  underlineColorAndroid='transparent'
                  blurOnSubmit={true}
                  defaultValue={this.state.myKey}
                  onChangeText={(value) => this.saveKey(value)}
              />
              <View style={styles.apiButtonContainer}>
                <TouchableHighlight
                    style={styles.apiButtonLoad}
                    onPress={this.getKey.bind(this)}>
                    <Text style={styles.apiButtonLabel}><FontAwesome style={{color: 'white', fontSize: 30}}>{Icons.download}</FontAwesome></Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.apiButtonReset}
                    onPress={this.resetKey.bind(this)}>
                    <Text style={styles.apiButtonLabel}><FontAwesome style={{color: 'white', fontSize: 30}}>{Icons.trash}</FontAwesome></Text>
                </TouchableHighlight>
              </View>
              <View style={styles.apiButtonContainer}>
                  <Text style={styles.buttonLabel}>Załaduj adres</Text>
                  <Text style={styles.buttonLabel}>Resetuj adres</Text>
              </View>
            </View>
      </View>
    )}
}
