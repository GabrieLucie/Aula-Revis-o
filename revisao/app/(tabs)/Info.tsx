import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Pegar = ({nome, idade}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.container}>Olá, {nome}!</Text>
            <Text style={styles.container}>Sua idade é: {idade}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        alignItems: 'center',        
    },
    text: {
        fontSize: 30,
        color: '#333',
    },
});

export default Pegar