import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function LoginButtonn({title, style, onPress}) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
        <Text style={styles.text}>{title}</Text>    

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text:{ color:'black', fontWeight:'bold', fontSize:16},
    container: { backgroundColor:"yellow", width:'50%',alignItems:'center',justifyContent:'center', padding:20, borderRadius:8}
})