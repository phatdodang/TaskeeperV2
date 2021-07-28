import React, { Component, useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Modal,
} from "react-native";
import AppStyle from "../../themes/index";
//@ts-ignore
import imageHeader from "../../assets/images/logoHeader.png";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import success from "../../assets/images/success.png";
import error from "../../assets/images/error.png";
import * as action from "../../redux/actions/index";
import { signInInterface } from "../../redux/actions/Authentication/signIn.actionType";
import { SignUpInterface } from "../../redux/actions/Authentication/signUp.actionType";
import { setItem } from "../../storage/index";
import { APP_CONSTANTS } from "../../constansts/index";
import * as Google from "expo-google-app-auth";
import * as Facebook from 'expo-facebook';
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import {t} from '../../locales';

interface Props {}

let initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [googleToken,setGoogleToken] = useState("");
  const [isShowNoticeSuccess, setIsShowNoticeSuccess] = useState(false);
  const loginSuccess = useSelector(
    (state: any) => state.signInReducer.SigInSuccess
  );
  const loginError = useSelector(
    (state: any) => state.signInReducer.SigInError
  );
  const registerSuccess = useSelector(
    (state: any) => state.signUpReducer.SignUpSuccess
  );
  const registerError = useSelector(
    (state: any) => state.signUpReducer.SignUpError
  );
  const dispatch = useDispatch();
  const buttonHandler = () => {
    setShowPassword((current) => !current);
  };
  useEffect(() => {
    if (loginSuccess.data.access_token != "") {
      setItem(APP_CONSTANTS.TOKEN, loginSuccess.data.access_token);
      console.log("Login successfully");
    } else if (loginError.status != 0) {
      console.log(loginError.message);
    }
    if (registerSuccess.message != "") {
      setIsShowNoticeSuccess(true);
    } else if (registerError.status != 0) {
      setIsShowNoticeSuccess(true);
    }
  }, [loginSuccess, loginError,registerError,registerSuccess]);
  const stackScreenVerify = () =>{
    if(registerError.status!=0){
      null;
    }
    else {navigation.navigate("Verifycation",{
      googleToken:googleToken
    });}
    if(registerError.status!=0&&registerSuccess.message!=""){
      navigation.navigate("Verifycation",{
        googleToken:googleToken
      });
    }
  }
  const [loaded] = useFonts({
    RobotoMonoInput: require("../../assets/fonts/RobotoMono-Regular.ttf"),
    RobotoTitle: require("../../assets/fonts/Roboto-Medium.ttf"),
    RobotoDes: require("../../assets/fonts/Roboto-Regular.ttf"),
    RobotoMonoCheck: require("../../assets/fonts/RobotoMono-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const onSubmit = async (values: any) => {
    let data: signInInterface = {
      loginString: values.email,
      loginInformation: {
        password: values.password,
        googleToken: "",
        facebookToken: "",
      },
    };
    dispatch(action.signIn(data));
  };

  const signInWithFacebookAsync = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '185040733638083',
      });
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        fetch(`https://graph.facebook.com/me?fields=id,first_name,email,last_name,picture.height(500)&access_token=${token}`)
          .then(response => response.json())
          .then(data => console.log(JSON.stringify(data)))
      } else {
        console.log("eeeeeeeeeee")
      }
    } catch (e) {
      alert(e);
    }
  }

  const signInWithGoogleAsync = async () => {
    const allowed = {
      uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
      lowers: "qwertyuiopasdfghjklzxcvbnm",
      numbers: "1234567890",
      symbols: "!@#$%^&*",
    };
    const getRandomCharFromString = (str: string) =>
      str.charAt(Math.floor(Math.random() * str.length));
    let pwd = "";
    pwd += getRandomCharFromString(allowed.uppers); //pwd will have at least one upper
    pwd += getRandomCharFromString(allowed.lowers); //pwd will have at least one lower
    pwd += getRandomCharFromString(allowed.numbers); //pwd will have at least one number
    pwd += getRandomCharFromString(allowed.symbols); //pwd will have at least one symbolo
    for (let i = pwd.length; i < 8; i++)
      pwd += getRandomCharFromString(Object.values(allowed).join("")); //fill the rest of the pwd with random characters
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "268124184529-djvbkb9rcn1jh8uo8q11t5okg6hs8g80.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {
        setGoogleToken(result.accessToken?.toString());
        const data: SignUpInterface = {
          firstName: result.user.givenName,
          lastName: result.user.familyName,
          email: result.user.email,
          dayOfBirth: 1,
          monthOfBirth: 1,
          yearOfBirth: 1,
          phoneNumber: {
            ISD_CodeId: "",
            phoneNumber: "",
          },
          loginInformation: {
            password: pwd,
            googleToken: result.accessToken?.toString(),
            facebookToken: "",
          },
          avatar:result.user.photoUrl,
          gender: "other",
        };
        console.log(data);
        dispatch(action.signUp(data));
      } else {
        console.log(result);
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(loginError.message);
  console.log(loginSuccess.message);

  return (
    <KeyboardAvoidingView
      style={AppStyle.StyleCommon.container}
      behavior="position"
    >
      <TouchableWithoutFeedback
        style={AppStyle.StyleCommon.container}
        onPress={Keyboard.dismiss}
      >
        <View style={[{ alignItems: "center" }]}>
        <Modal
            transparent={true}
            visible={isShowNoticeSuccess}
            animationType="slide"
            style={AppStyle.StyleRegister.positionModalNotice}
          >
            <View style={AppStyle.StyleRegister.itemPositionModal}>
              <View style={AppStyle.StyleRegister.setModal}>
                <Image
                  source={registerSuccess.message != "" ? success : error}
                  style={{ height: 50, width: 50 }}
                ></Image>
                <Text>
                  {registerSuccess.message != ""
                    ? registerSuccess.message
                    : registerError.message}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setIsShowNoticeSuccess(false);
                    stackScreenVerify;
                  }}
                  style={[AppStyle.StyleRegister.styleButtonModal,{backgroundColor: registerSuccess.message != "" ? "green" : "red",}]}
                >
                  <Text style={AppStyle.StyleRegister.styleTextButton}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={AppStyle.StyleLogin.circle1}></View>
          <View style={AppStyle.StyleLogin.circle2}></View>
          <View style={AppStyle.StyleLogin.viewTitle}>
            <Text
              style={[
                AppStyle.StyleLogin.titleSignIn,
                { fontFamily: "RobotoMonoInput" },
              ]}
            >
              {t("SIGNIN.TITLE")}
            </Text>
            <Text
              style={[
                AppStyle.StyleLogin.titleDetail,
                { fontFamily: "RobotoMonoInput" },
              ]}
            >
              {t("SIGNIN.TITLEDESC")}
            </Text>
          </View>
          <View style={AppStyle.StyleLogin.viewImage}>
            <Image
              source={imageHeader}
              style={AppStyle.StyleLogin.imageHeader}
            ></Image>
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={onSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                <View style={AppStyle.StyleLogin.viewLoginInput}>
                  <View style={AppStyle.StyleLogin.viewInput}>
                    <TextInput
                      style={AppStyle.StyleLogin.input}
                      underlineColorAndroid="transparent"
                      multiline={true}
                      placeholder="Enter email"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                    ></TextInput>
                    {errors.email && (
                      <View style={AppStyle.StyleRegister.viewValidation}>
                        <Text style={{ color: "red" }}>{errors.email}</Text>
                      </View>
                    )}
                    <View style={AppStyle.StyleLogin.viewTextInput}>
                      <Text
                        style={[
                          AppStyle.StyleLogin.textInputLogin,
                          { fontFamily: "RobotoMonoInput" },
                        ]}
                      >
                        {t("SIGNIN.EMAIL")}
                      </Text>
                    </View>
                  </View>

                  <View style={AppStyle.StyleLogin.viewInput}>
                    <TextInput
                      style={AppStyle.StyleLogin.input}
                      underlineColorAndroid="transparent"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry={showPassword}
                      placeholder="Enter password"
                    ></TextInput>
                    {errors.password && (
                      <View style={AppStyle.StyleRegister.viewValidation}>
                        <Text style={{ color: "red" }}>{errors.password}</Text>
                      </View>
                    )}
                    <View style={AppStyle.StyleLogin.viewTextInput}>
                      <Text
                        style={[
                          AppStyle.StyleLogin.textInputLogin,
                          { fontFamily: "RobotoMonoInput" },
                        ]}
                      >
                        {t("SIGNIN.PASSWORD")}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        right: 55,
                        top: 10,
                        backgroundColor: "white",
                      }}
                      onPress={buttonHandler}
                    >
                      <Ionicons
                        name={showPassword == false ? "eye" : "eye-off"}
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text
                  style={[
                    AppStyle.StyleLogin.viewTextFoget,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  {t("SIGNIN.FORGOT_PASSWORD")}
                </Text>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={AppStyle.StyleLogin.buttonSignIn}
                >
                  <Text
                    style={[
                      AppStyle.StyleLogin.viewTextButtonSignIn,
                      { fontFamily: "RobotoMonoInput" },
                    ]}
                  >
                    {t("SIGNIN.BTN")}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          <Text
            style={[
              AppStyle.StyleLogin.viewTextChooseSignIn,
              { fontFamily: "RobotoMonoInput" },
            ]}
          >
            {t("SIGNIN.OPTION")}
          </Text>
          <View style={AppStyle.StyleLogin.viewChooseSignInButton}>
            <TouchableOpacity
              style={AppStyle.StyleLogin.viewChooseSignInButtonFacebook}
              onPress={signInWithFacebookAsync}
            >
              <FontAwesome name="facebook-f" size={24} color="#ffff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={AppStyle.StyleLogin.viewChooseSignInButtonGoogle}
              onPress={signInWithGoogleAsync}
            >
              <AntDesign name="google" size={24} color="#ffff" />
            </TouchableOpacity>
          </View>
          <View style={AppStyle.StyleLogin.viewNote}>
            <Text style={{ fontSize: 12, fontFamily: "RobotoMonoCheck" }}>
            {t("SIGNIN.NO_ACCOUNT")}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "red",
                fontFamily: "RobotoMonoCheck",
              }}
            >
              {t("SIGNIN.BTN_SIGNUP")}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Login;

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .required("Password is required"),
});
