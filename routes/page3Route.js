import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Page3 from '../screens/page3'
import React from 'react'

const screens = {
    Page3:{
        screen: Page3,
        navigationOptions:{
            title: "",
        }
    }
}

const Page3Route = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{ backgroundColor: "#2E2E2E"},
        headerTintColor:'white'
    }
})

export default createAppContainer(Page3Route)
