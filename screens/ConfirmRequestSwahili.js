import React, {Component, useEffect, useState, useContext} from 'react'
import { Text, Button, TextInput, StyleSheet,View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {} from 'react-native-paper';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import useAuth from '../hooks/useAuth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import themeContext from '../config/themeContext';


const ConfirmRequest = (props) => {
    const theme = useContext(themeContext);

    const {navigation, route} = props
    const {title} = route.params
    const nav = useNavigation();
    //initializing variables to hook for in db
    const {user} = useAuth();
    const [phoneType, setPhoneType] = useState(title);
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
            nav.navigate('ThankyouSwahili');
        }).catch(error => {
            alert(error.message);
        })
    }


    return (
        <SafeAreaView style={[tw('top-7 p-2 h-full'), {backgroundColor: theme.background}]}>
            <View style={tw('items-center')}>
            <Text style={[tw('text-2xl font-bold p-3'), {color: theme.color}]}>Agiza Huduma</Text>
            </View>
            <View style={tw('p-2')}>
                <Text style={[tw('font-bold'), {color: theme.color}]}>Aina ya Simu:</Text>
                <TextInput 
                    style={[{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}, {color: theme.color}]}
                    value={phoneType}
                    onChangeText ={setPhoneType}
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={[tw('font-bold'), {color: theme.color}]}>Huduma:</Text>
                <TextInput 
                    value={service}
                    onChangeText ={setService}
                    style={[{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}, {color: theme.color}]}
                    placeholder='ingiza huduma unayo hitaji'
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={[tw('font-bold'), {color: theme.color}]}>Namba ya Simu:</Text>
                <TextInput 
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    style={[{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}, {color: theme.color}]}
                    placeholder='ingiza namba ya simu'
                    keyboardType='numeric'
                />
            </View>

            <View style={tw('p-2')}>
            <Text style={[tw('font-bold'), {color: theme.color}]}>Mahali Ulipo:</Text>
                <TextInput 
                    value={address}
                    onChangeText={setAddress}
                    style={[{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}, {color: theme.color}]}
                    placeholder='ingiza sehem uliyopo'
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
                    
                    <Text style={tw('text-xl font-bold text-black')}>Kamilisha</Text>

                </TouchableOpacity>

            </View>

            <View style={tw('items-center pt-10')}>
                <Text style={[tw('text-xl font-bold text-black'), {color:theme.color}]}>AU</Text>
            </View>

            <View style={tw('pt-5')}>
            <TouchableOpacity 
                style={tw('items-center justify-center  w-26 h-16 bg-gray-400')} onPress={()=>{nav.navigate('ScheduleServiceSwahili', {
                    title: title});}}>
                    
                    <Text style={tw('text-xl font-bold text-black')}>Weka Ratiba Matengenezo Nyumbani</Text>

                </TouchableOpacity>

            </View>

            

            
        </SafeAreaView>
    )
}

export default ConfirmRequest

