import React from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';

const ThankyouScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw('top-8')}>
            <View>
            <Text style={tw('absolute text-black p-6 text-2xl font-bold')}>Ombi Limetumwa!</Text>
            </View>
            <View style={tw('flex-1 w-full pt-20')}>
                <Image 
                style={tw('h-40 w-50')} 
                source={{uri: 'https://ak1.picdn.net/shutterstock/videos/26572331/thumb/5.jpg?i10c=img.resize(height:160)'}}
                />
                
                
                </View>

                <View style={tw('p-4')}>
                <Text style={tw('relative top-60 text-xl')}>
                    Ombi lako la marekebisho ya simu limetumwa. Dereva wetu atakupigia simu muda mfupi baadae. Ahsante.
                </Text>
                <Text style={tw('relative top-60 pt-3')}>
                    Kwa msaada na malalamiko, 
                </Text>
                <Text style={tw('relative top-60')}>
                Piga: +255 657 538 068
                </Text>
                </View>

                <View style={tw('pt-5')}>
                    <TouchableOpacity 
                        style={tw('items-center justify-center rounded-full w-26 h-16 bg-gray-200')}
                        onPress={() => navigation.navigate('HomeSwahili')}
                    >
                            <Entypo name="home" size={30} color="gray"/>
                            <Text style={tw('font-bold text-black')}>Rudi</Text>

                        </TouchableOpacity>

            </View>
            

                


            
            
        </SafeAreaView>
    )
}

export default ThankyouScreen


