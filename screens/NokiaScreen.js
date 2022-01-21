import React, {useContext} from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import themeContext from '../config/themeContext';


const NokiaScreen = () => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);


    return (
        <SafeAreaView style={[tw('top-7'), {backgroundColor: theme.background}]}>
            <ScrollView style={[styles.scrollView, {backgroundColor: theme.background}]}>
            <TouchableOpacity style={tw('flex-1 w-full')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia 1'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://mobizil.com/wp-content/uploads/2018/03/nokia-1-1.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>      Nokia 1</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia X100'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://i.ytimg.com/vi/oy16r6g56GM/maxresdefault.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       X100</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia 5.4'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.be3b656a02a233f433af84b676f39f6f?rik=G8kzyFy2SVlGiw&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>      5.4</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia G50'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.vngQqKDcxfpKp3Fwykz9fwHaE6?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>      G50</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia 8'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.y61VFrgE64vtGy1nukqhTQHaIB?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>      8</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia 10'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://cdn.tgdd.vn/Products/Images/42/200216/nokia-10-pureview-600x600.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       10</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia 3.2'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.7031eee81e742191d702a19e68403a52?rik=UqRM9By9kLf8XA&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       3.2</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia 3.4'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.065514b7850901858cf134d87583336a?rik=Je3JtWXW1903aQ&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        3.4</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia X10'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.i3PZbJZaDX1rZX6RHgvwQwHaHx?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        X10</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia 6'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.8f0e69bca5a99cfa1d8700cc714e09b8?rik=ZpX9g9NQ3cIgxA&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        6</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia C30'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.4jUc9UE3pJ4uU3zT2DkCjAHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       C30</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia 7.2'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.7YwY1-Sr-e5AJzhyTlyR-AHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       7.2</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia Lumia 1020'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.fa6d476e8441e673ce80c8079c69494c?rik=zXU25MeUeDUnSw&riu=http%3a%2f%2fwww.mediamikes.com%2fwp-content%2fuploads%2f2014%2f10%2fNokia1020.jpg&ehk=IAeWnLYH3WB4yZ5dwl36B%2f4LtTSCBhhSe%2bng1DixLMQ%3d&risl=&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       Lumia 1020</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia C2'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.X9Alnt2EXBQ6_NQX-DU7OgHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        C2</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Nokia 2.1'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.d743ee945cd400a288a641614165364c?rik=PH4imdz3saiLfw&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        2.1</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={() => navigation.navigate('OtherPhones')}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.9d4025c3483852db306a88d291204588?rik=F4eG5bkS2gRh7w&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        Others</Text>

                </TouchableOpacity>


            </ScrollView>
            
        </SafeAreaView>
    )
}

export default NokiaScreen

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'whitesmoke',
        marginHorizontal: 20,
        height: 700,
        },
})
