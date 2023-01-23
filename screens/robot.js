
import React from "react";
import { StyleSheet, View, Text, Dimensions, Image, Touchable, TouchableOpacity } from "react-native";
import { useState } from "react";

var p = 0;
var r = 0;
var d = false;

const screenWidth = Dimensions.get('screen').width;
function random(player) {
    let moves = ['hajra', 'waraka', 'mkss'];
    let Robot = Math.floor(Math.random() * 3);
    if (Robot == player)
        d = true;
    else if (Robot != player)
        d = false;
    if (Robot == 0 && player == 1)
        p++;
    else if (Robot == 0 && player == 2)
        r++;
    else if (Robot == 1 && player == 0)
        r++;
    else if (Robot == 1 && player == 2)
        p++;
    else if (Robot == 2 && player == 0)
        p++;
    else if (Robot == 2 && player == 1)
        r++;
    return Robot;
}

function Robot() {
    const [isPressed, setisPressed] = useState(-1);
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.Robot}>
                <Text style={styles.TextStyle}>
                    Robot
                </Text>
                <Image
                    source={require('../assets/hajra.png')}
                    style={[(isPressed == 0) ? { borderWidth: 2, borderColor: 'red', borderRadius: 10, overflow: 'hidden' } : { backgroundColor: 'black' }, { felx: 1, width: '40%', height: '20%', resizeMode: 'center', padding: 30, marginTop: 2 }]}
                />
                <View style={{ width: screenWidth, flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/mks.png')}
                        style={[styles.img, (isPressed == 2) ? { borderWidth: 2, borderColor: 'red', borderRadius: 10, overflow: 'hidden' } : { backgroundColor: 'black' }]}
                    />
                    <Image
                        source={require('../assets/paper.png')}
                        style={[(isPressed == 1) ? { borderWidth: 2, borderColor: 'red', borderRadius: 10, overflow: 'hidden' } : { backgroundColor: 'black' }, styles.img]}
                    />
                </View>
            </View>
            <View style={{ width: screenWidth, flexDirection: 'column' , justifyContent:'center'}}>
                <Text style={[styles.TextStyle1, {fontSize: 20, textAlign:'center'}]}>
                    Player : {p} Robot : {r}
                </Text>
                <Text style={[styles.TextStyle1, {fontSize: 20, textAlign:'center'}]}>
                    {(d) ? 'Draw' :' '}
                </Text>
            </View>
            <View style={styles.player}>
                <Text style={styles.TextStyle}>
                    player
                </Text>
                <TouchableOpacity onPress={() => setisPressed(random(0))} style={[{ width: '45%', height: '25%', marginTop: 0.5, justifyContent: "center", alignItems: "center" }]}>
                    <Image
                        source={require('../assets/hajra.png')}
                        style={{ felx: 1, width: '100%', height: '100%', resizeMode: 'center', padding: 30, marginTop: 2, marginBottom: 20 }}
                    />
                </TouchableOpacity>
                <View style={{ width: screenWidth, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => setisPressed(random(2))} style={{ width: '50%', height: '40%', marginTop: 15, justifyContent: "center", alignItems: "center" }} >
                        <Image
                            source={require('../assets/mks.png')}
                            style={{ felx: 1, width: '100%', height: '100%', resizeMode: 'center', padding: 50, marginTop: 10 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setisPressed(random(1))} style={{ width: '50%', height: '40%', marginTop: 15, justifyContent: "center", alignItems: "center" }}>
                        <Image
                            source={require('../assets/paper.png')}
                            style={{ felx: 1, width: '100%', height: '100%', resizeMode: 'center', padding: 50, marginTop: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Robot: {
        flex: 1,
        backgroundColor: '#000',
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        top: 0,
    },
    player: {
        flex: 1,
        backgroundColor: '#663600',
        width: screenWidth,
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
    },
    TextStyle: {
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '10%',
    },
    img: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 35,
        resizeMode: 'center',
        marginBottom: 5,
        margin: 5,
    },
    TextStyle2: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '1%',
    },
})

export default Robot;