import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function Student({navigation}){
    return(
        <View style={styles.container}>
            <Text>Tutaj bedzie lista korepetytorow</Text>


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "dodgerblue",
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },

    buttons1:{
        flex:1,
        height: 300,
        marginBottom: 100,
        margin:100,
        alignItems: 'center',
        justifyContent: 'center',


    },
});
