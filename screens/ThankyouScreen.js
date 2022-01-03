import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';

const ThankyouScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw('top-8')}>
            <View>
            <Text style={tw('absolute text-black p-6 text-2xl font-bold')}>Service Request Sent!</Text>
            </View>
            <View style={tw('flex-1 w-full pt-20')}>
                <Image 
                style={tw('h-40 w-50')} 
                source={{uri: 'https://ak1.picdn.net/shutterstock/videos/26572331/thumb/5.jpg?i10c=img.resize(height:160)'}}
                />
                
                
                </View>

                <View style={tw('p-4')}>
                <Text style={tw('relative top-60 text-xl')}>
                    Your request has been sent successfully. Our driver will call you shortly. Thanks for trusting us.
                </Text>
                <Text style={tw('relative top-60 pt-3')}>
                    For help and any other inconvenience, 
                </Text>
                <Text style={tw('relative top-60')}>
                Call: +255 658 174 914
                </Text>
                </View>

                <View style={tw('pt-5')}>
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


