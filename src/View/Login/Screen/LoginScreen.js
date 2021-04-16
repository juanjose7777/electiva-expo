import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Heading } from '../Component/Heading'
import { Input } from '../Component/Input'
import LoginButton from '../Component/LoginButton'
import LoginButtonn from '../Component/LoginButtonn'
import LoginButtonnn from '../Component/LoginButtonnn'



export default function LoginScreen({ navigation }) {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Image source={{ uri: "https://www.esan.edu.pe/conexion/actualidad/2019/03/14/1500x844_ahorroMED.jpg" }} style={{ width: 2000, height: 450 }} />
            <Heading> </Heading>

            <Input style={styles.input} placeholder="gmail" keyboardType="email-address" />
            <Input style={styles.input} placeholder="contraseña" secureTextEntry />

            <LoginButton 
                title={"ir a home"}
                style={styles.ButtonLogin}
                onPress={ ()=>{navigation.navigate('Home')} }
                
            />
            <Input style={styles.input} placeholder="contraseña" secureTextEntry />
            <LoginButtonn 
                title={"Medicamentos"}
                style={styles.ButtonLoginn}
                onPress={ ()=>{navigation.navigate('Medicamentos')} }
                
            />
            <Input style={styles.input} placeholder="contraseña" secureTextEntry />
            <LoginButtonnn 
                title={"Enfermedades"}
                style={styles.ButtonLoginn}
                onPress={ ()=>{navigation.navigate('Enfermedades')} }
                
            />

        </View>
        </ScrollView>
        
    )
}


const styles = StyleSheet.create({
    container: {flex:1, alignItems:"center", paddingTop:100, margin:20},
    input: { marginVertical:30 },
    ButtonLogin: { marginVertical:30 }
})