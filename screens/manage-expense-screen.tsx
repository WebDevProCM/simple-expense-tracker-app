import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationProp, ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../store/hook';
import { addExpense, removeExpense, updateExpense } from '../store/expenses-slice';


const ManageExpenseScreen = () => {
  const dispatch = useAppDispatch();
  const expenses = useAppSelector((state) => state.expenseSlice);
  const [enteredValue, setEnteredValue] = useState(0);
  const [enteredText, setEnteredText] = useState("");
  const route = useRoute<RouteProp<{params: {add?:boolean, id?:string|number}}, 'params'>>();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const {add, id} = route.params;

  const enteredValueHandler = (value:string) => {
    if(value === ""){
      return setEnteredValue(0);
    }
    setEnteredValue(parseFloat(value));
  }

  const addUpdateHandler = () => {
    if(add){
      dispatch(addExpense({title: enteredText, amount: enteredValue}));
      navigation.goBack();
      return;
    }else{
      dispatch(updateExpense({id: id,title:enteredText, amount: enteredValue}));
      navigation.goBack();
    }
  }

  const removeHandler = () =>{
    dispatch(removeExpense({id: id}));
    navigation.goBack();
  }

  useEffect(() =>{
    if(!add){
      const data = expenses.find((expense) => expense.id === id);
      setEnteredValue(data?.amount || 0);
      setEnteredText(data?.title || "");
    }
  }, [])

  return (
    <View style={styleSheet.rootContainer}>
      <View style={styleSheet.inputcontainer}>
        <TextInput 
          style={styleSheet.valueInput}
          value={enteredValue.toString()}
          onChangeText={enteredValueHandler}
          keyboardType='number-pad'
          autoCorrect={false}
          autoCapitalize="none"
        />

        <TextInput 
          style={styleSheet.textInput}
          value={enteredText}
          onChangeText={setEnteredText}
          autoCorrect={true}
          autoCapitalize="none"
        />
        
      </View>
      <Pressable onPress={addUpdateHandler} style={styleSheet.button} android_ripple={{color: "#4D55CC"}}>
        <Text style={styleSheet.buttonText}>{add ? "Add" : "Update"}</Text>
      </Pressable>

      {!add &&      
      <Pressable onPress={removeHandler} style={styleSheet.removeButton} android_ripple={{color: "#4D55CC"}}>
        <Text style={styleSheet.removeButtonText}>Remove</Text>
      </Pressable>
      }
    </View>
  )
}

const styleSheet = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  inputcontainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  valueInput: {
    height: 60,
    width: 70,
    fontSize: 32,
    borderBottomWidth: 2,
    color: "white",
    borderBottomColor: "grey",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    height: "auto",
    width: 300,
    fontSize: 18,
    borderBottomWidth: 1,
    color: "white",
    borderBottomColor: "grey",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#B5A8D5",
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10
  },
  buttonText:{
    color: "white",
    textAlign: "center",
  },
  removeButton:{
    backgroundColor: "#B82132",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 10,
    elevation: 5,
  },
  removeButtonText: {
    color: "white"
  }
})

export default ManageExpenseScreen