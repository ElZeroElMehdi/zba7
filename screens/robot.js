import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

const screenWidth = Dimensions.get('screen').width;
function Robot() {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={styles.Robot}>
                <Text style={styles.RTextStyle}>
                    hello Im robot
                </Text>
            </View>

            <View style={styles.player}>
                <Image
                    source={require('../assets/hajra.png')}
                    style={styles.img}
                />
                <View style={{width:screenWidth, display:'flex'}}>
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


    },
    player: {
        flex: 1,
        backgroundColor: '#fff',
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',


    },
    RTextStyle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    PTextStyle: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },
    img: {
        flex: 1,
        width: 130,
        height: 130,
        padding: 25,
        margin: 10,
        borderRadius: 30,
        backgroundColor: '#000',
    }
})

export default Robot;