import React from 'react';
import {Image, View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function MedicamentosScreen({ navigation }){
    return(
        <ScrollView>
      <View style={{ flex: 1, alignItems: 'center',  }}>
        <Image source={{ uri: "https://www.definicionabc.com/wp-content/uploads/ciencia/2/Enfermedades-Respiratorias-alergias.jpg" }} style={{ width: 800, height: 500 }} />

        <Text>Enfermedades del cuerpo humano</Text>
        <Button 
        title="Observar enfermedades"
        onPress = { () => navigation.navigate('Register') }
        />
        <Text>Consultar sintomas de enfermedades</Text>
        <Button 
        title="siguiente"
        onPress = { () => navigation.navigate('Register') }
        />
        </View>
        </ScrollView>
        )
    }
  