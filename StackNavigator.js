import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import useAuth from './hooks/useAuth';
import AppleScreen from './screens/AppleScreen';
import ConfirmRequest from './screens/ConfirmRequest';
import HomeScreen from './screens/HomeScreen';
import HuaweiScreen from './screens/HuaweiScreen';
import InfinixScreen from './screens/InfinixScreen';
import LoginScreen from './screens/LoginScreen';
import NokiaScreen from './screens/NokiaScreen';
import OppoScreen from './screens/OppoScreen';
import OtherPhonesScreen from './screens/OtherPhonesScreen';
import OthersSchedules from './screens/OthersSchedules';
import RequestScreen from './screens/RequestScreen';
import SamsungScreen from './screens/SamsungScreen';
import ScheduleService from './screens/ScheduleService';
import TecnoScreen from './screens/TecnoScreen';
import ThankyouScreen from './screens/ThankyouScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const {user} = useAuth()
    return (
        <Stack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
            {user? (
                <>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Request" component={RequestScreen}/>
                <Stack.Screen name="Samsung" component={SamsungScreen}/>
                <Stack.Screen name="Apple" component={AppleScreen}/>
                <Stack.Screen name="Huawei" component={HuaweiScreen}/>
                <Stack.Screen name="Tecno" component={TecnoScreen}/>
                <Stack.Screen name="Infinix" component={InfinixScreen}/>
                <Stack.Screen name="Oppo" component={OppoScreen}/>
                <Stack.Screen name="Nokia" component={NokiaScreen}/>
                <Stack.Screen name="OtherPhones" component={OtherPhonesScreen}/>
                <Stack.Screen name="Confirm" component={ConfirmRequest}/>
                <Stack.Screen name="Schedule" component={ScheduleService}/>
                <Stack.Screen name="Thanks" component={ThankyouScreen}/>
                <Stack.Screen name="OtherSchedules" component={OthersSchedules}/>
                </>
            ): (
                <Stack.Screen name="Login" component={LoginScreen}/>
            )}
            
            

        </Stack.Navigator>
    )
}

export default StackNavigator


