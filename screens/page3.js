import React from 'react'
import { Text, View, StyleSheet,TextInput, Button} from 'react-native';
import Card from '../components/card';
import CardHours from '../components/cardHours';

const Page3 = () => {
    return (
        <View style={styles.container}>
                <View style={styles.contentList}>
                <Card color="#6E6E6E" colorback="#585858">
                    <Text style={styles.title1} >08:00 - 17:00</Text>
                </Card>

                <CardHours day="L" date="01|30">
                    <Text style={styles.title1} >08:00 - 17:00</Text>
                </CardHours>

                <CardHours day="M" date="01|30">
                    <Text style={styles.title1} >08:00 - 17:00</Text>
                </CardHours>

                <CardHours day="Mi" date="01|30">
                    <Text style={styles.title1} >08:00 - 17:00</Text>
                </CardHours>

                <CardHours day="J" date="01|30">
                    <Text style={styles.title1} >08:00 - 17:00</Text>
                </CardHours>

                <CardHours day="V" date="01|30">
                    <Text style={styles.title1} >08:00 - 17:00</Text>
                </CardHours>

                <CardHours day="S" date="01|30">
                    <Text style={styles.title1} >08:00 - 12:00</Text>
                </CardHours>

                <CardHours day="D" date="01|30">
                    <Text style={styles.title1} >LIBRE</Text>
                </CardHours>
                </View>
        </View>
    )
}

export default Page3


const styles =StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#2E2E2E",
        padding:10
    },  
    contentList:{
        height:"80%"
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
})
