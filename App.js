import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import Login from "./components/Login";
import Register from "./components/Register";
import CameraScreen from './components/CameraScreen';
import LoggedUser from "./components/LoggedUser";
import TutorsList from "./components/TutorsList";

const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Korepetytor" component={Teacher} />
        <Stack.Screen name="Uczen" component={Student} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Rejestracja" component={Register} />
        <Stack.Screen name="CameraScreen" component={CameraScreen}/>
        <Stack.Screen name="LoggedUser" component={LoggedUser}/>
        <Stack.Screen name="TutorsList" component={TutorsList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

