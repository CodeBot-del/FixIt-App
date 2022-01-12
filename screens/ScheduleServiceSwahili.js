import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image} from 'react-native';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import useAuth from '../hooks/useAuth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';


const ScheduleService = (props) => {
    const {navigation, route} = props
    const {title} = route.params

    const nav = useNavigation();

    const {user} = useAuth();
    const [phoneType, setPhoneType] = useState(title);
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
            nav.navigate('ThankyouSwahili');
        }).catch(error => {
            alert(error.message);
        })
    }

    return (
        <SafeAreaView style={tw('top-8 p-2')}>
            <View style={tw('items-center')}>
            <Text style={tw('text-2xl font-bold p-3')}>Agiza Huduma</Text>
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Aina ya Simu:</Text>
                <TextInput 
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    placeholder='ingiza aina ya simu'
                    value={phoneType}
                    onChangeText ={setPhoneType}
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Huduma:</Text>
                <TextInput 
                    value={service}
                    onChangeText ={setService}
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    placeholder='ingiza huduma unayo hitaji'
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Namba ya Simu:</Text>
                <TextInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    keyboardType='numeric'
                    placeholder='ingiza namba ya simu'
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Mahali Ulipo:</Text>
                <TextInput 
                    value={address}
                    onChangeText={setAddress}
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    placeholder='ingiza sehemu uliyopo'
                />
            </View>

            <View style={tw('p-2')}>
           
                
                <Text style={tw('font-bold')}>Tarehe ya Huduma:</Text>
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
                    
                    <Text style={tw('text-xl font-bold text-black')}>Kamilisha</Text>

                </TouchableOpacity>

            </View>

            

            
            

            
        </SafeAreaView>
    )
}

export default ScheduleService

const styles = StyleSheet.create({})
