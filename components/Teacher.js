import React from "react";
import {Pressable, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function Teacher({navigation}){
    return(
        <View
            style={{
                backgroundColor:"#fff",
                flex: 1,

            }}>

            <View
                style={{
                    backgroundColor: "white",
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>



                <Pressable
                    onPress={()=> navigation.navigate('Login')}

                    style={() => [
                        {
                            backgroundColor: 'black',

                            width: '90%',
                            height: '90%',
                            backgroundColor: 'midnightblue',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        },

                    ]}>
                    {() => (
                        <Text style={
                            {
                                color:'white',
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>

                            ZALOGUJ SIĘ
                        </Text>
                    )}
                </Pressable>

            </View>

            <View
                style={{
                    backgroundColor: "white",
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>



                <Pressable
                    onPress={()=> navigation.navigate('Rejestracja')}

                    style={() => [
                        {
                            backgroundColor: 'black',

                            width: '90%',
                            height: '90%',
                            backgroundColor: 'midnightblue',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        },

                    ]}>
                    {() => (
                        <Text style={
                            {
                                color:'white',
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>

                            STWÓRZ OGŁOSZENIE!
                        </Text>
                    )}
                </Pressable>

            </View>




            <StatusBar style="auto" />
        </View>








    );
}