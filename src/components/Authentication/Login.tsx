import React, { Component } from 'react';
import { Text, View, Image,TextInput } from 'react-native';
import AppStyle from "../../themes/index";
import imageHeader from "../../assets/images/logoHeader.png";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

interface Props {}

interface State {
    text:string;
}

const Login:React.FC = () =>{
    return(
        <View style={AppStyle.StyleCommon.container}>          
            <View style={AppStyle.StyleLogin.circle1}></View>
            <View style={AppStyle.StyleLogin.circle2}></View>
            <View style ={AppStyle.StyleLogin.viewTitle}>
                <View>
                    <Text style ={AppStyle.StyleLogin.titleSignIn}>Sign in</Text>
                </View>
                <View>
                    <Text style ={AppStyle.StyleLogin.titleDetail} >Glad to see you back</Text>
                </View>
            </View>
            <View style ={AppStyle.StyleLogin.viewImage}>
                <Image source={imageHeader} style ={AppStyle.StyleLogin.imageHeader}></Image>
            </View>
            <View style={AppStyle.StyleLogin.viewLoginInput}>
            <View style={AppStyle.StyleLogin.viewInput}>
                <TextInput
                style={AppStyle.StyleLogin.input}
                underlineColorAndroid="transparent"
                multiline={true}
                placeholder="Enter email"
                ></TextInput>
                <View style={AppStyle.StyleLogin.viewTextInput}>
                <Text style={AppStyle.StyleLogin.textInputLogin}>Email</Text>
                </View>
            </View>

            <View style={AppStyle.StyleLogin.viewInput}>
                <TextInput
                style={AppStyle.StyleLogin.input}
                underlineColorAndroid="transparent"
                multiline={true}
                placeholder="Enter password"
                ></TextInput>
                <View style={AppStyle.StyleLogin.viewTextInput}>
                <Text style={AppStyle.StyleLogin.textInputLogin}>Password</Text>
                </View>
            </View>
            </View>
            
            <View style ={AppStyle.StyleLogin.viewForgot}>
                <Text style ={AppStyle.StyleLogin.viewTextFoget}>Forgot Password</Text>
            </View>
            <View style ={AppStyle.StyleLogin.viewButton}>
                <View style ={AppStyle.StyleLogin.buttonSignIn}>
                    <Text style ={AppStyle.StyleLogin.viewTextButtonSignIn}>SIGN IN</Text>
                </View>
            </View>
            <View style ={AppStyle.StyleLogin.viewChooseSignIn}>
                <Text style ={AppStyle.StyleLogin.viewTextChooseSignIn}>-Or sign in with-</Text>
            </View>
            <View style ={AppStyle.StyleLogin.viewChooseSignInButton}>
                <View style ={AppStyle.StyleLogin.viewChooseSignInButtonFacebook}>
                    <FontAwesome name="facebook-f" size={24} color="#ffff" />
                </View>
                <View style ={AppStyle.StyleLogin.viewChooseSignInButtonGoogle}>
                <AntDesign name="google" size={24} color="#ffff" />
                </View>
            </View>
            <View style={AppStyle.StyleLogin.viewNote}>
                <Text style={{ fontSize: 12 }}>Don’t have an account ? </Text>
                <Text style={{ fontSize: 12, color: "red" }}>Sign up </Text>
            </View>
        </View>
    )
}


export default Login;