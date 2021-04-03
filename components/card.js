import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.card,{borderLeftColor:props.color, backgroundColor:props.colorback}]}>
                <View style={styles.cardContent}>
                    {props.children}
                </View>


            </View>
        </View>
        
    )
}

export default Card

const styles =StyleSheet.create({
    container:{
        marginBottom:"7%",
        height:"10%"
    },
    card:{
       borderRadius: 6,
       elevation: 3,
       
       shadowOffset:{width:1, height: 1},
       shadowColor: "#333",
       shadowOpacity:0.3,
       shadowRadius:2,
       marginHorizontal: 1,
       borderLeftWidth:10,
       marginVertical:5,
       height:65
    },
    cardContent:{
        display:"flex",
       alignItems: "center",
       justifyContent:"space-around",
       flexDirection:"row",
       marginTop:18
    }
})
