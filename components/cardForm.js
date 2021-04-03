import React from 'react'
import { View, StyleSheet } from 'react-native'

const CardForm = (props) => {
    return (
            <View style={styles.container}>
                <View style={[styles.card,{borderLeftColor:props.color}]}>
                    <View style={styles.cardContent}>
                        {props.children}
                    </View>
                </View>
            </View>
    )
}

export default CardForm

const styles =StyleSheet.create({
    container:{
        marginBottom:"7%",
        flexDirection:"column"
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
       height:80
    },
    cardContent:{
        display:"flex",
       alignItems: "center",
       justifyContent:"space-around",
       flexDirection:"row",
       marginTop:1
    }
})
