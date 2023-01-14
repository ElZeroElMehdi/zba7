import React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    button1: {
        backgroundColor: '#fff',
        width: 300,
        height: 90,
        alignItems: 'center',
        padding: 30,
        margin: 20,
        borderRadius: 40,
        shadowColor: '#000',
    },
    TextStyle: {
        color: '#663600',
        fontSize: 30,
        fontWeight: 'bold',
        shadowColor: '#000',
    },
});

function Welcome() {
  return (
    <View>
        <TouchableOpacity style={styles.button1}>
            <Text style={styles.TextStyle}>
                Play with Robot!
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
            <Text style={styles.TextStyle}>
                Play with friends!
            </Text>
        </TouchableOpacity>
    </View>
  );
}



export default Welcome;