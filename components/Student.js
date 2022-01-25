import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import axios from "axios";
import {Button, Center, Heading, ScrollView} from "native-base";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";

export default function Student({navigation}) {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        const fetchTutorsFields = async () => {
            try {
                const res = await axios.get("https://mobilkiapp.herokuapp.com/field_tutor");
                setFields(res.data);
            }
            catch(e) {
                console.error(e);
            }
        }
        fetchTutorsFields().catch()
    },[])

    const List = () => {
        return fields.map((item) => {
                return (
                    <View key={item.id}>
                        <Button style={{margin:10,paddingTop:8,paddingBottom:8}} onPress={() => goToTutors(item.name)}>{item.name}</Button>
                    </View>
                )
            })
    }

    function goToTutors(fieldName){
        navigation.navigate("TutorsList",{field:fieldName});
    }

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Center flex={1} px={"3"}>
                    <Heading>Wybierz kategorię</Heading>
                </Center>
                <View>
                    <StatusBar style="auto"/>
                    <List/>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    );
};

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
