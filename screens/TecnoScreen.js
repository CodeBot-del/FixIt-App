import React from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";

const TecnoScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw('top-8')}>
            <ScrollView style={styles.scrollView}>
            <TouchableOpacity style={tw('flex-1 w-full')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Spark 7'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.droidafrica.net/wp-content/uploads/2021/04/Tecno-Spark-7-Pro-DroidAfrica-1.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      Spark 7</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Camon 18'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.b0gZzGqsj_Ez4xd5jGdJZQHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Camon 18</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Pova Neo'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.mobilityarena.com/wp-content/uploads/2021/12/TECNO-Pova-Neo.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      Pova Neo</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Spark 8'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.lwb3Xk0GyvaMOqntgwdNxQHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      Spark 8</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Camon 17'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.p7JqfwcstLKwy9fM7cuorAHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      Camon 17</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Phantom X'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.IfUFQzZ-94IFgFepIBv_eQHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Phantom X</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Pop 5'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.dHlB1v9Ubj6U-hHFSMFSagHaG6?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Pop 5</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Spark Go'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.d7hi1rw3pwtHNpuHmnPT5QHaHa?pid=ImgDet&w=500&h=500&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Spark Go</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Camon 16'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://sokobest.co.ke/wp-content/uploads/2020/09/Tecno-Camon-16-Premier.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Camon 16</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Spark 3'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://cdn-0.phonesdata.com/files/models/TECNO--Spark-3-662.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Spark 3</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Pouvoir 4 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.Dhc7-tm37tWfOKx3rR_XjgHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Pouvoir 4 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Pop 2 F'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.99625f9790d8830e7c7d5d58f134772a?rik=8jE8PDaLN56khQ&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Pop 2 F</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Camon 12'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.1f049715786f94c5e28c8966d7bdf0d9?rik=j79%2fiX2mPXPo8g&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Camon 12</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno Phantom 9'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://prem-market.com/media/2020/05/3-7_4nd.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Phantom 9</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Tecno H5'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.4GQYv_0qlXlurGWzae8TtAHaFe?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        H5</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={() => navigation.navigate('OtherPhones')}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.1798e0d7944f8c7361d9d45200358924?rik=%2b5%2b2%2bPOKIPGhsw&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Others</Text>

                </TouchableOpacity>


            </ScrollView>
            
        </SafeAreaView>
    )
}

export default TecnoScreen

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'whitesmoke',
        marginHorizontal: 20,
        height: 650,
        

      },
})
