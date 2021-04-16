import React from 'react';
import {Image, View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function MedicamentosScreen({ navigation }){
    return(
        <ScrollView>
      <View style={{ flex: 1, alignItems: 'center',  }}>
        <Image source={{ uri: "https://informativoax.net/wp-content/uploads/2019/08/medicamentos.jpg" }} style={{ width: 800, height: 200 }} />

        <Text>Menu principal</Text>
        <Button 
        title="Observar medicamentos"
        onPress = { () => navigation.navigate('Register') }
        />

        <Text>Agrega</Text>
        <Image source={{ uri: "https://png.pngtree.com/png-clipart/20210321/original/pngtree-add-files-png-image_6122213.jpg" }} style={{ width: 800, height: 500 }} />


        <Button 
        title="Agregar medicamentos"
        onPress = { () => navigation.navigate('Register') }
        />
        <Text>Consultar</Text>
        <Image source={{ uri: "https://png.pngtree.com/png-clipart/20190611/original/pngtree-magnifying-glass-png-vector-element-png-image_2957451.jpg" }} style={{ width: 800, height: 500 }} />


        <Button 
          title="consultar medicamentos"
         onPress = { () => navigation.navigate('Register') }
         />
         <Text>contactanos</Text>
         <Image source={{ uri: "https://alcanosesp.com/sites/default/files/contactenos.png" }} style={{ width: 800, height: 200 }} />


        <Button 
        title="Contactanos"
        onPress = { () => navigation.navigate('Register') }
        />
        
      </View>
      </ScrollView>
    )
  }

  