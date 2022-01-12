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
import Menu from './screens/Menu';
import HomeSwahili from './screens/HomeSwahili';
import RequestSwahili from './screens/RequestSwahili';
import SamsungSwahili from './screens/SamsungSwahili';
import AppleSwahili from './screens/AppleSwahili';
import HuaweiSwahili from './screens/HuaweiSwahili';
import TecnoSwahili from './screens/TecnoSwahili';
import InfinixSwahili from './screens/InfinixSwahili';
import OppoSwahili from './screens/OppoSwahili';
import NokiaSwahili from './screens/NokiaSwahili';
import OtherPhonesSwahili from './screens/OtherPhonesSwahili';
import ThankyouSwahili from './screens/ThankyouSwahili';
import OtherSchedulesSwahili from './screens/OtherSchedulesSwahili';
import ConfirmRequestSwahili from './screens/ConfirmRequestSwahili';
import ScheduleServiceSwahili from './screens/ScheduleServiceSwahili';












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
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="HomeSwahili" component={HomeSwahili}/>
                <Stack.Screen name="RequestSwahili" component={RequestSwahili}/>
                <Stack.Screen name="SamsungSwahili" component={SamsungSwahili}/>
                <Stack.Screen name="AppleSwahili" component={AppleSwahili}/>
                <Stack.Screen name="HuaweiSwahili" component={HuaweiSwahili}/>
                <Stack.Screen name="TecnoSwahili" component={TecnoSwahili}/>
                <Stack.Screen name="InfinixSwahili" component={InfinixSwahili}/>
                <Stack.Screen name="OppoSwahili" component={OppoSwahili}/>
                <Stack.Screen name="NokiaSwahili" component={NokiaSwahili}/>
                <Stack.Screen name="OtherPhonesSwahili" component={OtherPhonesSwahili}/>
                <Stack.Screen name="ThankyouSwahili" component={ThankyouSwahili}/>
                <Stack.Screen name="OtherSchedulesSwahili" component={OtherSchedulesSwahili}/>
                <Stack.Screen name="ConfirmSwahili" component={ConfirmRequestSwahili}/>
                <Stack.Screen name="ScheduleServiceSwahili" component={ScheduleServiceSwahili}/>










                
                </>
            ): (
                <Stack.Screen name="Login" component={LoginScreen}/>
            )}
            
            

        </Stack.Navigator>
    )
}

export default StackNavigator


