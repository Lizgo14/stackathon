import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import add from '../screens/newActivityForm'

const screens = {
  Default: {
    screen: add
  },
  Home: {
    screen: home
  }

}

const AddStack = createStackNavigator({screens})
export default createAppContainer(AddStack)