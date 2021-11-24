//ok

import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground } from 'react-native'

const CreateQuiz = ({navigation}) => {
    return (
    <View style={styles.home}>
        <ImageBackground style={styles.container} source={require('../../assets/images/bg.gif')}>
        <Pressable style={styles.customBtn} onPress={()=> navigation.replace("Home")}>
            <Text style={styles.btnText}>Back</Text>
        </Pressable>
            <View style={styles.container}>
                <Text>Enter category here:</Text>
                <TextInput style={styles.textBox} placeholder="Enter Category here"></TextInput>
                <Pressable  style={styles.customBtn1} onPress={()=> navigation.replace("CreateQuestions")}>
                    <Text style={styles.btnText}>Press to proceed</Text>
                </Pressable>
            </View>
        </ImageBackground>
    </View>
    );
};


export default CreateQuiz;

const styles = StyleSheet.create({
home:{
    width:'100%',
    height:'100%'
    },
container:{    
    flex: 1,
    alignItems: 'center',
    width:'100%',
    height:'100%'
    },    
customBtn:{
    width:'40%',
    paddingHorizontal:50,
    paddingVertical:10,
    backgroundColor:'#0f7e9b',
    marginLeft:-220,
    borderRadius:10,
    borderWidth:3,
    borderColor:'#ffff',
    marginVertical:100,
    },
customBtn1:{
    width:'60%',
    paddingHorizontal:50,
    paddingVertical:10,
    backgroundColor:'#0f7e9b',
    margin:5,
    borderRadius:10,
    borderWidth:3,
    borderColor:'#ffff',
    marginLeft:10,
    },
btnText:{
    textAlign:'center',
	color:'#ffff',
  },
  textBox:{
    width:'80%',
    padding:20,
    backgroundColor:'#fff',
    margin:5,
  },
});