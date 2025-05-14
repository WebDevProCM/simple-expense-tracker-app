import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from './input/input'

interface FormProps{
    enteredValue: number
    enteredValueHandler: (value: string) => void
    enteredText: string
    setEnteredText: React.Dispatch<React.SetStateAction<string>>
    enteredDate: string
    setEnteredDate: React.Dispatch<React.SetStateAction<string>>
    errors: Record<string,string>
}

const Form = ({enteredValue, enteredValueHandler, enteredText, setEnteredText, enteredDate, setEnteredDate, errors}:FormProps) => {
  return (
    <View style={styleSheet.inputcontainer}>
      <Input 
        style={styleSheet.valueInput}
        keyboardType='decimal-pad'
        defaultValue="0"
        placeholder='0'
        placeholderTextColor="grey"
        value={enteredValue.toString()}
        onChangeText={enteredValueHandler}
      />
      {errors?.value && <Text style={styleSheet.errorText}>{errors?.value}</Text>}

      <Input
        style={styleSheet.textInput}
        placeholder='Description'
        placeholderTextColor="grey"
        autoCorrect={true}
        autoCapitalize="sentences"
        maxLength={20}
        value={enteredText}
        onChangeText={setEnteredText}
      />
      {errors?.text && <Text style={styleSheet.errorText}>{errors?.text}</Text>}

      <Input 
        style={styleSheet.dateInput}
        placeholder='YYYY-MM-DD'
        defaultValue="YYYY-MM-DD"
        placeholderTextColor="grey"
        maxLength={10}
        value={enteredDate}
        onChangeText={setEnteredDate}
      />
      {errors?.date && <Text style={styleSheet.errorText}>{errors?.date}</Text>}
    </View>
  )
}


const styleSheet = StyleSheet.create({
  inputcontainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8
  },
  valueInput: {
    height: 60,
    width: 70,
    fontSize: 32,
    paddingBottom: 1
  },
  textInput: {
    width: 300,
  },
  dateInput: {
    width: 150,
    paddingBottom: 0
  },
  errorText:{
    color:"#D84040",
  }
})


export default Form