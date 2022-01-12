import React, {useState, route} from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image, Switch,} from 'react-native';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import useAuth from "../hooks/useAuth";


const RequestScreen = () => {
    const navigation = useNavigation();
    const {user} = useAuth();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <SafeAreaView style={tw('top-8 p-3')}>

            <Text style={tw('text-2xl font-bold')}>Settings</Text>
            
            <View style={tw('bg-white-200 w-full h-80 justify-between ')}>
                <TouchableOpacity style={tw('relative p-4 w-full h-80 items-center p-2')} onPress={() => navigation.navigate('Samsung')}>
                <Image 
                style={tw('absolute top-0 h-60 w-full rounded-xl')} 
                source={{uri: user.photoURL}}
                
                />

                </TouchableOpacity>
                
                <Text style={tw('text-xl font-semibold')}>Language</Text>

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

                <Text style={tw('text-l font-semibold pt-3')}>Dark Mode</Text>
                
                <Switch
                    trackColor={{ false: "#767577", true: "#1d3557" }}
                    thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    
                />
            
                

            </View>

            
            
            
            
            
            
            
            
            
                
                
            

            
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
