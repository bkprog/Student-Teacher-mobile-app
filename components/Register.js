import React from "react";
import {StyleSheet, Text, View, Pressable} from "react-native";
import {StatusBar} from "expo-status-bar";
import {
    FormControl,
    Input,
    Stack,
    Box,
    Center,
    NativeBaseProvider, Button, Heading,
} from "native-base"

export default function Register({navigation}){
    return(
        <NativeBaseProvider>
            <Center flex={1} px={"3"}>
                <Box w={{
                    base: "90%",
                    md: "25%",
                }}>
                    <FormControl>
                        <Stack textAlign="center" mx="4" >
                            <Center>
                                <Heading textAlign="center" mb="10">
                                    Zarejestruj się
                                </Heading>
                            </Center>
                            <Text>Login</Text>
                            <Input type="text" placeholder="Login" textAlign="center"/>
                            <Text>Hasło</Text>
                            <Input type="password" placeholder="Hasło" textAlign="center"/>
                            <Text>Powtórz hasło</Text>
                            <Input type="password" placeholder="Hasło" textAlign="center"/>
                            <Text>Avatar</Text>
                            <Button onPress={()=> navigation.navigate('CameraScreen')}>Aparat</Button>
                            <Button onPress={() => console.log("hello world!")}>Zarejestruj</Button>
                        </Stack>
                    </FormControl>
                </Box>
            </Center>
        </NativeBaseProvider>
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
