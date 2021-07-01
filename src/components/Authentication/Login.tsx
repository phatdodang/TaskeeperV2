import React, { Component ,useState,useEffect} from 'react';
import { Text, View, Image,TextInput,TouchableOpacity,ScrollView,TouchableWithoutFeedback ,Keyboard} from 'react-native';
import AppStyle from "../../themes/index";
import imageHeader from "../../assets/images/logoHeader.png";
import { AntDesign,Ionicons,FontAwesome } from '@expo/vector-icons'; 
import { useFonts } from "expo-font";
import {getLanguage} from "../../services/api";

interface Props {}

interface State {
    text:string;
}

const Login =  () =>{
    const [showPassword, setshowPassword] = useState(true);
    const [password,setpassword]=useState("");
    const buttonHandler = () => {
        setshowPassword(current => !current)
    }
    const getDataLanguage = async () => {
        const result = await getLanguage();
        console.log(result);
    } 
    useEffect( () => {
        getDataLanguage();
     }, [])
    const [loaded] = useFonts({
        RobotoMonoInput: require("../../assets/fonts/RobotoMono-Regular.ttf"),
        RobotoTitle: require("../../assets/fonts/Roboto-Medium.ttf"),
        RobotoDes: require("../../assets/fonts/Roboto-Regular.ttf"),
        RobotoMonoCheck: require("../../assets/fonts/RobotoMono-Medium.ttf"),
      });
    if (!loaded) {
        return null;
    }
    const a = async () =>{
        console.log("nfuyen")
        
    }

    return(
        <TouchableWithoutFeedback
        style={AppStyle.StyleCommon.container}
        onPress={Keyboard.dismiss}
      >
        <View style={[AppStyle.StyleCommon.container,{alignItems:'center'}]}>          
            <View style={AppStyle.StyleLogin.circle1}></View>
            <View style={AppStyle.StyleLogin.circle2}></View>
            <View style ={AppStyle.StyleLogin.viewTitle}> 
                <Text style ={[AppStyle.StyleLogin.titleSignIn,{ fontFamily: "RobotoMonoInput" }]}>Sign in</Text>   
                <Text style ={[AppStyle.StyleLogin.titleDetail,{ fontFamily: "RobotoMonoInput" }]}>Glad to see you back</Text>
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
                  <Text style={[AppStyle.StyleLogin.textInputLogin ,{ fontFamily: "RobotoMonoInput" }]}>Email</Text>
                </View>
            </View>

            <View style={AppStyle.StyleLogin.viewInput}>
                <TextInput
                style={AppStyle.StyleLogin.input}
                underlineColorAndroid="transparent"
                value={password}
                onChangeText={(password)=>setpassword(password)}
                secureTextEntry={showPassword}
                placeholder="Enter password"
                ></TextInput>
                <View style={AppStyle.StyleLogin.viewTextInput}>
                    <Text style={[AppStyle.StyleLogin.textInputLogin,{ fontFamily: "RobotoMonoInput" }]}>Password</Text>
                </View>
                <TouchableOpacity style={{position:'absolute',right:55,top:10,backgroundColor:'white'}} onPress={buttonHandler}>
                <Ionicons name={showPassword==false?"eye":"eye-off"} size={24} color="black" />
              </TouchableOpacity>
            </View>
            </View>
            <Text style ={[AppStyle.StyleLogin.viewTextFoget,{ fontFamily: "RobotoMonoInput" }]}>Forgot Password</Text>      
            <TouchableOpacity onPress={a} style ={AppStyle.StyleLogin.buttonSignIn}>
                <Text style ={[AppStyle.StyleLogin.viewTextButtonSignIn,{ fontFamily: "RobotoMonoInput" }]} >SIGN IN</Text>
            </TouchableOpacity>       
            <Text style ={[AppStyle.StyleLogin.viewTextChooseSignIn,{ fontFamily: "RobotoMonoInput" }]}>-Or sign in with-</Text>
            <View style ={AppStyle.StyleLogin.viewChooseSignInButton}>
                <TouchableOpacity style ={AppStyle.StyleLogin.viewChooseSignInButtonFacebook}>
                    <FontAwesome name="facebook-f" size={24} color="#ffff" />
                </TouchableOpacity>
                <TouchableOpacity style ={AppStyle.StyleLogin.viewChooseSignInButtonGoogle}>
                    <AntDesign name="google" size={24} color="#ffff" />
                </TouchableOpacity>
            </View>
            <View style={AppStyle.StyleLogin.viewNote}>
                <Text style={{ fontSize: 12,fontFamily: "RobotoMonoCheck" }}>Don’t have an account ? </Text>
                <Text style={{ fontSize: 12, color: "red",fontFamily: "RobotoMonoCheck" }}>Sign up </Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}


export default Login;