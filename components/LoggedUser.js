import React from "react";
import {Box, Button, Center,NativeBaseProvider} from "native-base";

export default function LoggedUser({navigation}){
    const findObject = navigation.getState().routes.find((route) => route.name === "LoggedUser")
    console.log(findObject.params);
    // console.log(navigation.getState().routes[navigation.getState().routes.indexOf("LoggedUser")].params);

    return(
        <NativeBaseProvider>
            <Center flex={1} px={"3"}>
                <Box w={{
                    base: "90%",
                    md: "25%"
                }}>
                     <Button>Ustawienia</Button>
                     <Button>Wyloguj</Button>
                </Box>
            </Center>
        </NativeBaseProvider>
    );
}