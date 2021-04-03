import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const AppBar = ({navigation, title, colorback, colormenu}) => {

    const openMenu = () =>{
        navigation.openDrawer()
    }

    return (
        <View style={[styles.header,{backgroundColor: colorback}]}>
            <MaterialCommunityIcons name="menu" size={40} color={colormenu} style={styles.icon} onPress={openMenu}/>
            <View>
                <Text style={styles.title}></Text>
            </View>

            <View>
                <Text style={styles.logo}> logo</Text>
            </View>
            
        </View>
    )
}

export default AppBar

const styles =StyleSheet.create({
    header:{
        width: "100%",
        height:"100%",        
        flexDirection:"row",
        
        alignItems: "center",
        justifyContent:"space-around",
        
    },
    title:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    icon:{
        position: 'absolute',
        left:"7%"
        
    },
    logo:{
        position: 'absolute',
        left: 16
    }
})
