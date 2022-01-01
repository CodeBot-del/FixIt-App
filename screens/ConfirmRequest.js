import React, {Component, useEffect, useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image} from 'react-native';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";


import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';

const ConfirmRequest = (props) => {
    const {navigation, route} = props
    const {title} = route.params


    return (
        <SafeAreaView style={tw('top-8 p-2')}>
            <View style={tw('items-center')}>
            <Text style={tw('text-2xl font-bold p-3')}>Request Service</Text>
            </View>
            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Phone Type:</Text>
                <TextInput 
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    value={title}
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
                    placeholder='your active phone number'
                    keyboardType='numeric'
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
                
                
                style={tw('items-center justify-center  w-26 h-16 bg-gray-200')} onPress={() => navigation.navigate('Schedule')}>
                    {/* <Entypo name="tools" size={24} color="green"/> */}
                    <Text style={tw('text-xl font-bold text-black')}>Schedule Service at Your Doorstep</Text>

                </TouchableOpacity>

            </View>

            

            
        </SafeAreaView>
    )
}

export default ConfirmRequest

const styles = StyleSheet.create({})
