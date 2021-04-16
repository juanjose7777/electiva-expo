import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export  function Heading() {
    return (
            <Text style={styles.text}>Bienvenido</Text>
    )
}

const styles = StyleSheet.create({
    text: { fontWeight: "bold", fontSize:24}
})