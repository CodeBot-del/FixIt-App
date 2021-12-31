import React from 'react';
import {useNavigation} from '@react-navigation/core';
import { View, Text, Button } from 'react-native'

const HomeScreen = () => {
    const navigation = useNavigation();


    return (
        <View>
            <Text>I am The HomeScreen</Text>
            <Button title="Go to Request" 
            onPress={()=> navigation.navigate("Request")}/>
        </View>
    )
}

export default HomeScreen
