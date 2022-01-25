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
    const [name, onChangeName] = React.useState("");
    const [surname, onChangeSurname] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [number, onChangeNumber] = React.useState("");
    const [login, onChangeLogin] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [description, onChangeDescription] = React.useState("");


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
        axios.post("https://mobilkiapp.herokuapp.com/tutor",{
            name: name,
            surname: surname,
            email: email,
            password: password,
            phoneNumber: number,
            username:login,
            description: description,
            fields: ids
        }).then(result =>{
            alert(result.data);
        })
    };

    let ids = [];

    const onSubmit = () => {
        axios.post("https://mobilkiapp.herokuapp.com/tutor",{
            name: name,
            surname: surname,
            email: email,
            password: password,
            phoneNumber: number,
            username:login,
            description: description,
            fields: ids
        }).then(result =>{
            if(result.data === "Pomyślnie stworzono korepetytora"){
                alert(result.data);
                navigation.navigate("Korepetytor")
            }
            else alert(result.data);


        })
    }

    const List = () => {
        return fields.map((item) => {
                return (
                    <View key={item.id}>
                    <Checkbox id={item.id} onChange={()=>{checkList(item.id)}} value={""}>{item.name}</Checkbox>
                    </View>
                )
            })
    }

    const checkList = (id) => {
        let find = 0;
        for(let i=0;i<ids.length;i++)
            if(ids[i] === id) find = 1;
        if(find !== 1){
            ids.push(id);
        }
        else {
            ids = ids.filter(element => element !== id)
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
                            <Input type="text" placeholder="Imię" value={name} onChangeText={onChangeName} textAlign="center"/>
                            <Text>Nazwisko</Text>
                            <Input type="text" placeholder="Nazwisko" value={surname} onChangeText={onChangeSurname} textAlign="center"/>
                            <Text>E-mail</Text>
                            <Input type="text" placeholder="E-mail" value={email} onChangeText={onChangeEmail} textAlign="center"/>
                            <Text>Numer telefonu</Text>
                            <Input type="text" placeholder="Numer telefonu" value={number} onChangeText={onChangeNumber} textAlign="center"/>
                            <Text>Login</Text>
                            <Input type="text" placeholder="Login" value={login} onChangeText={onChangeLogin} textAlign="center"/>
                            <Text>Hasło</Text>
                            <Input type="password" placeholder="Hasło" value={password} onChangeText={onChangePassword} textAlign="center"/>
                            <Text>Opis</Text>
                            <TextArea
                                value={description}
                                onChangeText={onChangeDescription}
                                textAlign={"center"}
                                h={20}
                                placeholder="Opis"
                                w={{
                                    base: "100%",
                                    md: "100%",
                                }}
                            />
                            <Text>Pole zainteresowań</Text>
                            <List/>
                            <Button onPress={()=> navigation.navigate('CameraScreen')}>Aparat</Button>
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
