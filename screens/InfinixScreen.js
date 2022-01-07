import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";

const InfinixScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw('top-8')}>
            <ScrollView style={styles.scrollView}>
            <TouchableOpacity style={tw('flex-1 w-full')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Note 11 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://onlines360.com/wp-content/uploads/2021/10/Infinix-Note-11-Pro.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      Note 11 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Hot 9 Play'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.0a1e06f8a95e7eafbee6b133c5c2584e?rik=E0nVT8zJHMBayg&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Hot 9 Play</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Hot 10'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.rbzzrrHEiIUfgsLE1zkZoQHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      Hot 10</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Zero X Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.4gE4XMXQ6m4ytSp6V5luhQHaHY?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      Zero X pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Smart 5'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.CIEm_GJIteiXUuumgeHgGAHaHq?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      Smart 5</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Note 10'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.e9bvO7-yKwtFdjhtMmkcCAHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Note 10</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Smart HD'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.bestnaijatech.com/wp-content/uploads/2020/12/Infinix-Smart-HD-2021-Price-In-Nigeria.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Smart HD</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Note 7'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.a5a59df2e25954ca0671bc7ae8fab359?rik=7LRRsZeazGu3BA&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Note 7</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Zero 8'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.2267490ae0991b88d6d05f9afa948601?rik=mCPn%2fSNLVNE1%2fg&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Zero 8</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix S5'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://i1.wp.com/techprolonged.com/wp-content/uploads/2019/12/Infinix-S5.jpg?quality=100&strip=all&ssl=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        S5</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Hot 7 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.14300de830c90e5fb1df7d89440ddad9?rik=Zt5mwSx1Mi%2b8iA&pid=ImgRaw&r=0&sres=1&sresct=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Hot 7 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Note 6'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.mobilepriceall.com/wp-content/uploads/2019/09/Infinix-Note-6.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Note 6</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Note 4'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.lYMv7kBwAMsEqzA_zu3g_gHaLG?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Note 4</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix Hot S3'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.7d64fae01453b8a7310e217085c4729a?rik=WDlc%2bbNccZv8sg&riu=http%3a%2f%2fbetterphotography.in%2fwp-content%2fuploads%2f2018%2f04%2fInfinix-hot-s3-4-441x440.jpg&ehk=Nn9qrtmbfhW47FoyTGhwhNIuL3peeASlFlkltiwdGso%3d&risl=&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Hot S3</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Infinix S3X'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://i0.wp.com/www.naijaandroidarena.com/wp-content/uploads/2018/08/infinix-hots3x-featured-image.jpg?fit=563,568&ssl=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        S3X</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={() => navigation.navigate('OtherPhones')}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.e9ffd3c4551db7d698f4bfaf2f008128?rik=pXqnUb5Y4Q7wVg&riu=http%3a%2f%2fm.phonegg.com%2f121%2f12151b-3.jpg&ehk=CB2iXaFN3Tx3qeEXYMk7Ur4TEV%2bkye53ItDMY7BdDgk%3d&risl=&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Others</Text>

                </TouchableOpacity>


            </ScrollView>
            
        </SafeAreaView>
    )
}

export default InfinixScreen

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'whitesmoke',
        marginHorizontal: 20,
        height: 650,
        

      },
})
