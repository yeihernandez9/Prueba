import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import rootRoute from './rootRoute'
import page2Route from './page2Route'
import page3Route from './page3Route'
import page4Route from './page4Route'

const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: rootRoute,
    },
    Page2:{
        screen: page2Route,
    },
    Page3:{
        screen: page3Route,
    },
    Page4:{
        screen: page4Route,
    }


})
export default createAppContainer(RootDrawerNavigator)