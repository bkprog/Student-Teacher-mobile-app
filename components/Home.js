import React from "react";
import { Text, View,Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}){
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