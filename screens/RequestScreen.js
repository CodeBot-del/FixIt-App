import React, {useState, route, useContext} from 'react'
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import themeContext from '../config/themeContext';


const RequestScreen = (props) => {
    const nav = useNavigation();
    const theme = useContext(themeContext);
    const {navigation, route} = props
    const {title} = route.params

    console.log(title);

    
    return (
        <SafeAreaView style={[tw('top-5 h-full p-3'), {backgroundColor: theme.background}]}>

            <Text style={[tw('text-2xl font-bold'), {color: theme.color}]}>Choose your Phone's brand</Text>
            
            <View style={tw('bg-white-200 w-full h-20 justify-between ')}>
                <TouchableOpacity style={tw('absolute p-4 w-full h-20 items-center p-2')} onPress={() => nav.navigate('Samsung')}>
                <Image 
                style={tw('absolute top-0 h-full w-full rounded-xl')} 
                source={{uri: 'http://100dc.my/wp-content/uploads/2018/02/samsung-logo.png'}}
                
                />

                </TouchableOpacity>
            

            </View>
            <View style={tw('bg-white-200 w-full h-20 justify-between ')}>
                <TouchableOpacity style={tw('absolute p-4 w-full h-20 items-center p-2')} onPress={() => nav.navigate('Apple')}>
                <Image 
                style={tw('absolute top-0 h-full w-16 rounded-xl')} 
                source={{uri: 'https://www.file-extensions.org/imgs/company-logo/261/apple-inc.png'}}
                />

                </TouchableOpacity>
            

            </View>
            <View style={tw('bg-white-200 w-full h-20 justify-between ')}>
                <TouchableOpacity style={tw('absolute p-4 w-full h-20 items-center p-2')} onPress={() => nav.navigate('Huawei')}>
                <Image 
                style={tw('absolute top-0 h-full w-16 ')} 
                source={{uri: 'https://p.kindpng.com/picc/s/494-4944705_huawei-smartphone-new-launch-huawei-logo-black-png.png'}}
                />

                </TouchableOpacity>
            

            </View>
            <View style={tw('bg-white-200 w-full h-20 justify-between ')}>
                <TouchableOpacity style={tw('absolute p-4 w-full h-20 items-center p-2')} onPress={() => nav.navigate('Tecno')}>
                <Image 
                style={tw('absolute top-0 h-10 w-40 ')} 
                source={{uri: 'https://passport.tecno.com/nimages/loginlogo.png'}}
                />

                </TouchableOpacity>
            

            </View>
            <View style={tw('bg-white-200 w-full h-20 justify-between ')}>
                <TouchableOpacity style={tw('absolute p-4 w-full h-20 items-center p-2')} onPress={() => nav.navigate('Infinix')}>
                <Image 
                style={tw('absolute top-0 h-10 w-40 ')} 
                source={{uri: 'https://firmware.arya92.com/wp-content/uploads/2021/01/Infinix-Home.png'}}
                />

                </TouchableOpacity>
            

            </View>
            <View style={tw('bg-white-200 w-full h-20 justify-between ')}>
                <TouchableOpacity style={tw('absolute p-4 w-full h-20 items-center p-2')} onPress={() => nav.navigate('Oppo')}>
                <Image 
                style={tw('absolute top-0 h-10 w-40 ')} 
                source={{uri: 'https://pluspng.com/img-png/oppo-logo-png-oppo-promotion-1853x700.png'}}
                />

                </TouchableOpacity>
            

            </View>
            <View style={tw('bg-white-200 w-full h-20 justify-between ')}>
                <TouchableOpacity style={tw('absolute p-4 w-full h-20 items-center p-2')} onPress={() => nav.navigate('Nokia')}>
                <Image 
                style={tw('absolute top-0 h-8 w-44 ')} 
                source={{uri: 'https://i.pinimg.com/originals/ca/45/8f/ca458fcf41ec12b4f2925e75905a62ad.png'}}
                />

                </TouchableOpacity>
            

            </View>
            
            <TouchableOpacity 
                // onPress={() => swipeRef.current.swipeRight()}
                
                style={tw('items-center justify-center rounded-full w-full h-16 bg-gray-200')} onPress={() => nav.navigate('OtherPhones')}>
                    <Text style={tw('text-center font-semibold text-2xl')}>Others</Text>

                </TouchableOpacity>
                
                
            

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      
    },
  });
  

export default RequestScreen
