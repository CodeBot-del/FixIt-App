import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import useAuth from '../hooks/useAuth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';


const OthersSchedules = () => {
    

    const nav = useNavigation();

    const {user} = useAuth();
    const [phoneType, setPhoneType] = useState(null);
    const [service, setService] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [address, setAddress] = useState(null);
    const [date, setDate] = useState(null);

    const incompleteForm = !phoneType || !service || !phoneNumber || !address || !date;

    //create docs to send Schedule requests
    const sendRequest = () => {
        setDoc(doc(db, 'schedules', user.uid), {
            id: user.uid,
            phoneType: phoneType,
            serviceFor: service,
            phoneNumber: phoneNumber,
            address: address,
            date: date,
            timestamp: serverTimestamp()
        }).then(() => {
            nav.navigate('Thanks');
        }).catch(error => {
            alert(error.message);
        })
    }

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
                    value={phoneType}
                    onChangeText ={setPhoneType}
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Service For:</Text>
                <TextInput 
                    value={service}
                    onChangeText ={setService}
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    placeholder='what you want to repair'
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Active Phone Number:</Text>
                <TextInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    keyboardType='numeric'
                    placeholder='enter your active phone number'
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Address (where you are):</Text>
                <TextInput 
                    value={address}
                    onChangeText={setAddress}
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    placeholder='enter your location'
                />
            </View>

            <View style={tw('p-2')}>
           
                
                <Text style={tw('font-bold')}>Date of Service:</Text>
                <TextInput 
                    value={date}
                    onChangeText={setDate}
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    placeholder='DD-MM-YY'
                    keyboardType='numeric'
                />
            </View>

            <View style={tw('pt-5')}>
            <TouchableOpacity 
                disabled={incompleteForm}
                
                style={[tw('items-center justify-center rounded-full w-26 h-16 bg-green-200'),
                    incompleteForm ? tw('bg-gray-300') : tw('bg-green-400')
                ]} 
                onPress={sendRequest}
                >
                    
                    <Text style={tw('text-xl font-bold text-black')}>Confirm</Text>

                </TouchableOpacity>

            </View>

            

            
            

            
        </SafeAreaView>
    )
}

export default OthersSchedules

const styles = StyleSheet.create({})
