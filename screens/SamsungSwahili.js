import React, {useContext} from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import themeContext from '../config/themeContext';


const SamsungScreen = () => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);

    
    return (
        <SafeAreaView style={[tw('top-7'), {backgroundColor: theme.background}]}>
            <ScrollView style={[styles.scrollView, {backgroundColor: theme.background}]}>
            <TouchableOpacity style={tw('flex-1 w-full')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung A52'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.BiKuQhf9hU6quNGghjYwbAHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       A52</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung A12'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.h_mqD-qM7fUo1ciNsTN8fgHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       A12</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung S21 Ultra'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://wowmovil.es/wp-content/uploads/2021/01/samsung-galaxy-s21-ultra-5g-128gb12gb-g998-dual-sim-negro-1.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       S21 Ultra</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung A32'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://image.ceneostatic.pl/data/products/105023512/57d6a4a8-6284-4013-9e70-69d301b35221_i-samsung-galaxy-a32-5g-sm-a326-4-128gb-fioletowy.jpg?=0e64f'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       A32</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung A03s'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.8a5155f7c0869e00467d6b397d5dd7a7?rik=J7HqaAiItjyIQw&riu=http%3a%2f%2ftechspotify.com%2fwp-content%2fuploads%2f2021%2f05%2fSamsung-Galaxy-A03s-Release-date.jpg&ehk=DMh18xU%2b1oFiSBC5ig7Ux25FKBbfSUVjBRx3GNmMJTw%3d&risl=&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       A03s</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung A22'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.aETFKfmZYjV7WIWubXBD4QHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       A22</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung A72'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.mascomintl.com/themes/images/mascom/Samsung%20Galaxy%20A52%20Awesome%20Violet%206.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       A72</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung S8'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://nerdy.co.za/wp-content/uploads/2020/12/Samsung-Galaxy-S8-64GB-Coral-Blue-1.png'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       S8</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung Note20 Ultra'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.XaWQPe941CzOgbillZFvFAHaE8?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       Note20 Ultra</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung S20'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.36c2cfe22f8db6ab251ce16a1b85fc81?rik=9vWLE0zbWUpr0g&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       S20</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung S10'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.rQ6nwWq--IMnBssXzKVXAgHaE7?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       S10</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung Note9'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://farm2.staticflickr.com/1791/43924913422_554470a845_o.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       Note9</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung J7'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.notebookcheck-tr.com/uploads/tx_nbc2/SamsungGalaxyJ7___1_.JPG'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       J7</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung Tab A7'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://d31wxntiwn0x96.cloudfront.net/bghptk/productimages/12426_0.jpeg?etag=%2238626023f2f5a4e31c1dcbd0f69569a3%22'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       Tab A7</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Samsung M51'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.8338d99e679e1859ea262894d5db0a43?rik=K%2f5EEv4zeBJAIw&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       M51</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={() => navigation.navigate('OtherPhonesSwahili')}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.16f651b5fa9cd0f1d1165c4a33cd9b4e?rik=DqicIMCQggcQ5g&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       Zingine</Text>

                </TouchableOpacity>


            </ScrollView>
            
        </SafeAreaView>
    )
}

export default SamsungScreen

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'whitesmoke',
        marginHorizontal: 20,
        height: 700,
        

      },
})
