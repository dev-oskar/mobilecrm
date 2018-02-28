import React from 'react';
import { Text, View, Button, Image, TextInput, Picker, ActivityIndicator, TouchableHighlight, Alert } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import DatePicker from 'react-native-datepicker';

import styles from '../styles/main' // Plik opisujacy wyglad poszczegolnych elementow.

export default class AddTaskForm extends React.Component {

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
     return fetch('http://crm.veeo.eu/json/dodajzadanie') // Link z ktorego zczytywany będzie json
       .then((response) => response.json())
       .then((responseJson) => {
         this.setState({
           isLoading: false,
           dataSource: responseJson
         }, function() {
           // Tutaj możemy zrobić coś po załadowaniu.
         });
       })
       .catch((error) => {
         console.error(error);
       });
   }

  static navigationOptions = {
    title: 'Edytuj zadanie',
    headerStyle: {backgroundColor: '#3399FF'},
    headerTitleStyle: {color: '#fff'},
    headerTintColor: '#fff',
    tapBarLabel: 'Wykonane zadania',
    drawerIcon: ({tintColor}) => {
      return(
         <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.plus}</FontAwesome>
      )
    }
  }
  render(){
  const { navigate } = this.props.navigation;
  const taskId = this.props.navigation.state.params.taskId;
  const taskTitle = this.props.navigation.state.params.taskTitle;
  const taskContentBig = this.props.navigation.state.params.taskContent;
  const taskFrom = this.props.navigation.state.params.taskFrom;
  const taskDate = this.props.navigation.state.params.taskDate;
  const taskUserAssigned = this.props.navigation.state.params.taskUserAssigned;
  const taskPriority = this.props.navigation.state.params.taskPriority;




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
              <TextInput
                  style={styles.inputWhite}
                  placeholder='Temat zadania...'
                  placeholderTextColor='#000'
                  autoCapitalize={'none'}
                  onChangeText={(text) => this.setState({title: text})}
                  underlineColorAndroid={'transparent'}
                  defaultValue={ taskTitle }
              />
              <TextInput
                  style={styles.inputWhiteBig}
                  placeholder='Treść zadania...'
                  placeholderTextColor='#000'
                  autoCapitalize={'none'}
                  multiline={true}
                  onChangeText={(taskContent) => this.setState({taskContent: taskContent})}
                  underlineColorAndroid={'transparent'}
                  defaultValue={ taskContentBig }
              />
              <TextInput
                  style={styles.inputWhite}
                  placeholder='Wybierz firmę...'
                  placeholderTextColor='#000'
                  autoCapitalize={'none'}
                  onChangeText={(companyAssigned) => this.setState({companyAssigned: companyAssigned})}
                  underlineColorAndroid={'transparent'}
              />
              <View style={{backgroundColor: 'transparent', borderBottomWidth: 1, width: '80%', alignSelf: 'center', marginBottom: 10,}}>
                  <Picker
                      selectedValue={ taskPriority }
                      onValueChange={(itemValue, itemIndex) => this.setState({priority: itemValue})}
                      style={styles.addTaskPicker}
                      >
                        { this.state.dataSource.priority.map((item, key) => (
                          <Picker.Item label={item.nazwa} value={item.id} key={key} />
                        ))}
                  </Picker>
              </View>
              <View style={{width: '80%', alignSelf: 'center', marginBottom: 10, borderBottomWidth: 1,}}>
                  <DatePicker
                      style={styles.datePicker}
                      date={ taskDate }
                      mode='date'
                      placeholder='Wybierz datę'
                      format='DD-MM-YYYY'
                      confirmBtnText='Wybierz'
                      cancelBtnText='Anuluj'
                      customStyles={{
                        dateText: {
                          color: '#000',
                          alignSelf: 'flex-start',
                        },
                        dateInput: {
                          backgroundColor: 'transparent',
                          borderColor: 'transparent',
                          alignSelf: 'flex-start',
                        },
                        placeholderText: {
                          color: '#000',
                          alignSelf: 'flex-start',
                        },
                      }}
                      onDateChange={(date) => {this.setState({date: date})}}
                  />
              </View>
              <View style={{backgroundColor: 'transparent', borderBottomWidth: 1, width: '80%', alignSelf: 'center', marginBottom: 10,}}>
                  <Picker
                      selectedValue={taskUserAssigned}
                      onValueChange={(itemValue, itemIndex) => this.setState({userAssigned: itemValue})}
                      style={styles.addTaskPicker}
                      >
                        { this.state.dataSource.osoby.map((item, key) => (
                          <Picker.Item label={item.nazwa} value={item.id} key={key} />
                        ))}
                  </Picker>
              </View>
              <TouchableHighlight style={styles.addTaskButton} onPress={() => {
                var body={
                    title: this.state.title,
                    taskContent: this.state.taskContent,
                    companyAssigned: this.state.companyAssigned,
                    priority: this.state.priority,
                    date: this.state.date,
                    userAssigned: this.state.userAssigned
                }

                fetch('https://crm.veeo.eu/json/zapiszzadanie', {
                  method: 'POST',
                  body: JSON.stringify(body),
                  headers: {
                    // "Content-type": "application/json"
                  }
                })
                .then(response => response.json())
                .then(json => console.log(json))
                Alert.alert(
                  'Status',
                  'Dodawanie zadania powiodło się!',
                  [
                    {text: 'Wróć', onPress: () => {
                      console.log('Back was pressed');
                      this.props.navigation.navigate('MainActivity');
                    }},
                    {text: 'Przejdź do tego zadania', onPress: () => Alert.alert('Ta funkcja jest jeszcze niedostępna. Przepraszamy.')}
                  ],
                )
              }}>
                  <Text style={styles.addTaskButtonText}>Zapisz <FontAwesome style={{color: '#fff', fontSize: 18}}>{Icons.pencil}</FontAwesome></Text>
              </TouchableHighlight>
          </View>
      </View>
    )}
}
