import React from 'react';
import { Text, TextInput, View, Button, Image, ActivityIndicator, Alert, TouchableHighlight, ScrollView } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-datepicker';


import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.


export default class SpecificTask extends React.Component {

  constructor(props) // Ta linia odpowiada za przechowywanie zmiennych. Puste stringi oznaczają możliwość dowolnego wyboru. Jeśli wrzucilibyśmy do userAssigned
  {                   //  np "Oskar", to ta wartość została by domyślnie wyświetlona.
    super(props);
    this.state = {
      isLoading: true, // Wartość ta ustawiona na true pozwala nam wykonać jakieś działanie podczas ładowania danych.
      dataSource: '',
    }
  }

  componentDidMount() {
    const taskID = this.props.navigation.state.params.taskId;

     return fetch('https://crm.veeo.eu/json', {
       method: 'POST',
       body: JSON.stringify({
         id: taskID,
         action: "task"
       })
     })
       .then((response) => response.json())
       .then((responseJson) => {
         console.log(responseJson)
         this.setState({
           isLoading: false,
           dataSource: responseJson,
         })
       })
       .catch((error) => {
         console.error(error);
       });
   }

  static navigationOptions = ({navigation}) => ({
    title: 'Wróć',
    // headerRight: <TouchableHighlight onPress={() => navigation.navigate('EditTask', {
    //     taskID: navigation.state.params.taskId,
    //     taskTitle: navigation.state.params.taskTitle
    // })} style={{padding:10, margin: 10}}><FontAwesome style={{ color: '#fff', fontSize: 25}}>{Icons.pencil}</FontAwesome></TouchableHighlight>,
    headerStyle: {backgroundColor: '#3399FF'},
    headerTitleStyle: {color: '#fff'},
    headerTintColor: '#fff',
    tapBarLabel: 'Zadanie',
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.check}</FontAwesome>
      )
    }
  })
  render(){
    const { navigation } = this.props.navigation;
    const taskId = this.props.navigation.state.params.taskId; // id zadania
    const taskTitle = this.props.navigation.state.params.taskTitle; // tytul zadania

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, position: 'absolute', bottom: '50%', alignSelf: 'center'}}>
            <ActivityIndicator />
        </View>
      );
    }
    return(
      <ScrollView style={styles.container}>
            <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>ID:</Text> { taskId }</Text>
            <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Temat: </Text>{ this.state.dataSource.temat }</Text>
            <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Treść zadania:{"\n"}</Text>{ this.state.dataSource.tresc }</Text>
            <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Przydzielono:</Text>{ this.state.dataSource.firma_id } </Text>
            <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Dnia:</Text> { this.state.dataSource.data }</Text>
            <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Dla:</Text> { this.state.dataSource.user_id }</Text>
            <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Priorytet:</Text>{ this.state.dataSource.priorytet } </Text>
            <TouchableHighlight
              style={styles.floatButton}
              onPress={() => this.props.navigation.navigate('EditTask', {
                taskId: taskId,
                taskTitle: taskTitle,
                taskContent: this.state.dataSource.tresc,
                taskFrom: this.state.dataSource.firma_id,
                taskDate: this.state.dataSource.data,
                taskUserAssigned: this.state.dataSource.user_id,
                taskPriority: this.state.dataSource.priorytet
               })}>
                  <Text style={styles.addButtonSign}><FontAwesome style={{color: '#fff', fontSize: 20}}>{Icons.pencil}</FontAwesome></Text>
            </TouchableHighlight>
      </ScrollView>
    )}
}
