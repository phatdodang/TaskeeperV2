import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  CheckBox,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from "react-native";
import AppStyle from "../../themes/index";
import { RadioButton } from "react-native-paper";
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons'; 


export const Register = () => {
  const [gender, setgender] = useState("male");
  const [isSelected, setSelection] = useState(false);
  const [showPassword, setshowPassword] = useState(true);
  const [password,setpassword]=useState("");
  const buttonHandler = () => {
    setshowPassword(current => !current)
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
  return (
    <TouchableWithoutFeedback
      style={AppStyle.StyleCommon.container}
      onPress={Keyboard.dismiss}
    >
      <ScrollView>
        <View style={AppStyle.StyleCommon.container}>
          <View style={AppStyle.StyleRegister.circle1}></View>
          <View style={AppStyle.StyleRegister.circle2}></View>

          <View style={{ flexDirection: "column" }}>
            <View style={AppStyle.StyleRegister.positionTitle}>
              <Text
                style={[
                  AppStyle.StyleRegister.title,
                  { fontFamily: "RobotoTitle" },
                ]}
              >
                Let's get started
              </Text>
            </View>
            <View style={AppStyle.StyleRegister.positionText}>
              <Text style={{ fontFamily: "RobotoDes", fontSize: 14 }}>
                Please enter your information in the form below
              </Text>
            </View>
          </View>

          <View style={AppStyle.StyleRegister.body}>
            <View style={AppStyle.StyleRegister.viewInput}>
              <TextInput
                style={AppStyle.StyleRegister.input}
                underlineColorAndroid="transparent"
                multiline={true}
              ></TextInput>
              <View style={AppStyle.StyleRegister.viewTextInput}>
                <Text
                  style={[
                    AppStyle.StyleRegister.fontText,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  First Name
                </Text>
              </View>
            </View>

            <View style={AppStyle.StyleRegister.viewInput}>
              <TextInput
                style={AppStyle.StyleRegister.input}
                underlineColorAndroid="transparent"
                multiline={true}
              ></TextInput>
              <View style={AppStyle.StyleRegister.viewTextInput}>
                <Text
                  style={[
                    AppStyle.StyleRegister.fontText,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  Last Name
                </Text>
              </View>
            </View>

            <View style={AppStyle.StyleRegister.viewInput}>
              <TextInput
                style={AppStyle.StyleRegister.input}
                underlineColorAndroid="transparent"
                multiline={true}
              ></TextInput>
              <View style={AppStyle.StyleRegister.viewTextInput}>
                <Text
                  style={[
                    AppStyle.StyleRegister.fontText,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  Email
                </Text>
              </View>
            </View>

            <View style={AppStyle.StyleRegister.viewInput}>
              <TextInput
                style={AppStyle.StyleRegister.input}
                underlineColorAndroid="transparent"
                value={password}
                onChangeText={(password)=>setpassword(password)}
                secureTextEntry={showPassword}
              ></TextInput>
              <View style={AppStyle.StyleRegister.viewTextInput}>
                <Text
                  style={[
                    AppStyle.StyleRegister.fontText,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  Password
                </Text>
              </View>
              <TouchableOpacity style={{position:'absolute',right:55,top:5,backgroundColor:'white'}} onPress={buttonHandler}>
                <Ionicons name={showPassword==false?"eye":"eye-off"} size={24} color="black" />
              </TouchableOpacity>
            </View>

            <View style={AppStyle.StyleRegister.viewInput}>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={[AppStyle.StyleRegister.input, { width: "15%" }]}
                  underlineColorAndroid="transparent"
                  multiline={true}
                ></TextInput>
                <TextInput
                  style={[AppStyle.StyleRegister.input, { width: "63%" }]}
                  underlineColorAndroid="transparent"
                  multiline={true}
                ></TextInput>
              </View>
              <View
                style={[AppStyle.StyleRegister.viewTextInput, { left: 140 }]}
              >
                <Text
                  style={[
                    AppStyle.StyleRegister.fontText,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  Phone Number
                </Text>
              </View>
            </View>

            <View style={AppStyle.StyleRegister.viewInput}>
              <TextInput
                style={AppStyle.StyleRegister.input}
                underlineColorAndroid="transparent"
                multiline={true}
              ></TextInput>
              <View style={AppStyle.StyleRegister.viewTextInput}>
                <Text
                  style={[
                    AppStyle.StyleRegister.fontText,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  Date of Birth
                </Text>
              </View>
            </View>

            <View style={AppStyle.StyleRegister.viewSex}>
              <View style={{ flexDirection: "row" }}>
                <RadioButton
                  value="male"
                  status={gender === "male" ? "checked" : "unchecked"}
                  onPress={() => setgender("male")}
                />
                <Text
                  style={[
                    AppStyle.StyleRegister.viewTextSex,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  Male
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <RadioButton
                  value="female"
                  status={gender === "female" ? "checked" : "unchecked"}
                  onPress={() => setgender("female")}
                />
                <Text
                  style={[
                    AppStyle.StyleRegister.viewTextSex,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  Female
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <RadioButton
                  value="other"
                  status={gender === "other" ? "checked" : "unchecked"}
                  onPress={() => setgender("other")}
                />
                <Text
                  style={[
                    AppStyle.StyleRegister.viewTextSex,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  Other
                </Text>
              </View>
            </View>

            <View style={AppStyle.StyleRegister.viewAccept}>
              <View style={{ marginTop: -7, marginRight: 10 }}>
                <CheckBox value={isSelected} onValueChange={setSelection} />
              </View>
              <Text style={{ fontSize: 12, fontFamily: "RobotoMonoCheck" }}>
                Agree with{" "}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "orange",
                  fontFamily: "RobotoMonoCheck",
                }}
              >
                Terms & Conditions
              </Text>
            </View>

            <View style={AppStyle.StyleRegister.viewButton}>
              <View style={AppStyle.StyleRegister.buttonSignIn}>
                <Text
                  style={[
                    AppStyle.StyleRegister.viewTextButtonSignIn,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  SIGN UP
                </Text>
              </View>
            </View>

            <View style={AppStyle.StyleRegister.viewSignIn}>
              <Text style={{ fontSize: 12, fontFamily: "RobotoMonoCheck" }}>
                Already have an account?{" "}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                  fontFamily: "RobotoMonoCheck",
                }}
              >
                Sign in
              </Text>
            </View>
          </View>

          <View style={AppStyle.StyleRegister.circle3}></View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
