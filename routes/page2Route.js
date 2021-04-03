import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Page2 from '../screens/page2'
import AppBar from '../components/appBar'
import React from 'react'

const screens = {
    Page2:{
        screen: Page2,
        navigationOptions:{
            title: "",
        }
    }
}

const Page2Route = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{ backgroundColor: "#2E2E2E"},
        headerTintColor:'white'
    }
})

export default createAppContainer(Page2Route)