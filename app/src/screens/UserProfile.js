import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { MenuButton } from '../components/buttons/buttons';

export default function UserProfile(props) {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <MenuButton props={props}/>
            <View style={{alignSelf: 'center'}}>
                <View style={styles.profileImage}>
                    <Image source={require("../assets/asset1.jpg")}/>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <Text style={[styles.text, {fontWeight:"200", fontSize: 36}]}>Donny</Text>
                <Text style={[styles.text, {fontSize: 14}]}>Brasco</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, {fontSize:24}]}>325</Text>
                    <Text  style={[styles.text, styles.subText]}>Trees Tracked</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"green"
    },
    text:{
        color:"#525752"
    },
    image: {
        flex: 1,
        width:"undefined",
        height:"undefined"
    },
    subText:{
        fontSize:12,
        color:"#AEB5bc",
        textTransform: "uppercase",
        fontWeight:"500"
    },
    titleBar:{
        flexDirection:"row",
        justifyContent: 'space-between',
        marginTop:24,
        marginHorizontal:16
    },
    profileImage:{
        marginTop:30,
        width: 200,
        height:200,
        borderRadius:100,
        overflow:"hidden"
    },
    infoContainer:{
        alignSelf:"center",
        alignItems: 'center',
        marginTop:10
    },
    statsContainer:{ 
        flexDirection:"row",
    },
    statsBox:{
        alignItems: 'center',
        flex:1
    }
})
