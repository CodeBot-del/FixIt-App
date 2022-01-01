import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image} from 'react-native';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";

const OtherPhonesScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw('top-8 p-2')}>
            <View style={tw('items-center')}>
            <Text style={tw('text-2xl font-bold p-3')}>Request Service</Text>
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Phone Type:</Text>
                <TextInput 
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    placeholder='Enter your phone type'
                    
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Service For:</Text>
                <TextInput 
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    placeholder='what you want to repair'
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Active Phone Number:</Text>
                <TextInput 
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    keyboardType='numeric'
                    placeholder='enter your active phone number'
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Address (where you are):</Text>
                <TextInput 
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    placeholder='enter your location'
                />
            </View>

            <View style={tw('pt-5')}>
            <TouchableOpacity 
                
                
                style={tw('items-center justify-center rounded-full w-26 h-16 bg-green-200')}>
                    {/* <Entypo name="tools" size={24} color="green"/> */}
                    <Text style={tw('text-xl font-bold text-black')}>Request</Text>

                </TouchableOpacity>

            </View>

            <View style={tw('items-center pt-10')}>
                <Text style={tw('text-xl font-bold text-black')}>OR</Text>
            </View>

            <View style={tw('pt-5')}>
            <TouchableOpacity 
                
                
                style={tw('items-center justify-center  w-26 h-16 bg-gray-200')} onPress={() => {}}>
                    {/* <Entypo name="tools" size={24} color="green"/> */}
                    <Text style={tw('text-xl font-bold text-black')}>Schedule Service at Your Doorstep</Text>

                </TouchableOpacity>

            </View>

            

            
        </SafeAreaView>
    )
}

export default OtherPhonesScreen

const styles = StyleSheet.create({})
