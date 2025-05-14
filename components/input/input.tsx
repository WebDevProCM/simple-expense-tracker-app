import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View, Text, StyleProp, ViewStyle } from 'react-native';

interface InputProps extends TextInputProps {
    label?: string;
    containerStyle?: StyleProp<ViewStyle>;
}

const Input: React.FC<InputProps> = ({ 
    label, 
    containerStyle, 
    style, 
    ...textInputProps 
}) => {
    return (
        <TextInput 
            style={[styleSheet.inputStyle ,style]} 
            {...textInputProps} 
        />
    );
};

const styleSheet = StyleSheet.create({
    inputStyle: {
        color: "white",
        borderBottomColor: "grey",
        fontWeight: "bold",
        textAlign: "center",
        borderBottomWidth: 2,
        height: "auto",
        fontSize: 18,
        marginVertical: 8,
    }
})

export default Input;