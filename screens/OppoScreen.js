import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";

const OppoScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw('top-8')}>
            <ScrollView style={styles.scrollView}>
            <TouchableOpacity style={tw('flex-1 w-full')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo R11s'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.aIAZ98Xwgngf3ObM1dq3kAHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      R11s</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo A95'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.AtNGClpOt5qTksThZUHRnQHaHZ?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       A95</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo A73'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.b5e2af7fc2582d738e92ce05fa3a32cc?rik=f0tKD%2f%2f8puMWUg&riu=http%3a%2f%2fsgfm.elcorteingles.es%2fSGFM%2fdctm%2fMEDIA03%2f202010%2f23%2f00157063601207009_2__1200x1200.jpg&ehk=wjh0ycJjB3whPsxkabydqrSahmYKfwFMbme8n5SxvDo%3d&risl=&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      A73</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo Reno 7 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.1k-VJ3TC4-ELXQ04IChgcwHaFj?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      Reno 7 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo F1s'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://3.bp.blogspot.com/-IKEC6WhT_Hg/WLjrT5vjwmI/AAAAAAAAAyc/fEdNcpqV_RMkcAwh7AJDnjR35awxOjfYACLcB/s1600/Oppo%2BF1s.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>      F1s</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo Reno 6'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.QerCjToGYDYDD4T9H4xetwHaHf?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       Reno 6</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo A54'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://priceinsouthafrica.com/wp-content/uploads/2021/03/Oppo-A54-Price-in-South-Africa-2048x2048.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       A54</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo F9 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.f204fc8b35bbebd9b9bcb2410e34229c?rik=OLXm4sD3PZjuyg&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        F9 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo Find X'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.77acbe96e2f52811b771f40caf9af441?rik=WxJ19rZWX71BXQ&riu=http%3a%2f%2fphonesdata.com%2ffiles%2fmodels%2fOppo-Find-X-109.png&ehk=RmnjKzNhoYOp0Qql7wOBXPvRyesU51BasrC9J4LwSQE%3d&risl=&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Find X</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo F5'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.07e317d50b9e7bfa083ef0863f0f91a6?rik=CFyxCF%2fxiHmP4A&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        F5</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo K9 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.donedeal.com.bd/images/listings/2020-09/bigThmb/oppo_k9_full_specifications_and_price_in-1600228890-863-e.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       K9 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo F11 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.e874137cc3253e8233a5515e6ca6044b?rik=pSuACv2oo4ockg&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       F11 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo A83'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.gizmochina.com/wp-content/uploads/2018/01/Oppo-A83.jpg'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>       A83</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo Find X3'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.K6eMpu01g-ACNadl8n5xOAHaHa?pid=ImgDet&rs=1'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Find X3</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('Confirm', {
            title: 'Oppo Neo 5'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.578c8f5690bb643b1f60cc5957b95afc?rik=qUhYqAG%2bNXn1xQ&riu=http%3a%2f%2fimages.fonearena.com%2fblog%2fwp-content%2fuploads%2f2015%2f06%2fOppo-Neo-5.jpg&ehk=t%2fBqxD8GUkxFc%2ft94BNX3Ysv5S5oZ8J46L%2fXWrbNfxU%3d&risl=&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Neo 5</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={() => navigation.navigate('OtherPhones')}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.a69a3bcb3e1ef3db890ae132861f70c4?rik=ahZptyszkGwa7g&pid=ImgRaw&r=0'}}
                />
                <Text style={tw('absolute top-14 left-14 text-xl font-bold text-black')}>        Others</Text>

                </TouchableOpacity>


            </ScrollView>
            
        </SafeAreaView>
    )
}

export default OppoScreen

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'whitesmoke',
        marginHorizontal: 20,
        height: 650,
        },
})
