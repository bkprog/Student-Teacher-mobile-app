import React from "react";
import {StyleSheet, Text, View, Pressable} from "react-native";
import {
    FormControl,
    Input,
    Stack,
    Box,
    Center,
    NativeBaseProvider, Button, Heading,TextArea,Select
} from "native-base";
import axios from "axios";


export default function Register({navigation}){
    const [login, onChangeLogin] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const getFieldsFromApiAsync = async () => {
        axios.get('https://mobilkiapp.herokuapp.com/field_tutor',{
            params:{
                id:login,
                field:password
            }
        }).then(results =>{
            console.log(results.data);
        })
    };

    const onSubmit = (data) => {
        console.log(data);
    }
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
                            <Text>Imię</Text>
                            <Input type="text" placeholder="Imię" textAlign="center"/>
                            <Text>Nazwisko</Text>
                            <Input type="text" placeholder="Nazwisko" textAlign="center"/>
                            <Text>E-mail</Text>
                            <Input type="text" placeholder="E-mail" textAlign="center"/>
                            <Text>Numer telefonu</Text>
                            <Input type="text" placeholder="Numer telefonu" textAlign="center"/>
                            <Text>Login</Text>
                            <Input type="text" placeholder="Login" textAlign="center"/>
                            <Text>Hasło</Text>
                            <Input type="password" placeholder="Hasło" textAlign="center"/>
                            <Text>Pole zainteresowań</Text>
                            <Text>Opis</Text>
                            <TextArea
                                textAlign={"center"}
                                h={20}
                                placeholder="Opis"
                                w={{
                                base: "100%",
                                md: "100%",
                                }}
                            />
                            <Button margin={5} onPress={() => console.log(onSubmit)}>Zarejestruj</Button>
                            <Button onPress={()=>getFieldsFromApiAsync()}>test</Button>
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
