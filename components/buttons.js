import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList, 
    Dimensions 
  } from 'react-native';


const Buttons = (props) => {
    const{width,height} = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <View style={[styles.card,{borderBottomColor:"#58ACFA", backgroundColor:props.color,height:height/8,width:width/3}]}>
                <View style={styles.cardContent}>
                    
                    {props.children}
                </View>
            </View>
        </View>
    )
}

export default Buttons

const styles =StyleSheet.create({
    container:{
        marginBottom:"2%",
        height:"10%"
    },
    card:{
       borderRadius: 6,
       elevation: 3,
       shadowOffset:{width:1, height: 1},
       shadowColor: "#333",
       shadowOpacity:0.3,
       shadowRadius:2,
       marginHorizontal: "1%",
       borderBottomWidth:10,
       marginVertical:"1%",
       
    },
    cardContent:{
        display:"flex",
       alignItems: "center",
       justifyContent:"space-around",
       flexDirection:"column",
       marginTop:10
    }
})

