import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Page4 from '../screens/page4'
import React from 'react'
import AppBar from '../components/appBar'

const screens = {
    Page4:{
        screen: Page4,
        navigationOptions: ({navigation}) =>{
            return {
                headerTitle: () => <AppBar navigation={navigation} title={'Home'} colorback="F2F2F2" colormenu="black"></AppBar>,
            }
        }
    }
}

const Page4Route = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{ backgroundColor: "#F2F2F2"},
        headerTintColor:'black'
    }
})

export default createAppContainer(Page4Route)