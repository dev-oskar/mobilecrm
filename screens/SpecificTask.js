import React from 'react';
import { Text, View, Button, Image, ActivityIndicator, Alert } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.


export default class SpecificTask extends React.Component {

  constructor(props) // Ta linia odpowiada za przechowywanie zmiennych. Puste stringi oznaczają możliwość dowolnego wyboru. Jeśli wrzucilibyśmy do userAssigned
  {                   //  np "Oskar", to ta wartość została by domyślnie wyświetlona.
    super(props);
    this.state = {
      isLoading: true, // Wartość ta ustawiona na true pozwala nam wykonać jakieś działanie podczas ładowania danych.
      userAssigned: 'Dla kogo:', // Użytkownik przydzielony do zadania
      priority: '1', // Priorytet zadania
      date: '',
      data: '',
      title: '',
      taskContent: '',
      companyAssigned: '',
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
         }, function() {
           // Tutaj możemy zrobić coś po załadowaniu.
         });
       })
       .catch((error) => {
         console.error(error);
       });
   }

  static navigationOptions = {
    title: 'Wróć',
    tapBarLabel: 'Zadanie',
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.check}</FontAwesome>
      )
    }
  }
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
      <View style={styles.container}>
          <View style={styles.AddTaskContent}>
              <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>ID:</Text> { taskId }</Text>
              <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Temat: </Text>{ this.state.dataSource.temat }</Text>
              <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Treść zadania:</Text> { this.state.dataSource.temat }</Text>
              <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Przydzielono:</Text>{ this.state.dataSource.temat } </Text>
              <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Dnia:</Text> { this.state.dataSource.data }</Text>
              <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Dla:</Text> { this.state.dataSource.temat }</Text>
              <Text style={styles.specificTaskText}><Text style={styles.specificTaskCategory}>Priorytet:</Text>{ this.state.dataSource.temat } </Text>
          </View>
      </View>
    )}
}
