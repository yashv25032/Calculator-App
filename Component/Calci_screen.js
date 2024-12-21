import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Button from './Button';

const CalciScreen = () => {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');


  const handlePress = (value) => {

    setInput(input + value);

  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEvaluate = () => {

    try {

      setResult(eval(input).toString())

    } catch (e) {
      setResult("Error");
    }

  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };



  return (
    
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.result}>{result || input || '0'}</Text>
      </View>

      <View style={styles.buttons}>

        <View style={styles.row}>
          <Button title='7' onPress={() => handlePress('7')} />
          <Button title='8' onPress={() => handlePress('8')} />
          <Button title='9' onPress={() => handlePress('9')} />
          <Button title='/' onPress={() => handlePress('/')} />
        </View>

        <View style={styles.row}>
          <Button title='4' onPress={() => handlePress('4')} />
          <Button title='5' onPress={() => handlePress('5')} />
          <Button title='6' onPress={() => handlePress('6')} />
          <Button title='*' onPress={() => handlePress('*')} />
        </View>

        <View style={styles.row}>
          <Button title='1' onPress={() => handlePress('1')} />
          <Button title='2' onPress={() => handlePress('2')} />
          <Button title='3' onPress={() => handlePress('3')} />
          <Button title='-' onPress={() => handlePress('-')} />
        </View>

        <View style={styles.row}>
          <Button title='0' onPress={() => handlePress('0')} />
          <Button title='.' onPress={() => handlePress('.')} />
          <Button title='=' onPress={handleEvaluate} />
          <Button title='+' onPress={() => handlePress('+')} />
        </View>

        <View style={styles.row}>
          <Button title='CE' onPress={handleClear} />
          <Button title='DEL' onPress={handleDelete} />
        </View>

      </View>
    </View>


  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#cc7a00',
    alignItems: 'center',
    justifyContent: 'center',
  },

  display: {
    width: "100%",
    padding: 30,
    height: "500px",
    backgroundColor: "#333",
    alignItems: "flex-end"
  },

  result: {
    fontSize: 40,
    color: "#fff",
  },

  buttons: {
    marginTop: 20,
    width: "80%",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },

  // // button:{
  //   backgroundColor:"#ddd",
  //   width:"30%",
  //   padding:20,
  //   justifyContent:"center",
  //   alignItems:"center",
  //   borderRadius:5,
  // },


})

export default CalciScreen;
