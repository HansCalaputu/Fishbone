import React from 'react'
import { View, Text, TextInput, Pressable, Alert, StyleSheet, ImageBackground } from 'react-native'
import { useState } from 'react';
const CreateQuestions = ({navigation}) => {
    const [text, setText] = useState(""); 

    return (
    <View>
        <ImageBackground style={styles.container} source={require('../../assets/images/bg.gif')}>
            <Pressable style={styles.customBtn} onPress={() => navigation.replace("CreateQuiz")}>
                <Text style={styles.btnText}>Back</Text>
            </Pressable>
            <TextInput style={styles.textBox} placeholder="Enter your Question here" value={text} onChangeText={(value) => setText(value)}></TextInput>
            <TextInput style={styles.textBox} placeholder="Enter correct answer here" value={text} onChangeText={(value) => setText(value)}></TextInput>
            <TextInput style={styles.textBox} placeholder="Enter a choice here" value={text} onChangeText={(value) => setText(value)}></TextInput>
            <TextInput style={styles.textBox} placeholder="Enter a choice here" value={text} onChangeText={(value) => setText(value)}></TextInput>
            <TextInput style={styles.textBox} placeholder="Enter a choice here" value={text} onChangeText={(value) => setText(value)}></TextInput>
            <TextInput style={styles.textBox} placeholder="Enter a choice here" value={text} onChangeText={(value) => setText(value)}></TextInput>
            <Pressable style={styles.customBtn} onPress = {()=> Alert.alert("Question Added"), () => setText("")  }>
                <Text style={styles.btnText}>Save</Text>
            </Pressable>
            <Pressable style={styles.customBtn} onPress={() => navigation.replace("Home")}>
                <Text style={styles.btnText}>Done!</Text>
            </Pressable>
        </ImageBackground>
    </View>
    );
};

export default CreateQuestions;

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        alignItems: "center",
        justifyContent:'center',
    },
    customBtn:{
      width:'40%',
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