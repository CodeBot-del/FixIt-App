import React, {useState, route, useContext} from 'react'
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Image, Text, Button, TextInput, Switch,} from 'react-native';
import {} from 'react-native-paper';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import useAuth from "../hooks/useAuth";
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../config/themeContext';



const Menu = () => {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const {user, } = useAuth();
    const [mode, setMode] = useState(false);
    

    
    
    
    return (
        
        <View style={[tw('top-5 p-3 h-full'), {backgroundColor: theme.background}]}>

            <Text style={[tw('text-2xl font-bold'), {color: theme.color}]}>Settings</Text>
            

                <TouchableOpacity style={tw('relative p-4 w-full h-80 items-center p-2')} onPress={()=>{}}>
                <Image 
                style={tw('absolute top-0 h-60 w-full rounded-xl')} 
                source={{uri: user.photoURL}}
                
                />

                </TouchableOpacity>
                
                
                <Text style={[tw('text-xl font-semibold'), {color: theme.color}]}>Language</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={tw('p-2')}>
                <Image 
                style={tw('top-0 h-10 w-10 rounded-xl')} 
                source={{uri: 'https://th.bing.com/th/id/R.53e87dc1874e487d38eeba168d8ff54e?rik=CelP0Na2025vsg&pid=ImgRaw&r=0'}}
                
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HomeSwahili')} style={tw('p-2')}>
                <Image 
                style={tw('top-0 h-10 w-10 rounded-xl')} 
                source={{uri: 'https://th.bing.com/th/id/R.7148d8e9d8f8fc11bb5809edeefce63d?rik=Uc9zd%2bFH9Uoieg&pid=ImgRaw&r=0'}}
                
                />
                </TouchableOpacity>

                <Text style={[tw('text-l font-semibold pt-3'), {color: theme.color}]}>Dark Mode</Text>
                <Switch 
                style={tw('w-20')}
                value = {mode}
                onValueChange={(value) => {
                    setMode(value);
                    EventRegister.emit("changeTheme", value);
                }}
                />
                
            
                

            

        </View>
        
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
  

export default Menu
