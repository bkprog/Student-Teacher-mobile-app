import React from "react";
import {Text} from "react-native";
import {
    FormControl,
    Input,
    Stack,
    Box,
    Center,
    NativeBaseProvider, Button, Heading,
} from "native-base"

export default function Login({navigation}){
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
                                    Zaloguj się
                                </Heading>
                            </Center>
                            <Text>Login</Text>
                            <Input type="text" placeholder="Login" textAlign="center"/>
                            <Text>Hasło</Text>
                            <Input type="password" placeholder="Hasło" textAlign="center"/>
                            <Button margin={5} onPress={() => console.log("hello world!")}>Zaloguj</Button>
                        </Stack>
                    </FormControl>
                </Box>
            </Center>
        </NativeBaseProvider>
    );
}