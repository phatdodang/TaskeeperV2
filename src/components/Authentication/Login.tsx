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
  Alert,
} from "react-native";
import AppStyle from "../../themes/index";
//@ts-ignore
import imageHeader from "../../assets/images/logoHeader.png";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import ENTEXT from "../../locales/en";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions/index";
import { signInInterface } from "../../redux/actions/Authentication/signIn.actionType";
import { setItem, } from "../../storage/index";
import { APP_CONSTANTS } from "../../constansts/index";
import { Formik } from "formik";
import * as yup from "yup";

interface Props {}

let initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [showPassword, setshowPassword] = useState(true);
  const loginSuccess = useSelector((state: any) => state.signInReducer.SigInSuccess);
  const loginError = useSelector((state: any) => state.signInReducer.SigInError);
  const dispatch = useDispatch();
  const buttonHandler = () => {
    setshowPassword((current) => !current);
  };
  useEffect(() => {
    if (loginSuccess.data.access_token != "") {
      setItem(APP_CONSTANTS.TOKEN, loginSuccess.data.access_token);
      console.log("Login successfully");
    }else if(loginError.status != 0){
       console.log(loginError.message);
    }
  }, [loginSuccess,loginError]);
  const [loaded] = useFonts({
    RobotoMonoInput: require("../../assets/fonts/RobotoMono-Regular.ttf"),
    RobotoTitle: require("../../assets/fonts/Roboto-Medium.ttf"),
    RobotoDes: require("../../assets/fonts/Roboto-Regular.ttf"),
    RobotoMonoCheck: require("../../assets/fonts/RobotoMono-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const onSubmit = async (values:any) => {
    let data: signInInterface = {
      loginString: values.email,
      loginInformation: {
        password:values.password,
        googleToken: "",
        facebookToken: "",
      },
    };
    dispatch(action.signIn(data));
  };

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
          <View style={AppStyle.StyleLogin.circle1}></View>
          <View style={AppStyle.StyleLogin.circle2}></View>
          <View style={AppStyle.StyleLogin.viewTitle}>
            <Text
              style={[
                AppStyle.StyleLogin.titleSignIn,
                { fontFamily: "RobotoMonoInput" },
              ]}
            >
              {ENTEXT.SIGNIN.TITLE}
            </Text>
            <Text
              style={[
                AppStyle.StyleLogin.titleDetail,
                { fontFamily: "RobotoMonoInput" },
              ]}
            >
              {ENTEXT.SIGNIN.TITLEDESC}
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
                        {ENTEXT.SIGNIN.EMAIL}
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
                        {ENTEXT.SIGNIN.PASSWORD}
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
                  {ENTEXT.SIGNIN.FORGOT_PASSWORD}
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
                    {ENTEXT.SIGNIN.BTN}
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
            {ENTEXT.SIGNIN.OPTION}
          </Text>
          <View style={AppStyle.StyleLogin.viewChooseSignInButton}>
            <TouchableOpacity
              style={AppStyle.StyleLogin.viewChooseSignInButtonFacebook}
            >
              <FontAwesome name="facebook-f" size={24} color="#ffff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={AppStyle.StyleLogin.viewChooseSignInButtonGoogle}
            >
              <AntDesign name="google" size={24} color="#ffff" />
            </TouchableOpacity>
          </View>
          <View style={AppStyle.StyleLogin.viewNote}>
            <Text style={{ fontSize: 12, fontFamily: "RobotoMonoCheck" }}>
              {ENTEXT.SIGNIN.NO_ACCOUNT}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "red",
                fontFamily: "RobotoMonoCheck",
              }}
            >
              {ENTEXT.SIGNIN.BTN_SIGNUP}
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
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
