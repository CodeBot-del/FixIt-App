import React, {useLayoutEffect, useRef} from 'react'
import { View, Text, Button, SafeAreaView, TouchableOpacity, Image, StyleSheet, NativeModules } from 'react-native';
import {useNavigation} from "@react-navigation/core";
import useAuth from "../hooks/useAuth";
import tw from 'tailwind-rn';
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import Swiper from "react-native-deck-swiper";
//import AsyncStorage from '@react-native-async-storage/async-storage';
// import RNRestart from 'react-native-restart';



const SERVICES = [
    {
        firstName: "Screen",
        lastName: "Repair",
        desc: "Cracked screen repair",
        photoURL:"https://images.pexels.com/photos/8833423/pexels-photo-8833423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        state: "available",
        id: 1,
    },
    {
        firstName: "Battery",
        lastName: "Repair",
        desc: "Dead Battery repair",
        photoURL:"https://images.unsplash.com/photo-1536692192939-f1547f1cde39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80",
        state: "available",
        id: 2,
    },
    {
        firstName: "Front",
        lastName: "Camera",
        desc: "Selfie camera repair",
        photoURL:"https://images.unsplash.com/photo-1608186336271-53313eeaf864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        state: "available",
        id: 3,
    },
    {
        firstName: "MIC",
        lastName: "Repair",
        desc: "Phone's MIC repair",
        photoURL:"https://static.vecteezy.com/system/resources/previews/000/421/801/original/microphone-icon-vector-illustration.jpg",
        state: "available",
        id: 4,
    },
    {
        firstName: "Reciever",
        lastName: "Repair",
        desc: "Phone's Reciever repair",
        photoURL:"https://www.airtighttestingstaffordshire.co.uk/wp-content/uploads/2019/09/call-icon.jpg",
        state: "available",
        id: 5,
    },
    {
        firstName: "Charging Jack",
        lastName: "Repair",
        desc: "Phone's Charging Jack repair",
        photoURL:"https://images.unsplash.com/photo-1521369853169-98555e5e5f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        state: "available",
        id: 6,
    },
    {
        firstName: "Speaker",
        lastName: "Repair",
        desc: "Phone's Audio Speaker repair",
        photoURL:"https://images.unsplash.com/photo-1608538770329-65941f62f9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80",
        state: "available",
        id: 7,
    },
    {
        firstName: "Back Panel",
        lastName: "Repair",
        desc: "Phone's Back Panel repair",
        photoURL:"https://images.unsplash.com/photo-1603812188321-94ba55ed5652?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1556&q=80",
        state: "available",
        id: 8,
    },
    {
        firstName: "Proximity",
        lastName: "Repair",
        desc: "Phone's Proximity repair",
        photoURL:"https://images.unsplash.com/photo-1590459963567-1bf6b8595be1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        state: "available",
        id: 9,
    },
    {
        firstName: "Rear",
        lastName: "Camera",
        desc: "Back camera repair",
        photoURL:"https://images.unsplash.com/photo-1608186336271-53313eeaf864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        state: "available",
        id: 10,
    },
    {
        firstName: "Phone",
        lastName: "Checkup",
        desc: "Full phone checkup",
        photoURL:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
        state: "available",
        id: 11,
    },
]


const HomeScreen = () => {
    const navigation = useNavigation();
    const {user, logout} = useAuth();
    const swipeRef = useRef(null);
    // const onButtonClick = () => {
    //     RNRestart.Restart();
    //   };
    
    
    return (
        <SafeAreaView style={tw("top-8 flex-1")}>
            {/* Header */}
                <View style={tw("flex-row items-center justify-between px-5")}>
                    <TouchableOpacity onPress={logout}>
                        <Image style={tw("h-10 w-10 rounded-full")} source={{uri: user.photoURL}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => NativeModules.DevSettings.reload()}>
                    <Image style={tw("h-14 w-14")} source={require("../logo.png")}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Request')}>
                        <AntDesign name='mobile1' size={30} color="#76c893"/>
                    </TouchableOpacity>

                </View>

                

            {/* End of Header */}
            <View style={tw('items-center ')}>
                <Text style={tw('text-xl font-bold')}>Available services</Text>
                <Text style={tw('')}>8:00 AM  To  5:00 PM</Text>
            </View>
            
            {/* cards */}

            <View style={tw('flex-1 -mt-6 ')}>
                <Swiper
                ref={swipeRef}
                    containerStyle={{ backgroundColor:"transparent" }}
                    cards={SERVICES}
                    stackSize={5}
                    cardIndex={0}
                    animateCardOpacity
                    verticalSwipe={false}
                    onSwipedLeft={ () => { 
                        console.log("Swipe PASS")
                    }}
                    onSwipedRight={() => { 
                        console.log("Swipe REQUEST")
                        navigation.navigate('Request')
                        

                    }}
                    backgroundColor= {"#4FD0E9"}
                    overlayLabels = {{
                        left: {
                            title: "NOPE",
                            style: {
                                label: {
                                    textAlign: "right",
                                    color: "red",
                                },
                            },
                        },
                        right:{
                            title: "REQUEST",
                            style: {
                                label: {
                                    color: "#4DED30"
                                },
                            },
                        },

                    }}
                    renderCard={card => (
                        <View key={card.id} style={tw('relative bg-white h-3/4 rounded-xl')}>
                            <Image 
                            style={tw('absolute top-0 h-full w-full rounded-xl')} 
                            source={{uri:card.photoURL}}
                            />
                            <View style={[tw('absolute bottom-0 rounded-b-xl shadow-xl flex-row bg-white w-full h-20 justify-between items-center px-6 py-2'), styles.cardShadow,]}>
                                <View>
                                    <Text style={tw('text-xl font-bold')}>
                                        {card.firstName} {card.lastName}
                                    </Text>
                                    <Text>
                                        {card.desc}
                                    </Text>
                                </View>
                                <Text style={tw('text-2xl font-bold')}>
                                    {card.state}
                                </Text>
                            </View>
                        </View>
                        
                    )}
                />
            </View>

            <View style={tw('flex flex-row justify-evenly bottom-12')}>
                <TouchableOpacity 
                onPress={() => swipeRef.current.swipeLeft()}
                
                style={tw('items-center justify-center rounded-full w-16 h-16 bg-red-200')}>
                    <Entypo name="cross" size={24} color="red"/>

                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => swipeRef.current.swipeRight()}
                
                style={tw('items-center justify-center rounded-full w-16 h-16 bg-green-200')}>
                    <Entypo name="tools" size={24} color="green"/>

                </TouchableOpacity>

            </View>
            
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
});
