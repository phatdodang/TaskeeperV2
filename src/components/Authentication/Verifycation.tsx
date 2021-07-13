import React, { Component, useState, useEffect, useRef } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import AppStyle from "../../themes/index";
import { useFonts } from "expo-font";

const Verifycation = () => {
    const textInput2 = React.createRef<TextInput>();
    const textInput3 = React.createRef<TextInput>();
    const textInput4 = React.createRef<TextInput>();
    return (

        <View style={AppStyle.StyleVerifycation.container}>
            <View style={AppStyle.StyleVerifycation.header}>
                <Text style={[AppStyle.StyleVerifycation.logoverify]}>Verification</Text>
            </View>
            <View style={AppStyle.StyleVerifycation.img}>
                <Image source={require('./../../assets/images/logoverify.png')} />
            </View>
            <View style={AppStyle.StyleVerifycation.text}>
                <Text style={{ fontSize: 16 }}>Please enter the code was sent in your email</Text>
            </View>
            <View style={AppStyle.StyleVerifycation.body}>
                <TextInput
                    autoFocus={true}
                    keyboardType="numeric"
                    maxLength={1}
                    style={AppStyle.StyleVerifycation.textinput}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        if (textInput2.current) {
                            textInput2.current.focus();
                        }
                    }}
                />
                <TextInput
                    ref={textInput2}
                    autoFocus={true}
                    keyboardType="numeric"
                    maxLength={1}
                    style={AppStyle.StyleVerifycation.textinput}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        if (textInput3.current) {
                            textInput3.current.focus();
                        }
                    }}
                />
                <TextInput
                    ref={textInput3}
                    keyboardType="numeric"
                    maxLength={1}
                    style={AppStyle.StyleVerifycation.textinput}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        if (textInput4.current) {
                            textInput4.current.focus();
                        }
                    }}
                />
                <TextInput
                    ref={textInput4}
                    keyboardType="numeric"
                    maxLength={1}
                    style={AppStyle.StyleVerifycation.textinput}
                />
            </View>
            <TouchableOpacity style={{ alignItems: 'center', top: 50, margin: 20, marginBottom: -20 }}>
                <View >
                    <Text style={{ fontSize: 16, color: "#5EA3A3" }}>Don’t receive the code</Text>
                </View>
            </TouchableOpacity>
            <View style={AppStyle.StyleVerifycation.footer}>
                <TouchableOpacity style={AppStyle.StyleVerifycation.button}>
                    <Text style={AppStyle.StyleVerifycation.textbutton}>SEND</Text>
                </TouchableOpacity>
            </View>
            <Modal transparent={true}
                visible={true}
                animationType='slide'
                style={{ justifyContent: 'center', alignItems: 'center' }}
            >

                <View style={AppStyle.StyleVerifycation.containermodal} >
                    <View style={AppStyle.StyleVerifycation.formmodal}>
                        <View style={{ marginTop: -20 }}>
                            <Image source={require('./../../assets/images/modalverify.png')} />
                        </View>
                        <View style={[AppStyle.StyleVerifycation.textmodal,{marginTop:20}]}>
                            <Text style={AppStyle.StyleVerifycation.text1}>Now you are registered</Text>
                        </View>
                        <View style={[AppStyle.StyleVerifycation.textmodal,{marginTop:5}]}>
                            <Text style={AppStyle.StyleVerifycation.text2}>Enjoy our application</Text>
                        </View>
                        <View style={AppStyle.StyleVerifycation.buttonmodal}>
                            <View style={AppStyle.StyleVerifycation.buttonmodal1}>
                                <Text style={AppStyle.StyleVerifycation.textbuttonmodal}>Start</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    )
}


export default Verifycation;