import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RequestScreen from './screens/RequestScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const user = false;
    return (
        <Stack.Navigator>
            {user? (
                <>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Request" component={RequestScreen}/>
                </>
            ): (
                <Stack.Screen name="Login" component={LoginScreen}/>
            )}
            
            

        </Stack.Navigator>
    )
}

export default StackNavigator

