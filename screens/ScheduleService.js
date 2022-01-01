import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image} from 'react-native';
import tw from 'tailwind-rn';


const ScheduleService = () => {
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
                    keyboardType='numeric'
                    placeholder='enter your active phone number'
                />
            </View>

            <View style={tw('p-2')}>
                <Text style={tw('font-bold')}>Address (where you are):</Text>
                <TextInput 
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    placeholder='enter your location'
                />
            </View>

            <View style={tw('p-2')}>
           
                
                <Text style={tw('font-bold')}>Date of Service:</Text>
                <TextInput 
                    style={{height: 30, width: 320, borderBottomWidth: 1, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
                    placeholder='DD-MM-YY'
                    keyboardType='numeric'
                />
            </View>

            <View style={tw('pt-5')}>
            <TouchableOpacity 
                
                
                style={tw('items-center justify-center rounded-full w-26 h-16 bg-green-200')} onPress={()=>{}}>
                    
                    <Text style={tw('text-xl font-bold text-black')}>Confirm</Text>

                </TouchableOpacity>

            </View>

            

            
            

            
        </SafeAreaView>
    )
}

export default ScheduleService

const styles = StyleSheet.create({})
