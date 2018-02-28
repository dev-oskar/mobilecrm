import React from 'react';
import { Text, View, Button, Image, ActivityIndicator, ListView, TouchableHighlight } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { StackNavigator } from 'react-navigation';

import Header from '../components/Header';

import styles from '../styles/main'; // Plik opisujacy wyglad poszczegolnych elementow.


export default class ActiveTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  static navigationOptions = {
    headerStyle: {backgroundColor: '#3399FF'},
    headerTitleStyle: {color: '#fff'},
    headerTintColor: '#fff',
    tapBarLabel: 'Do wykonania',
    drawerIcon: ({tintColor}) => {
      return(
        <FontAwesome style={{color: tintColor, fontSize: 20}}>{Icons.code}</FontAwesome>
      )
    },
    title: 'Do wykonania',
  }

  componentDidMount() {
    return fetch('http://crm.veeo.eu/json/zadania')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // Zrob cos z nowym stanem.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { navigation } = this.props.navigation;

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, position: 'absolute', bottom: '50%', alignSelf: 'center'}}>
          <ActivityIndicator size={'large'} color={'#46237A'} />
        </View>
      );
    }

    return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight style={styles.containerRow} onPress={() => this.props.navigation.navigate('SpecificTask', { taskId: rowData.id, taskTitle: rowData.temat })} underlayColor='#3399FF'>
                <Text style={styles.textRow}>{rowData.temat}{"\n"}<Text style={{color: 'lightslategrey'}}>{rowData.data}</Text></Text>
            </TouchableHighlight>
          }
          // renderSeparator={(sectionId, rowId) => <View style={styles.separator}></View>}
          // renderHeader={() => <Header />}
        />
    );
  }
}
