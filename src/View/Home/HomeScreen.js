import React from 'react';
import {Image, View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }){
    return(
      <View style={{ flex: 1, alignItems: 'center',  }}>
        <Image source={{ uri: "https://informativoax.net/wp-content/uploads/2019/08/medicamentos.jpg" }} style={{ width: 400, height: 200 }} />
        <Text>Menu principal</Text>
        <Button 
        title="registrarse!!"
        onPress = { () => navigation.navigate('Register') }
        />
        
      </View>
    )
  }

  