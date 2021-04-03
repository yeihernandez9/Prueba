import React from 'react'
import { View, StyleSheet,Text } from 'react-native'

const CardHours = (props) => {
    return (

        <View style={styles.container}>
            <View style={styles.cardw}>
                <View style={styles.cardContentw}>
                    <Text style={styles.day}>{props.day}</Text>  
                    <Text style={styles.day}>{props.date}</Text>  
                </View>
            </View>
            <View style={[styles.card]}>
                <View style={styles.cardContent}>
                    {props.children}
                </View>
            </View>
           
        </View>
        
    )
}

export default CardHours

const styles =StyleSheet.create({
    container:{
        marginBottom:"7%",
        height:"10%",
        flexDirection:"row",
    },
    cardw:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor:"#585858",
        shadowOffset:{width:1, height: 1},
        shadowColor: "#333",
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal: 1,
        marginVertical:5,
        height:65,
        width:80
     },
    card:{
       borderRadius: 6,
       elevation: 3,
       backgroundColor:"#585858",
       shadowOffset:{width:1, height: 1},
       shadowColor: "#333",
       shadowOpacity:0.3,
       shadowRadius:2,
       marginHorizontal: 1,
       borderLeftWidth:10,
       marginVertical:5,
       borderLeftColor:"#AC58FA",
       height:65,
       width:300,
       alignItems:"center",
       marginLeft:10
    },
    cardContentw:{
        display:"flex",
       alignItems: "center",
       justifyContent:"space-around",
       flexDirection:"column",
       marginTop:9,
       left:2
    },
    cardContent:{
        display:"flex",
       alignItems: "center",
       justifyContent:"space-around",
       flexDirection:"row",
       marginTop:18,
       left:100
    },
    day:{
        color: "#BDBDBD",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
    }
})
