import React, {useContext} from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import themeContext from '../config/themeContext';


const ThankyouScreen = () => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);


    return (
        <SafeAreaView style={[tw('top-5 h-full'), {backgroundColor: theme.background}]}>
            <View>
            <Text style={[tw('absolute text-black p-6 text-2xl font-bold'), {color: theme.color}]}>Service Request Sent!</Text>
            </View>
            <View style={tw('flex-1 w-full pt-20')}>
                <Image 
                style={tw('h-40 w-50')} 
                source={{uri: 'https://ak1.picdn.net/shutterstock/videos/26572331/thumb/5.jpg?i10c=img.resize(height:160)'}}
                />
                
                
                </View>

                <View style={[tw('absolute p-4')]}>
                <Text style={[tw('top-60 text-xl'), {color: theme.color}]}>
                    Your request has been sent successfully. Our driver will call you shortly. Thanks for trusting us.
                </Text>
                <Text style={[tw('top-60 pt-3'), {color: theme.color}]}>
                    For help and any other inconvenience, 
                </Text>
                <Text style={[tw('top-60'), {color: theme.color}]}>
                Call: +255 657 538 068
                </Text>
                </View>

                <View style={tw('relative top-1')}>
                    <TouchableOpacity 
                        style={tw('items-center justify-center rounded-full w-26 h-16 bg-gray-200')}
                        onPress={() => navigation.navigate('Home')}
                    >
                            <Entypo name="home" size={30} color="gray"/>
                            <Text style={tw('font-bold text-black')}>Back</Text>

                        </TouchableOpacity>

            </View>
            

                


            
            
        </SafeAreaView>
    )
}

export default ThankyouScreen


