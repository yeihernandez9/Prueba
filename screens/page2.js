import React,{useState} from 'react'
import { Text, View, StyleSheet,TextInput, Button, Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import CardForm from '../components/cardForm';
import DropDownPicker from 'react-native-dropdown-picker';
import Card from '../components/card';

const Page2 = () => {
    const [selectedValue, setSelectedValue] = useState(0);

    const{width,height, size} = Dimensions.get('window');

    const options = [
        { value: 0, label: 'Seleccione razón...' },
        { value: 1, label: 'Item 2' },
        { value: 2, label: 'Item 3' },
        { value: 3, label: 'Item 4' }
    ]
    
    return (
        <View style={styles.container}>
                <View style={styles.contentList}>

                <Card color="#6E6E6E" colorback="#585858">
                    <Text style={styles.title1} >Martina Garcia</Text>
                </Card>
                <CardForm color="#F78181">
                    <View>
                        <Text style={styles.label}>Fecha de inicio</Text>
                        <TextInput 
                            placeholder="Ingresa Fecha" 
                                style={{ borderColor:'#CEE3F6', justifyContent: 'flex-start',backgroundColor:'#CEE3F6', width:width-60, borderRadius: 6, height:height/22, paddingLeft: 5, color:"black", left:10}}
                        />
                    </View>
                    
                    <MaterialCommunityIcons style={styles.icon }name="calendar" size={30} color="#585858" />

                    <Text style={[styles.value, {color:"red"}]}>
                        <Text style={[styles.value, {color:"blue"}]}>
                            
                        </Text>
                    </Text>
                </CardForm>

                <CardForm color="#F78181">
                    <View>
                        <Text style={styles.label}>Fecha de fin</Text>
                        <TextInput 
                            placeholder="Ingresa Fecha" 
                                style={{ borderColor:'#CEE3F6', justifyContent: 'flex-start',backgroundColor:'#CEE3F6', width:width-60, borderRadius: 6, height:height/22, paddingLeft: 5, color:"black", left:10}}
                        />
                    </View>
                    <MaterialCommunityIcons style={styles.icon }name="calendar" size={30} color="#585858" />
                    
                    <Text style={[styles.value, {color:"red"}]}>
                        <Text style={[styles.value, {color:"blue"}]}>
                            
                        </Text>
                    </Text>
                </CardForm>

                <CardForm color="#F78181">
                    <View>
                        <Text style={styles.label}>Razon de Solicitud</Text>
                        <DropDownPicker
                            items={options}
                            defaultValue={selectedValue}
                            containerStyle={{height: 40}}
                            style={{ borderColor:'#CEE3F6', backgroundColor:'#CEE3F6', width:360, borderRadius: 6, height:40, paddingLeft: 5, color:"black", left:10}}
                            itemStyle={{
                                justifyContent: 'flex-start',
                            }}

                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => setSelectedValue(
                                item.value )}
                        >
                        </DropDownPicker>

                    </View>
                    <Text style={[styles.value, {color:"red"}]}>
                        <Text style={[styles.value, {color:"blue"}]}>
                            
                        </Text>
                    </Text>
                </CardForm>

                <View style={styles.button1}>
                    <Button title="Aprobado" color="#BDBDBD"></Button>
                </View>
                <View style={styles.button2}>
                    <Button title="Rechazado" color="#BDBDBD" ></Button>
                </View>
            </View>
                
                
            
    </View>
    )
}

export default Page2

const styles =StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#2E2E2E",
        padding:10,
        flexDirection:"column",
    },  
    contentList:{
        height:"80%",
        
    },
    titleButton:{
        paddingTop:10,
        color: "#BDBDBD",
        fontSize: 11,
        fontWeight: "bold",
    },
    title:{
        width: 270,
        left: 10,
        textAlign: "left",
        color: "#BDBDBD",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    title1:{
        width: 270,
        right:40,
        textAlign: "left",
        color: "#BDBDBD",
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
    },
    icon:{
        position:"absolute",
        right:20,
        paddingTop:25
    },
    label:{
        left:10,
        fontSize: 15,
        color: "#F78181",
        fontWeight: "bold",
        paddingTop:5,
        marginBottom:8
    },
    button1:{
        justifyContent:"center",
        textAlign:"center",
        borderRadius: 6,
        backgroundColor:"#04B45F",
        height:100,
        marginBottom:20,
    },
    button2:{
        justifyContent:"center",
        textAlign:"center",
        borderRadius: 6,
        backgroundColor:"#FA5858",
        height:100,
    },
    buttonStyle:{
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 1,
    }
})
