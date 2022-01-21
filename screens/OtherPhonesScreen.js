import React, { useState, useContext } from 'react'
import { Text, Button, TextInput, StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {} from 'react-native-paper';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import useAuth from '../hooks/useAuth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import themeContext from '../config/themeContext';


const OtherPhonesScreen = () => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);


    const {user} = useAuth();
    const [phoneType, setPhoneType] = useState(null);
    const [service, setService] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [address, setAddress] = useState(null);

    const incompleteForm = !phoneType || !service || !phoneNumber || !address;

    //create docs to save user requests
    const sendRequest = () => {
        setDoc(doc(db, 'requests', user.uid), {
            id: user.uid,
            phoneType: phoneType,
            serviceFor: service,
            phoneNumber: phoneNumber,
            address: address,
            timestamp: serverTimestamp()
        }).then(() => {
            navigation.navigate('Thanks');
        }).catch(error => {
            alert(error.message);
        })
    }

    return (
        <SafeAreaView style={[tw('top-7 p-2 h-full'), {backgroundColor: theme.background}]}>
            <View style={tw('items-center')}>
            <Text style={[tw('text-2xl font-bold p-3'), {color: theme.color}]}>Request Service</Text>
            </View>

            <View style={tw('p-2')}>
                <Text style={[tw('font-bold'), {color: theme.color}]}>Phone Type:</Text>
                <TextInput 
                    value={phoneType}
                    onChangeText ={setPhoneType}
                    style={[{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}, {color: theme.color}]}
                    placeholder='Enter your phone type'
                    
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={[tw('font-bold'), {color: theme.color}]}>Service For:</Text>
                <TextInput
                    value={service}
                    onChangeText ={setService} 
                    style={[{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}, {color: theme.color}]}
                    placeholder='what you want to repair'
                />
            </View>

            <View style={tw('p-2')}>
            <Text style={[tw('font-bold'), {color: theme.color}]}>Active Phone Number:</Text>
                <TextInput 
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    style={[{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}, {color: theme.color}]}
                    keyboardType='numeric'
                    placeholder='enter your active phone number'
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={[tw('font-bold'), {color: theme.color}]}>Address (where you are):</Text>
                <TextInput 
                    value={address}
                    onChangeText={setAddress}
                    style={[{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}, {color: theme.color}]}
                    placeholder='enter your location'
                />
            </View>

            <View style={tw('pt-5')}>
            <TouchableOpacity 
                disabled={incompleteForm}
                
                style={[tw('items-center justify-center rounded-full w-26 h-16'),
                        incompleteForm ? tw('bg-gray-300') : tw('bg-green-400')
                ]}
                onPress={sendRequest}
                >
                    {/* <Entypo name="tools" size={24} color="green"/> */}
                    <Text style={tw('text-xl font-bold text-black')}>Request</Text>

                </TouchableOpacity>

            </View>

            <View style={tw('items-center pt-10')}>
                <Text style={[tw('text-xl font-bold text-black'), {color: theme.color}]}>OR</Text>
            </View>

            <View style={tw('pt-5')}>
            <TouchableOpacity 
                
                
                style={tw('items-center justify-center  w-26 h-16 bg-gray-400')} onPress={() => navigation.navigate('OtherSchedules')}>
                    {/* <Entypo name="tools" size={24} color="green"/> */}
                    <Text style={tw('text-xl font-bold text-black')}>Schedule Service at Your Doorstep</Text>

                </TouchableOpacity>

            </View>

            

            
        </SafeAreaView>
    )
}

export default OtherPhonesScreen

const styles = StyleSheet.create({})
