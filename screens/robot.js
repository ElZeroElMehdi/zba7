
import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

const screenWidth = Dimensions.get('screen').width;
function random() {
    console.log('random');
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
                <Image
                    source={require('../assets/hajra.png')}
                    style={{ felx: 1, width: '40%', height: '20%', resizeMode: 'center', padding: 30, marginTop: 2 }}
                    onPress={random}
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
        height:'50%',
    },
    player: {
        flex: 1,
        backgroundColor: '#663600',
        width: screenWidth,
        height:'50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextStyle: {
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 100,
    },
    img: {
        flex: 1,
        width: '200%',
        height: '100%',
        padding: 35,
        resizeMode: 'center',
        marginBottom: 2,
        // margin: 5,
    }
})

export default Robot;