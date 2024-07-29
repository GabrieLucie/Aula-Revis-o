import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Brasil = ({nome, ouro, prata, bronze, total}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.container}>O(A) {nome}!</Text>
            <Text style={styles.container}>Possui: {ouro} medalhas de ouro!</Text>
            <Text style={styles.container}>Possui: {bronze} medalhas de bronze!</Text>
            <Text style={styles.container}>Possui: {prata} medalhas de prata!</Text>
            <Text style={styles.container}>Atualmente no ranking: {total} medalhas!</Text>
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

export default Brasil