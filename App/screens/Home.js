import React from 'react'
import { Pressable, Text, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native'


const Home = ({navigation}) => {
    return (

    <SafeAreaView style={styles.home}>
        <ImageBackground style={styles.container} source={require('../../assets/images/bg.gif')}>
            <Image style={styles.logo} source={require('../../assets/images/fishbone.png')} />
            
            <Pressable style={styles.customBtn} onPress={() => navigation.navigate("QuizIndex")}>
                <Text style={styles.btnText}>Play</Text>
            </Pressable>
            <Pressable style={styles.customBtn} onPress={() => navigation.replace("CreateQuiz")}>
                <Text style={styles.btnText}>Create A Quiz</Text>
            </Pressable>
        </ImageBackground>
    </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%'
      },
  logo:{
    width: 300,
    height:300,

  },  
    home:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%'
    },

    btnText:{
        textAlign:'center',
        color:'#ffff',
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
});