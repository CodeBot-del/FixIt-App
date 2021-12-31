import React from 'react';
import {useNavigation} from '@react-navigation/core';
import { View, Text, Button } from 'react-native'
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
    const navigation = useNavigation();
    const {logout} = useAuth();


    return (
        <View>
            <Text>I am The HomeScreen</Text>
            <Button title="Go to Request" 
            onPress={()=> navigation.navigate("Request")}/>

            <Button title="Logout" onPress={logout}/>
        </View>
    )
}

export default HomeScreen
