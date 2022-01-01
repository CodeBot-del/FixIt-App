import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import tw from 'tailwind-rn';
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/core";



const AppleScreen = () => {
    const navigation = useNavigation();
    
    
    
    return (
        <SafeAreaView style={tw('top-8')}>
            <ScrollView style={styles.scrollView}>
            <TouchableOpacity style={tw('flex-1 w-full')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone 13 Pro Max'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1631652956000'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      13 Pro Max</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone 7'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.502a2532aea13616d8f4c16a686b1c8b?rik=93Nh13bRiCIfZw&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1662%2f8203%2fproducts%2f3_5528919c-82ec-4596-a644-36da10cfc14f_1024x1024.jpg%3fv%3d1551817975&ehk=mRkcmiYnyU9%2f4BUpvfgKLn3bxTo%2fJNTcBK3eyKdZcSA%3d&risl=&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       7</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone 11'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://boxedtech.com/wp-content/uploads/2020/02/iphone-11-black-back.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      11</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone 12'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.58lNLFfoMxRSVQbrabhTVAHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      12</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone 8 Plus'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.50228438a51303414a9bdc78e0f4a001?rik=RmsNLwdsY363pg&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      8 plus</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone XR'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.c2308ac642dd48cbe022b11ce9e66133?rik=jMJYTxOe2Cbhxw&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       XR</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone 12 Pro Max'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.fe3fec9de1389e59a32b373e81fc63da?rik=2lSVWEtSv6arBw&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       12 Pro Max</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone X'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.shopdutyfree.fr/16396-thickbox_default/apple-iphone-x-sim-unique-4g-64go-gris.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        X</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone 6'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.16fd2ef53adb1ae7def392aec89f74f5?rik=i629dO6WU%2bQZUg&riu=http%3a%2f%2fwww.arabiacart.com%2fimage%2fcache%2fcatalog%2fproduct-1304%2fiphone-6-space-grey-64gbmodified-mg4f2aea-700x755.jpg&ehk=GzoS7ug9soFhzYdryvoGa3rKBEfi75orYDcaj7HKniI%3d&risl=&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        6</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone SE'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.d9217d1a59a2199d9428eafa22928eda?rik=UGRji3JUc%2fupMw&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        SE</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone 13 Mini'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.cExGQDXSqFNSR980GpkA0QHaDt?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       13 Mini</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone 11 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.ce0e9a5b58159989a477fdf2ea6711a9?rik=%2fpQ%2bxMipQxMugw&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       11 Pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPhone 8 Plus'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://tecnomari.es/wp-content/uploads/2019/11/Apple-iPhone-8-Plus-128GB-Plata-1.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       8 Plus</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPad Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.Klw1BE32Pr6UYqD2QMuFLAHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        iPad Pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'iPad Air'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.df0bb1891e78709a00c2fbbb0bb52924?rik=N6pv9XFPcxkLoQ&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        iPad Air</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={() => navigation.navigate('OtherPhones')}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://media.wired.com/photos/5a5c6c95c676961b88bac638/master/w_1024%2Cc_limit/0910_apple_1545.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Others</Text>

                </TouchableOpacity>


            </ScrollView>
            
            
            
            
            
        </SafeAreaView>
    )
}

export default AppleScreen

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'whitesmoke',
        marginHorizontal: 20,
        height: 600,
        

      },
})


