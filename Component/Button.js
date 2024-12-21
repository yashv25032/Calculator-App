import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';

const Button = ({onPress,title}) => {
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#ddd",
        width:"22%",
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,

    },
    buttonText:{
        fontSize:24,
        fontWeight:"bold",
        color:"#00000"
        
    },
})

export default Button;
