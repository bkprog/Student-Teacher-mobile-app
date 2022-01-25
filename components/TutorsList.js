import React, {useEffect, useState} from "react";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Box, Button, Center, Heading, ScrollView, Text} from "native-base";
import axios from "axios";
import {View} from "react-native";

export default function TutorsList({navigation}){
    const findObject = navigation.getState().routes.find((route) => route.name === "TutorsList")
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        const fetchTutorsFields = async () => {
            try {
                const res = await axios.get("https://mobilkiapp.herokuapp.com/tutor/findTutors/" + findObject.params.field);
                setTutors(res.data);
            }
            catch(e) {
                console.error(e);
            }
        }
        fetchTutorsFields().catch()
    },[])

    const ListTutors = () => {
        if(tutors.map !== undefined){
            return tutors.map((tutor) => {
                return (
                    <View key={tutor.id}>
                        <Box style={{margin:10, backgroundColor:"#d6fffe",borderRadius:8,paddingTop:10,paddingBottom:10}}>
                            <Center>
                                <Heading>Korepetytor {findObject.params.field}</Heading>
                                <Text style={{color:"#262626"}}>Imię: {tutor.name}</Text>
                                <Text style={{color:"#262626"}}>Nazwisko: {tutor.surname}</Text>
                                <Text style={{color:"#262626"}}>Email: {tutor.email}</Text>
                                <Text style={{color:"#262626"}}>Numer telefonu: {tutor.phoneNumber}</Text>
                                <Text style={{color:"#262626"}}>Opis: {tutor.description}</Text>
                            </Center>
                        </Box>
                    </View>
                )
            })
        }
        else return (
            <View>
                <Box style={{margin:10, backgroundColor:"#d6fffe",borderRadius:8,paddingTop:10,paddingBottom:10,textAlign:"center"}}>
                    <Center>
                        <Heading>Nie ma dostępnych korepetytorów z kategorii: {findObject.params.field}</Heading>
                    </Center>
                </Box>
            </View>
        )

    }

    return(
        <NativeBaseProvider>
            <ScrollView>
                <ListTutors/>
            </ScrollView>
        </NativeBaseProvider>
    );
}