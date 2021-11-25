import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation})
{
    return(
      <View style={styles.container}>
      <Text></Text>
      
      <Button 
      title= "Jestem uczniem"
      color= "red"
      onPress={()=> navigation.navigate('Uczen')}
    
      />

      <Button 
      title= "Jestem korepetytorem"
      color= "blue"
      fontSize="20"
      

      onPress={()=> navigation.navigate('Korepetytor')}
      />
      
      <StatusBar style="auto" />
    </View>
    );
}

function KorepetytorScreen({navigation})
{
    return(
      <View style={styles.container}>
      <Text></Text>
      
      <Button 
      style= {{
        padding: 100,
        marginBottom: 200,
        fontSize: 30,
      }}
      title= "Zaloguj się"
      color= "red"
      onPress={()=> navigation.navigate('Login')}
      
      />

      <Button 
      title= "Nie masz konta? Zarejestuj się"
      color= "blue"
      onPress={()=> navigation.navigate('Rejestracja')}
      />

      <StatusBar style="auto" />
    </View>
    );
}

function UczenScreen()
{
    return(
      <View style={styles.container}>
      <Text>Tutaj bedzie lista korepetytorow</Text>
      
     
      <StatusBar style="auto" />
    </View>
    );
}

function LoginScreen()
{
    return(
      <View style={styles.container}>
      <Text>Tutaj bedzie logowanie</Text>
      
     
      <StatusBar style="auto" />
    </View>
    );
}

function RejestracjaScreen()
{
    return(
      <View style={styles.container}>
      <Text>Tutaj bedzie Rejestracja</Text>
      
     
      <StatusBar style="auto" />
    </View>
    );
}

const Stack= createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Korepetytor" component={KorepetytorScreen} />
        <Stack.Screen name="Uczen" component={UczenScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Rejestracja" component={RejestracjaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  buttons:{
    flex:1,
    marginBottom: 100,
    margin:100,

    
    
  }
});
