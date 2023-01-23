
import React from "react";
import { StyleSheet, View, Text, Dimensions, Image, Touchable, TouchableOpacity } from "react-native";

const screenWidth = Dimensions.get('screen').width;
function random(x) {
    let moves = ['hajra', 'waraka', 'mkss'];
    let Robot = Math.floor(Math.random() * 3);
    if (Robot == x)
        console.log('Draw');
    else if (Robot == 0 && x == 1)
        console.log('Player win');
    else if (Robot == 0 && x == 2)
        console.log('Robot win');
    else if (Robot == 1 && x == 0)
        console.log('Robot win');
    else if (Robot == 1 && x == 2)
        console.log('Player win');
    else if (Robot == 2 && x == 0)
        console.log('Player win');
    else if (Robot == 2 && x == 1)
        console.log('Robot win');

    console.log('*Player choose :' + moves[x] + '  ' + x);
    console.log('*Robot choose :' + moves[Robot] + '  ' + Robot);
}

function Robot() {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.Robot}>
                <Text style={styles.TextStyle}>
                    Robot
                </Text>
                <Image
                    source={require('../assets/hajra.png')}
                    style={{ felx: 1, width: '40%', height: '20%', resizeMode: 'center', padding: 30, marginTop: 2 }}
                />
                <View style={{ width: screenWidth, flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/mks.png')}
                        style={styles.img}
                    />
                    <Image
                        source={require('../assets/paper.png')}
                        style={styles.img}
                    />
                </View>
            </View>

            <View style={styles.player}>
                <Text style={styles.TextStyle}>
                    player
                </Text>
                <TouchableOpacity onPress={() => random(0)} style={{ width: '45%', height: '25%', marginTop: 0.5, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={require('../assets/hajra.png')}
                        style={{ felx: 1, width: '100%', height: '100%', resizeMode: 'center', padding: 30, marginTop: 2, marginBottom: 20 }}
                    />
                </TouchableOpacity>
                <View style={{ width: screenWidth, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => random(1)} style={{ width: '50%', height: '40%', marginTop: 15, justifyContent: "center", alignItems: "center" }} >
                        <Image
                            source={require('../assets/mks.png')}
                            style={{ felx: 1, width: '100%', height: '100%', resizeMode: 'center', padding: 50, marginTop: 10 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => random(2)} style={{ width: '50%', height: '40%', marginTop: 15, justifyContent: "center", alignItems: "center" }}>
                        <Image
                            source={require('../assets/paper.png')}
                            style={{ felx: 1, width: '100%', height: '100%', resizeMode: 'center', padding: 50, marginTop: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.TextStyle2}>
                choose youre move
            </Text>
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
    },
    player: {
        flex: 1,
        backgroundColor: '#663600',
        width: screenWidth,
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '1%',
    },
})

export default Robot;