import React, {useContext} from 'react'
import { Text, Button, TextInput, StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import {} from 'react-native-paper';
import tw from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";
import themeContext from '../config/themeContext';


const HuaweiScreen = () => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);


    return (
        <SafeAreaView style={[tw('top-7'), {backgroundColor: theme.background}]}>
            <ScrollView style={[styles.scrollView, {backgroundColor: theme.background}]}>
            <TouchableOpacity style={tw('flex-1 w-full')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei Nova9'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.mobiledor.co/wp-content/uploads/2021/01/Huawei-Nova-9-Pro-5G-Official-image-500x500-1-500x500.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>      Nova 9</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei P50 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.androidworld.it/wp-content/uploads/2021/07/featured_huaweip50pro.jpeg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       P50 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei P30 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.uNnee7KNaD4qXOjwukRvYgHaHa?pid=ImgDet&w=500&h=500&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>      P30 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei Nova 8i'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.webtekno.com/images/editor/default/0003/17/d1eff1ff70a4fb6033f412b52dd2972e1206ad99.jpeg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>      Nova 8i</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei P40 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.4gltemall.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/h/u/huawei_p40.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>      P40 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei Mate40 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/440407_1913ceb0-5e04-4356-bd7b-5ce32185c575.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       Mate40 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei P20 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.8d34f79de4bcff6558ab47ec7113fc9a?rik=8nbemgbb5B4HaA&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       P20 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei Y9'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://img.biggo.com.tw/sXujD1FDvJSjepna3UexnnTuPmXRMZWZmxZDdf16Fmbg/https://www.jyes.com.tw/data/goods/gallery/201811/1541651502504625904.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        Y9</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei Mate20 Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.mobiledokan.com/wp-content/uploads/2019/03/Huawei-Mate-20-Pro-Green-600x508.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        Mate20 pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei P9'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://multimedia-dreams.com/media/image/product/15432/lg/huawei-p9-eva-l09-32gb-android-lte-smartphone-titanium-grey-neu-ovp-versiegelt.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        P9</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei Y7 a'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.cd694d3e773f22f05f3f125c06c78b65?rik=8oMV1h6rQrqEDQ&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       Y7 a</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei Mate Pad 11'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://www.notebookcheck.net/fileadmin/_processed_/9/e/csm_HUAWEI_MatePad_11_11_4_f71a1e75ff.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       Mate Pad 11</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei Mate Pad Pro'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.ab6d984403c4513a4af72b5497c62895?rik=dpNhFxmMqr5mzw&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>       Mate Pad pro</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei Enjoy 20e'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://dekaum.com/wp-content/uploads/2021/12/Huawei-Enjoy-20e-Review.jpg'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        Enjoy 20e</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={()=>{navigation.navigate('ConfirmSwahili', {
            title: 'Huawei Y6'});}}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/R.e5e23972a188e6f5ffd8e8dcc6a3233b?rik=UjYK4NnPKqGUoA&riu=http%3a%2f%2fwww.techtoyreviews.com%2fwp-content%2fuploads%2f2018%2f06%2fHuawei-Y6-2018-Price-in-USA.jpg&ehk=H1NXp6FbcshGODldyDB%2bsRaYG297EWuZnEG%2btAjk8lA%3d&risl=&pid=ImgRaw&r=0'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        Y6</Text>

                </TouchableOpacity>

                <TouchableOpacity style={tw('flex-1 w-full pt-2')} onPress={() => navigation.navigate('OtherPhonesSwahili')}>
                <Image 
                style={tw('h-20 w-20 ')} 
                source={{uri: 'https://th.bing.com/th/id/OIP.TtadU5K9Jh-9uDykW-KO-AHaFs?pid=ImgDet&rs=1'}}
                />
                <Text style={[tw('absolute top-14 left-14 text-xl font-bold text-black'), {color: theme.color}]}>        Zingine</Text>

                </TouchableOpacity>


            </ScrollView>
            
        </SafeAreaView>
    )
}

export default HuaweiScreen

const styles = StyleSheet.create({
        scrollView: {
            backgroundColor: 'whitesmoke',
            marginHorizontal: 20,
            height: 700,
            
    
          },
})
