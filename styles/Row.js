import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container:
    {
      flex: 1,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#6D8EA0',
      marginBottom: 10,
    },
    text:
    {
      marginLeft: 10,
      fontSize: 16,
      color: '#fcfcfc',
    },
});

const Row = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {`ID: ${props.id}\nTemat: ${props.temat}`}
    </Text>
  </View>
);

export default Row;
