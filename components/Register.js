import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, Pressable} from "react-native";
import {
    FormControl,
    Input,
    Stack,
    Box,
    Center,
    NativeBaseProvider, Button, Heading,TextArea,Select, Checkbox, ScrollView
} from "native-base";
import axios from "axios";


export default function Register({navigation}){
    const [fields, setFields] = useState([]);
    const [checkID, setCheckID] =useState([]);

    useEffect(() => {
        const fetchFields = async () => {
            try {
                const res = await axios.get("https://mobilkiapp.herokuapp.com/field_tutor");
                setFields(res.data);
            }
            catch(e) {
                console.error(e);
            }
        }
        fetchFields().catch()
    },[])

    const postRegisterForm = async () => {
        axios.post()
    };

    let ids = [];

    const onSubmit = () => {
        console.log(ids);
    }

    const List = () => {
        return fields.map((item) => {
                return (
                    <View key={item.id}>
                    <Checkbox id={item.id} onChange={()=>{checkList(item.id)}}>{item.name}</Checkbox>
                    </View>
                )
            })
    }

    const checkList = (id) => {
        if(ids.find(element=>element==id) === 1){
            ids.push(id);
        } else {
            ids=ids.filter(element=>element!=id)
        }
    }

    return(
        <NativeBaseProvider>
            <Center flex={1} px={"3"}>
                <Box w={{
                    base: "90%",
                    md: "25%",
                }}>
                    <ScrollView>
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
                            <List/>
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

                            <Button onPress={()=> navigation.navigate('CameraScreen')}>Aparat</Button>
                            <Button onPress={()=>getFieldsFromApiAsync()}>test</Button>
                            <Button margin={5} onPress={() => onSubmit()}>Zarejestruj</Button>
                        </Stack>
                    </FormControl>
                    </ScrollView>
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
