import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Page2 from '../screens/page2'
import Page3 from '../screens/page3'
import Page4 from '../screens/page4'
import AppBar from '../components/appBar'
import React from 'react'

const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({navigation}) =>{
            return {
                headerTitle: () => <AppBar navigation={navigation} title={'Home'} colorback="#2E2E2E" colormenu="white"></AppBar>,
            }
        }
    },
    Page2:{
        screen: Page2,
        navigationOptions:{
            title: "",
        }
    },

    Page3:{
        screen: Page3,
        navigationOptions:{
            title: "",
        }
    },

    Page4:{
        screen: Page4,
        navigationOptions:{
            title: "",
        }
    }
}

const RootRoute = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{ backgroundColor: "#2E2E2E"},
        headerTintColor:'white'
    }
})

export default createAppContainer(RootRoute)