import React from 'react';
import {  View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/View/Login/Screen/LoginScreen'
import RegisterScreen from './src/View/Login/Screen/RegisterScreen'
import HomeScreen from './src/View/Home/HomeScreen'
import MedicamentosScreen from './src/View/Medicamentos/MedicamentosScreen';
import EnfermedadesScreen from './src/View/Enfermedades/EnfermedadesScreen';




const Stack= createStackNavigator();


const App = ()=> {
    return (
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name="Inicio" component={LoginScreen} />
           <Stack.Screen name="Register" component={RegisterScreen}/>
           <Stack.Screen name="Home" component={HomeScreen}/>
           <Stack.Screen name="Medicamentos" component={MedicamentosScreen}/>
           <Stack.Screen name="Enfermedades" component={EnfermedadesScreen}/>



         </Stack.Navigator>
       </NavigationContainer>
    );
};

export default App