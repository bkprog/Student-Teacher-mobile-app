import React from "react";
import {Text} from "react-native";
import {
    FormControl,
    Input,
    Stack,
    Box,
    Center,
    NativeBaseProvider, Button, Heading, View,
} from "native-base"
import axios from "axios";

export default function Login({navigation}){
    const [login, onChangeLogin] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const getMoviesFromApiAsync = async () => {
        axios.get('https://mobilkiapp.herokuapp.com/tutor',{
            params:{
                username:login,
                password:password
            }
        }).then(results =>{
            if (results.data === "Złe dane logowania!"){
                alert("Wpisano niepoprawne dane logowania.\nSpróbuj jeszcze raz.")
            }
            else{
                navigation.navigate("LoggedUser",{user:results.data});
            }
        })
    };

    return(
        <NativeBaseProvider>
            <Center flex={0.7} px={"3"}>
                <Box w={{
                    base: "90%",
                    md: "25%",
                }}>
                    <FormControl>
                        <Stack textAlign="center" mx="4" >
                            <Center>
                                <Heading textAlign="center" mb="10">
                                    Zaloguj się
                                </Heading>
                            </Center>
                            <Center>
                                <View>
                                    <Text style={{marginTop:30}}>Login</Text>
                                </View>
                            </Center>
                            <Input style={{marginTop:30}} type="text" value={login} onChangeText={onChangeLogin} placeholder="Twój login" textAlign="center"/>
                            <Center>
                                <View>
                                    <Text style={{marginTop:30}}>Hasło</Text>
                                </View>
                            </Center>
                            <Input style={{marginTop:20}} type="password" value={password} onChangeText={onChangePassword} placeholder="Twoje hasło" textAlign="center"/>
                            <Button style={{marginTop:50}} onPress={() => getMoviesFromApiAsync()}>Zaloguj</Button>
                        </Stack>
                    </FormControl>
                </Box>
            </Center>
        </NativeBaseProvider>
    );
}

