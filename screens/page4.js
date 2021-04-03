import React,{useState} from 'react'
import { Text, View, StyleSheet,Button, FlatList, Container, Content, SafeAreaView } from 'react-native';
import Buttons from '../components/buttons';
import Card from '../components/card';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Page4 = ({navigation}) => {

    const [numColumn, setNumColumn] = useState(3)

    const [itemCard1, setItemCard1] = useState([
        {title: 'Registrar Mercancia',  icon:"face-recognition"},
        {title: 'Horarios', icon:"watch-import"},
        {title: 'Historial Marcacion', icon:"watch-vibrate"},
        {title: 'Solicitudes RRHH', icon:"signature-freehand"},
        {title: 'Formularios', icon:"form-dropdown"},
        {title: 'Bitácora de Salud',  icon:"hand-heart"},
        {title: 'Opciones QR', icon:"qrcode"},
        {title: 'Ayuda', icon:"help-circle-outline"},
        {title: 'Tablero', icon:"monitor-dashboard"},
    ]);

    const [itemCard, setItemCard] = useState([
        {title: 'Mensajes', value: 3, color:"#01DFA5"},
        {title: 'Solicitudes', value: 1, color:"#DA81F5"},
        {title: 'Solicitudes de equipo', value: 5, color:"#F78181"},
        {title: 'Tares', value: 2, color:"#F5DA81"},
        {title: 'Bonos ganados', value: 1, color:"#81DAF5"},
    ]);
    
    const pressPage2 = () =>{
        navigation.navigate('Page2')
    }

    return (
        <View style={styles.container}>
        <SafeAreaView>
            <FlatList style={styles.contentList}
                data={itemCard1}
                numColumns={numColumn}
                renderItem={({item, key}) =>(
                    <Buttons color="#FFFFFF">
                    <MaterialCommunityIcons name={item.icon} size={60} color="#2E2E2E" />
                        <Text style={styles.titleButton}>{item.title}</Text>

                    </Buttons>
                )}>
                </FlatList>
            
                <FlatList
                style={styles.contentList}
                data={itemCard}            
                renderItem={({item, key}) =>(
                    <Card color={item.color} colorback="#FFFFFF">
                        <Text style={styles.title} >{item.title}</Text>
                        <Text style={[styles.value, {color:item.color}]}>{item.value}</Text>
                    </Card>
                )}
            />
        </SafeAreaView>
           
<Button title="go to reaview dets" onPress={pressPage2}></Button>

            
        </View>
    )
}

export default Page4

const styles =StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#F2F2F2"
        
    },  
    contentList:{
        height:"50%"
    },
    titleButton:{
        paddingTop:10,
        color: "#2E2E2E",
        fontSize: 11,
        fontWeight: "bold",
    },
    title:{
        width: 270,
        left: 10,
        textAlign: "left",
        color: "#2E2E2E",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
    },

    value:{
        width: 20,
        right: 5,
        
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    listCard:{
        position: "relative",
        paddingTop:50
    }
})
