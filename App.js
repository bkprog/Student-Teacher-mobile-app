import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


function HomeScreen({navigation})
{
    return(
      <View
      style={{
        backgroundColor:"#fff",
        flex: 1,
        
      }}>
      
        <View
        style={{
          backgroundColor: "white",
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
            

<Pressable
        onPress={()=> navigation.navigate('Uczen')}

        style={() => [
          {
            backgroundColor: 'black',
              
              width: '90%',
              height: '90%',
              backgroundColor: 'midnightblue',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
          },
          
        ]}>
        {() => (
          <Text style={
            {
              color:'white',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>

            JESTEM UCZNIEM
          </Text>
        )}
      </Pressable>
               
        </View>

        <View
        style={{
          backgroundColor: "white",
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>

<Pressable
        onPress={()=> navigation.navigate('Korepetytor')}

        style={() => [
          {
            backgroundColor: 'black',
              
              width: '90%',
              height: '90%',
              backgroundColor: 'midnightblue',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            
          },
          
        ]}>
        {() => (
          <Text style={
            {
              color:'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              
            }}>

            JESTEM KOREPETYTOREM
          </Text>
        )}
      </Pressable>

        </View>
      
      
      
      
      <StatusBar style="auto" />
    </View>
    );
}

function KorepetytorScreen({navigation})
{
    return(
      <View
      style={{
        backgroundColor:"#fff",
        flex: 1,
        
      }}>
      
        <View
        style={{
          backgroundColor: "white",
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        

<Pressable
        onPress={()=> navigation.navigate('Login')}

        style={() => [
          {
            backgroundColor: 'black',
              
              width: '90%',
              height: '90%',
              backgroundColor: 'midnightblue',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
          },
          
        ]}>
        {() => (
          <Text style={
            {
              color:'white',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>

            ZALOGUJ SIĘ
          </Text>
        )}
      </Pressable>

        </View>

        <View
        style={{
          backgroundColor: "white",
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>

      

<Pressable
        onPress={()=> navigation.navigate('Rejestracja')}

        style={() => [
          {
            backgroundColor: 'black',
              
              width: '90%',
              height: '90%',
              backgroundColor: 'midnightblue',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
          },
          
        ]}>
        {() => (
          <Text style={
            {
              color:'white',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>

            NIE MASZ KONTA? ZAREJESTRUJ SIĘ!
          </Text>
        )}
      </Pressable>

        </View>
      
      
      
      
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
