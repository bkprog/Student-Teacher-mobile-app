import React from "react";
import {Box, Button, Center,NativeBaseProvider} from "native-base";
import axios from "axios";

export default function LoggedUser({navigation}){
    const findObject = navigation.getState().routes.find((route) => route.name === "LoggedUser")
    console.log(findObject.params.user);
    // console.log(navigation.getState().routes[navigation.getState().routes.indexOf("LoggedUser")].params);
    console.log('asdasd'+ findObject.params.user.id);

    return(
        <NativeBaseProvider>
            <Center flex={1} px={"3"}>
                <Box w={{
                    base: "90%",
                    md: "25%"
                }}>
                     <Button onPress={()=>axios.delete('https://mobilkiapp.herokuapp.com/tutor/'+findObject.params.user.id) } 
                     
                
                     >
                         
                         
                         
                         Usuń ogłoszenie</Button>
                </Box>
            </Center>
        </NativeBaseProvider>
    );
}