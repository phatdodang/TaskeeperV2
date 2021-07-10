import React, { Component ,useState,useEffect} from 'react';
import { Text, View, Image,TextInput,TouchableOpacity,TouchableWithoutFeedback ,KeyboardAvoidingView,Keyboard,Alert} from 'react-native';
import AppStyle from "../../themes/index";
//@ts-ignore
import imageHeader from "../../assets/images/logoHeader.png";
import { AntDesign,Ionicons,FontAwesome } from '@expo/vector-icons'; 
import { useFonts } from "expo-font";
import ENTEXT from '../../locales/en'
import { useDispatch, useSelector } from "react-redux";
import * as action from '../../redux/actions/index'
import {signInInterface} from '../../redux/actions/Authentication/signIn.actionType'
import {setItem,getItem} from '../../storage/index'
import {APP_CONSTANTS} from  '../../constansts/index'

interface Props {}

const Login =  () =>{
    const [showPassword, setshowPassword] = useState(true);
    const [loginString,setLoginString]=useState("");
    const [password,setpassword]=useState("");
    const result = useSelector((state:any) => state.signInReducer.SigInSuccess);
    const dispatch = useDispatch();
    const buttonHandler = () => {
        setshowPassword(current => !current)
    }
    useEffect(() => {
        if (result.data.access_token != '') {
         setItem(APP_CONSTANTS.TOKEN,result.data.access_token);
         console.log("Đăng nhập thành công")      
        }
    }, [result]);
    const [loaded] = useFonts({
        RobotoMonoInput: require("../../assets/fonts/RobotoMono-Regular.ttf"),
        RobotoTitle: require("../../assets/fonts/Roboto-Medium.ttf"),
        RobotoDes: require("../../assets/fonts/Roboto-Regular.ttf"),
        RobotoMonoCheck: require("../../assets/fonts/RobotoMono-Medium.ttf"),
      });
    if (!loaded) {
        return null;
    } 
    const onSubmit = async () =>{
        let data:signInInterface = {
            loginString: loginString,
            loginInformation: {
                password: password,
                googleToken: "",
                facebookToken: ""
            }
        }
        dispatch(action.signIn(data))
    }

    return(
    <KeyboardAvoidingView style={AppStyle.StyleCommon.container}  behavior="position">
    <TouchableWithoutFeedback
        style={AppStyle.StyleCommon.container}
        onPress={Keyboard.dismiss}
      >
        <View style={[{alignItems:'center'}]}>          
            <View style={AppStyle.StyleLogin.circle1}></View>
            <View style={AppStyle.StyleLogin.circle2}></View>
            <View style ={AppStyle.StyleLogin.viewTitle}> 
                <Text style ={[AppStyle.StyleLogin.titleSignIn,{ fontFamily: "RobotoMonoInput" }]}>{ENTEXT.SIGNIN.TITLE}</Text>   
                <Text style ={[AppStyle.StyleLogin.titleDetail,{ fontFamily: "RobotoMonoInput" }]}>{ENTEXT.SIGNIN.TITLEDESC}</Text>
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
                autoFocus={true}
                placeholder="Enter email"
                onChangeText={(loginString)=>setLoginString(loginString)}
                ></TextInput>
                <View style={AppStyle.StyleLogin.viewTextInput}>
                  <Text style={[AppStyle.StyleLogin.textInputLogin ,{ fontFamily: "RobotoMonoInput" }]}>{ENTEXT.SIGNIN.EMAIL}</Text>
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
                    <Text style={[AppStyle.StyleLogin.textInputLogin,{ fontFamily: "RobotoMonoInput" }]}>{ENTEXT.SIGNIN.PASSWORD}</Text>
                </View>
                <TouchableOpacity style={{position:'absolute',right:55,top:10,backgroundColor:'white'}} onPress={buttonHandler}>
                <Ionicons name={showPassword==false?"eye":"eye-off"} size={24} color="black" />
              </TouchableOpacity>
            </View>
            </View>
          
            <Text style ={[AppStyle.StyleLogin.viewTextFoget,{ fontFamily: "RobotoMonoInput" }]}>{ENTEXT.SIGNIN.FORGOT_PASSWORD}</Text>      
            <TouchableOpacity onPress={onSubmit} style ={AppStyle.StyleLogin.buttonSignIn}>
                <Text style ={[AppStyle.StyleLogin.viewTextButtonSignIn,{ fontFamily: "RobotoMonoInput" }]} >{ENTEXT.SIGNIN.BTN}</Text>
            </TouchableOpacity>   
            
            <Text style ={[AppStyle.StyleLogin.viewTextChooseSignIn,{ fontFamily: "RobotoMonoInput" }]}>{ENTEXT.SIGNIN.OPTION}</Text>
            <View style ={AppStyle.StyleLogin.viewChooseSignInButton}>
                <TouchableOpacity style ={AppStyle.StyleLogin.viewChooseSignInButtonFacebook}>
                    <FontAwesome name="facebook-f" size={24} color="#ffff" />
                </TouchableOpacity>
                <TouchableOpacity style ={AppStyle.StyleLogin.viewChooseSignInButtonGoogle}>
                    <AntDesign name="google" size={24} color="#ffff" />
                </TouchableOpacity>
            </View>
            <View style={AppStyle.StyleLogin.viewNote}>
                <Text style={{ fontSize: 12,fontFamily: "RobotoMonoCheck" }}>{ENTEXT.SIGNIN.NO_ACCOUNT}</Text>
                <Text style={{ fontSize: 12, color: "red",fontFamily: "RobotoMonoCheck" }}>{ENTEXT.SIGNIN.BTN_SIGNUP}</Text>
            </View>
        </View>
      
        </TouchableWithoutFeedback>
     </KeyboardAvoidingView>   
    )
}
export default Login;