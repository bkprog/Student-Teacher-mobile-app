import React from "react";
import {Box, Button, Center, Heading, NativeBaseProvider, Text, View} from "native-base";
import axios from "axios";

export default function LoggedUser({navigation}){
    const findObject = navigation.getState().routes.find((route) => route.name === "LoggedUser")
    console.log(findObject.params.user);
    // console.log(navigation.getState().routes[navigation.getState().routes.indexOf("LoggedUser")].params);
    // console.log('asdasd'+ findObject.params.user.id);

    const deleteAdvert = async () =>{
        axios.delete('https://mobilkiapp.herokuapp.com/tutor/'+findObject.params.user.id)
            .then(result =>{
                if(result.data === "Pomyślnie usunięto korepetytora !"){
                    alert(result.data);
                    navigation.navigate("Login");
                }
                else{
                    alert(result.data);
                }
            })
    }

    const CoursesList = () => {
        return(
            findObject.params.user.fields.map(field =>{
                return (
                    <View key={field.id}>
                        <Text>{field.name}</Text>
                    </View>
                );
            })
        );
    }

    return(
        <NativeBaseProvider>
            <Center flex={1} px={"3"}>
                <Box w={{
                    base: "90%",
                    md: "25%"
                }}>
                    <Heading>Twoje Ogłoszenie</Heading>
                    <Text>Imię: {findObject.params.user.name}</Text>
                    <Text>Nazwisko: {findObject.params.user.surname}</Text>
                    <Text>email: {findObject.params.user.email}</Text>
                    <Text>numer telefonu: {findObject.params.user.phoneNumber}</Text>
                    <Text>Opis: {findObject.params.user.description}</Text>
                    <Text>Prowadzone kursy:</Text>
                    <CoursesList/>
                     <Button onPress={()=> deleteAdvert()}>
                         Usuń ogłoszenie</Button>
                </Box>
            </Center>
        </NativeBaseProvider>
    );
}