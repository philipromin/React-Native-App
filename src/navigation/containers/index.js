import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from 'login/screens/LoginScreen'
import HomeScreen from 'home/screens/HomeScreen'

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Home: {
        screen: HomeScreen
    }
},{
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);