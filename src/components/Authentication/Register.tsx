import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  CheckBox,
  Modal,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppStyle from "../../themes/index";
import { RadioButton } from "react-native-paper";
import { useFonts } from "expo-font";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { BarPasswordStrengthDisplay } from "react-native-password-strength-meter";
import { getLanguage, Language } from "../../services/api";
import success from "../../assets/images/success.png";
import error from "../../assets/images/error.png";
import PhoneCode from "../../services/map";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions/index";
import { SignUpInterface } from "../../redux/actions/Authentication/signUp.actionType";
import DropDownPicker from "react-native-dropdown-picker";
import { Formik } from "formik";
import * as yup from "yup";
import { SignUpType } from "./types/signUp.Type";
import { useNavigation } from "@react-navigation/native";
import App from "../../../App";
interface Props {}

let initialValues: SignUpType = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  phonenumber: "",
};

const Register: React.FC<Props> = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const registerSuccess = useSelector(
    (state: any) => state.signUpReducer.SignUpSuccess
  );
  const registerError = useSelector(
    (state: any) => state.signUpReducer.SignUpError
  );

  const [openDay, setOpenDay] = useState(false);
  const [valueDay, setValueDay] = useState(1);
  const [itemsDay, setItemsDay] = useState([
    { label: "1", value: 1 },
    { label: "2", value: 2 },
  ]);
  const [openMonth, setOpenMonth] = useState(false);
  const [valueMonth, setValueMonth] = useState(1);
  const [itemsMonth, setItemsMonth] = useState([
    { label: "1", value: 1 },
    { label: "2", value: 2 },
  ]);
  const [openYear, setOpenYear] = useState(false);
  const [valueYear, setValueYear] = useState(1999);
  const [itemsYear, setItemsYear] = useState([
    { label: "1999", value: 1999 },
    { label: "2000", value: 2000 },
  ]);
  const [gender, setGender] = useState("male");
  const [codeId, setCodeId] = useState("84");
  const [isShowNoticeSuccess, setIsShowNoticeSuccess] = useState(false);
  const [isSelected, setIsSelection] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [language, setLanguage] = useState<Language[]>([]);
  const [isSelectedModal, setIsSelectedModal] = useState(false);
  const lastNameTextInput = React.createRef<TextInput>();
  const emailTextInput = React.createRef<TextInput>();
  const passwordTextInput = React.createRef<TextInput>();
  const phoneNumberTextInput = React.createRef<TextInput>();
  const [phoneCode, setPhoneCode] = useState("+84 🇻🇳");
  const laco: { codeId: number; national: string }[] = [
    { codeId: 1, national: "🇺🇸" },
    { codeId: 44, national: "🇬🇧" },
    { codeId: 55, national: "🇧🇷" },
    { codeId: 84, national: "🇻🇳" },
    { codeId: 93, national: "🇹🇯" },
  ];

  const buttonHandler = () => {
    setIsShowPassword((current: boolean) => !current);
  };

  const buttonShowSelect = () => {
    setIsSelectedModal((current: boolean) => !current);
  };
  const buttonShowPhoneCode = (phoneCode: string, codeId: string) => {
    setPhoneCode(phoneCode);
    setIsSelectedModal(false);
    setCodeId(codeId);
  };

  const getDataLanguage = async () => {
    const result = await getLanguage();
    await setLanguage(result);
  };

  useEffect(() => {
    getDataLanguage();
    if (registerSuccess.message != "") {
      setIsShowNoticeSuccess(true);
    } else if (registerError.status != 0) {
      setIsShowNoticeSuccess(true);
    }
  }, [registerSuccess, registerError]);
  const stackScreenVerify = () => {
    if (registerError.status !== 0 && registerSuccess.message !== "") {
      navigation.navigate("Verifycation", {
        googleToken: null,
      });
    }
    if (registerError.status != 0) {
      null;
    } else {
      navigation.navigate("Verifycation", {
        googleToken: null,
      });
    }
  };

  const onSubmit = (values) => {
    const data: SignUpInterface = {
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
      dayOfBirth: valueDay,
      monthOfBirth: valueMonth,
      yearOfBirth: valueYear,
      phoneNumber: {
        ISD_CodeId: codeId,
        phoneNumber: values.phonenumber,
      },
      loginInformation: {
        password: values.password,
        googleToken: "",
        facebookToken: "",
      },
      avatar:
        "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-9/58643479_1268513746647886_5941743867085717504_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8jVGPIu32h0AX9UGOjZ&_nc_oc=AQmYbVqwYIA0M9Uh0e5jrc-EluKIt1EMSjjOk0G9QGbVIcN66CDIOw6Wy4vltSnZV9OiudBn-E64GOIIYUCnxO1d&tn=xP7DCHtuHFwvDuoK&_nc_ht=scontent.fdad1-1.fna&oh=ec3ef037a4a0a72ad33fe16df0b9adef&oe=61235822",
      gender: gender,
    };
    dispatch(action.signUp(data));
  };

  const [loaded] = useFonts({
    RobotoMonoInput: require("../../assets/fonts/RobotoMono-Regular.ttf"),
    RobotoTitle: require("../../assets/fonts/Roboto-Medium.ttf"),
    RobotoDes: require("../../assets/fonts/Roboto-Regular.ttf"),
    RobotoMonoCheck: require("../../assets/fonts/RobotoMono-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  for (let i = 0; i < laco.length; i++) {
    language.map((items: Language) =>
      items.codeId == laco[i].codeId
        ? (items.national = laco[i].national)
        : items
    );
  }
  return (
    <TouchableWithoutFeedback
      style={AppStyle.StyleCommon.container}
      onPress={Keyboard.dismiss}
    >
      <ScrollView>
        <View style={AppStyle.StyleCommon.container}>
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
                    stackScreenVerify();
                  }}
                  style={[
                    AppStyle.StyleRegister.styleButtonModal,
                    {
                      backgroundColor:
                        registerSuccess.message != "" ? "green" : "red",
                    },
                  ]}
                >
                  <Text style={AppStyle.StyleRegister.styleTextButton}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={{ height: 200 }}>
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
          </View>

          <View style={AppStyle.StyleRegister.body}>
            <Formik
              initialValues={initialValues}
              validationSchema={registerValidationSchema}
              onSubmit={onSubmit}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                  <View style={AppStyle.StyleRegister.viewInput}>
                    <TextInput
                      style={[
                        AppStyle.StyleRegister.input,
                        { borderColor: errors.firstname ? "red" : "black" },
                      ]}
                      underlineColorAndroid="transparent"
                      onChangeText={handleChange("firstname")}
                      onBlur={handleBlur("firstname")}
                      value={values.firstname}
                      onSubmitEditing={() => {
                        if (lastNameTextInput.current) {
                          lastNameTextInput.current.focus();
                        }
                      }}
                      returnKeyType="next"
                      blurOnSubmit={false}
                    ></TextInput>
                    {errors.firstname && (
                      <View style={AppStyle.StyleRegister.viewValidation}>
                        <Text style={{ color: "red" }}>{errors.firstname}</Text>
                      </View>
                    )}
                    <View style={AppStyle.StyleRegister.viewTextInput}>
                      <Text
                        style={
                          errors.firstname
                            ? [
                                AppStyle.StyleRegister.fontText,
                                { fontFamily: "RobotoMonoInput", color: "red" },
                              ]
                            : [
                                AppStyle.StyleRegister.fontText,
                                {
                                  fontFamily: "RobotoMonoInput",
                                  color: "black",
                                },
                              ]
                        }
                      >
                        First Name
                      </Text>
                    </View>
                  </View>

                  <View style={AppStyle.StyleRegister.viewInput}>
                    <TextInput
                      onSubmitEditing={() => {
                        if (emailTextInput.current) {
                          emailTextInput.current.focus();
                        }
                      }}
                      ref={lastNameTextInput}
                      style={
                        errors.lastname
                          ? [
                              AppStyle.StyleRegister.input,
                              { borderColor: "red" },
                            ]
                          : AppStyle.StyleRegister.input
                      }
                      underlineColorAndroid="transparent"
                      onChangeText={handleChange("lastname")}
                      onBlur={handleBlur("lastname")}
                      value={values.lastname}
                      returnKeyType="next"
                    ></TextInput>
                    {errors.lastname && (
                      <View style={AppStyle.StyleRegister.viewValidation}>
                        <Text style={{ color: "red" }}>{errors.lastname}</Text>
                      </View>
                    )}
                    <View style={AppStyle.StyleRegister.viewTextInput}>
                      <Text
                        style={
                          errors.lastname
                            ? [
                                AppStyle.StyleRegister.fontText,
                                { fontFamily: "RobotoMonoInput", color: "red" },
                              ]
                            : [
                                AppStyle.StyleRegister.fontText,
                                {
                                  fontFamily: "RobotoMonoInput",
                                  color: "black",
                                },
                              ]
                        }
                      >
                        Last Name
                      </Text>
                    </View>
                  </View>

                  <View style={AppStyle.StyleRegister.viewInput}>
                    <TextInput
                      onSubmitEditing={() => {
                        if (passwordTextInput.current) {
                          passwordTextInput.current.focus();
                        }
                      }}
                      ref={emailTextInput}
                      style={
                        errors.email
                          ? [
                              AppStyle.StyleRegister.input,
                              { borderColor: "red" },
                            ]
                          : AppStyle.StyleRegister.input
                      }
                      underlineColorAndroid="transparent"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      returnKeyType="next"
                    ></TextInput>
                    {errors.email && (
                      <View style={AppStyle.StyleRegister.viewValidation}>
                        <Text style={{ color: "red" }}>{errors.email}</Text>
                      </View>
                    )}
                    <View style={AppStyle.StyleRegister.viewTextInput}>
                      <Text
                        style={
                          errors.email
                            ? [
                                AppStyle.StyleRegister.fontText,
                                { fontFamily: "RobotoMonoInput", color: "red" },
                              ]
                            : [
                                AppStyle.StyleRegister.fontText,
                                {
                                  fontFamily: "RobotoMonoInput",
                                  color: "black",
                                },
                              ]
                        }
                      >
                        Email
                      </Text>
                    </View>
                  </View>

                  <View
                    style={[
                      AppStyle.StyleRegister.viewInput,
                      { marginBottom: 10 },
                    ]}
                  >
                    <TextInput
                      style={
                        errors.password
                          ? [
                              AppStyle.StyleRegister.input,
                              { borderColor: "red" },
                            ]
                          : AppStyle.StyleRegister.input
                      }
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => {
                        if (phoneNumberTextInput.current) {
                          phoneNumberTextInput.current.focus();
                        }
                      }}
                      ref={passwordTextInput}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry={isShowPassword}
                      returnKeyType="next"
                    ></TextInput>

                    <View style={AppStyle.StyleRegister.viewTextInput}>
                      <Text
                        style={
                          errors.password
                            ? [
                                AppStyle.StyleRegister.fontText,
                                { fontFamily: "RobotoMonoInput", color: "red" },
                              ]
                            : [
                                AppStyle.StyleRegister.fontText,
                                {
                                  fontFamily: "RobotoMonoInput",
                                  color: "black",
                                },
                              ]
                        }
                      >
                        Password
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        right: 55,
                        top: 5,
                        backgroundColor: "white",
                      }}
                      onPress={buttonHandler}
                    >
                      <Ionicons
                        name={isShowPassword == false ? "eye" : "eye-off"}
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                    <View
                      style={
                        AppStyle.StyleRegister.viewBarPasswordStrengthDisplay
                      }
                    >
                      <BarPasswordStrengthDisplay
                        password={values.password}
                        width={
                          AppStyle.StyleRegister.viewBarPasswordStrengthDisplay
                            .width
                        }
                      />
                    </View>
                    {errors.password && (
                      <View style={AppStyle.StyleRegister.viewValidation}>
                        <Text style={{ color: "red" }}>{errors.password}</Text>
                      </View>
                    )}
                  </View>

                  <View style={AppStyle.StyleRegister.viewInput}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        onPress={buttonShowSelect}
                        style={
                          isSelectedModal === false
                            ? [AppStyle.StyleRegister.input, { width: "20%" }]
                            : [
                                AppStyle.StyleRegister.input,
                                {
                                  width: "20%",
                                  borderBottomLeftRadius: 0,
                                  borderBottomRightRadius: 0,
                                  borderBottomColor: "grey",
                                },
                              ]
                        }
                      >
                        <AntDesign
                          name="down"
                          size={16}
                          color="black"
                          style={{
                            position: "absolute",
                            right: 2,
                            top: 10,
                            fontWeight: "bold",
                          }}
                        />
                        {phoneCode && (
                          <Text
                            style={AppStyle.StyleRegister.textShowPhoneCode}
                          >
                            {phoneCode}
                          </Text>
                        )}
                      </TouchableOpacity>
                      {isSelectedModal && (
                        <View
                          style={[
                            AppStyle.StyleRegister.input,
                            AppStyle.StyleRegister.viewFlatList,
                          ]}
                        >
                          <FlatList
                            data={language}
                            renderItem={({ item, index }) => {
                              return (
                                <PhoneCode
                                  stackScreen={buttonShowPhoneCode}
                                  item={item}
                                  index={index}
                                ></PhoneCode>
                              );
                            }}
                            keyExtractor={(item) => item.codeId.toString()}
                          ></FlatList>
                        </View>
                      )}

                      <TextInput
                        style={
                          errors.phonenumber
                            ? [
                                AppStyle.StyleRegister.input,
                                { borderColor: "red", width: "58%" },
                              ]
                            : [AppStyle.StyleRegister.input, { width: "58%" }]
                        }
                        underlineColorAndroid="transparent"
                        onChangeText={handleChange("phonenumber")}
                        onBlur={handleBlur("phonenumber")}
                        value={values.phonenumber}
                        keyboardType="numeric"
                        returnKeyType="done"
                        ref={phoneNumberTextInput}
                      ></TextInput>
                    </View>
                    {errors.phonenumber && (
                      <View style={AppStyle.StyleRegister.viewValidation}>
                        <Text style={{ color: "red" }}>
                          {errors.phonenumber}
                        </Text>
                      </View>
                    )}
                    <View
                      style={[
                        AppStyle.StyleRegister.viewTextInput,
                        { left: 160 },
                      ]}
                    >
                      <Text
                        style={
                          errors.phonenumber
                            ? [
                                AppStyle.StyleRegister.fontText,
                                { fontFamily: "RobotoMonoInput", color: "red" },
                              ]
                            : [
                                AppStyle.StyleRegister.fontText,
                                {
                                  fontFamily: "RobotoMonoInput",
                                  color: "black",
                                },
                              ]
                        }
                      >
                        Phone Number
                      </Text>
                    </View>
                  </View>

                  <View
                    style={[
                      AppStyle.StyleRegister.viewInput,
                      {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "80%",
                        marginLeft: 10,
                        marginBottom: 10,
                      },
                    ]}
                  >
                    {/* <TextInput
                style={AppStyle.StyleRegister.input}
                underlineColorAndroid="transparent"
                multiline={true}
              ></TextInput> */}
                    <DropDownPicker
                      style={{ height: 40, borderRadius: 5 }}
                      open={openDay}
                      value={valueDay}
                      items={itemsDay}
                      setOpen={setOpenDay}
                      setValue={setValueDay}
                      setItems={setItemsDay}
                      placeholder=""
                      containerStyle={{ width: "29%", zIndex: 1 }}
                    />
                    <DropDownPicker
                      open={openMonth}
                      value={valueMonth}
                      items={itemsMonth}
                      setOpen={setOpenMonth}
                      setValue={setValueMonth}
                      setItems={setItemsMonth}
                      placeholder=""
                      style={{ height: 40, borderRadius: 5 }}
                      containerStyle={{ width: "29%" }}
                    />
                    <DropDownPicker
                      open={openYear}
                      value={valueYear}
                      items={itemsYear}
                      setOpen={setOpenYear}
                      setValue={setValueYear}
                      setItems={setItemsYear}
                      placeholder=""
                      style={{ height: 40, borderRadius: 5 }}
                      containerStyle={{ width: "37%" }}
                    />
                    {/* <View style={AppStyle.StyleRegister.viewTextInput}>
                <Text
                  style={[
                    AppStyle.StyleRegister.fontText,
                    { fontFamily: "RobotoMonoInput" },
                  ]}
                >
                  Date of Birth
                </Text>
              </View> */}
                  </View>

                  <View style={AppStyle.StyleRegister.viewSex}>
                    <View style={{ flexDirection: "row" }}>
                      <RadioButton
                        value="male"
                        status={gender === "male" ? "checked" : "unchecked"}
                        onPress={() => setGender("male")}
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
                        onPress={() => setGender("female")}
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
                        onPress={() => setGender("other")}
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
                      <CheckBox
                        value={isSelected}
                        onValueChange={setIsSelection}
                      />
                    </View>
                    <Text
                      style={{ fontSize: 12, fontFamily: "RobotoMonoCheck" }}
                    >
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

                  <TouchableOpacity
                    // onPress={onSubmit}
                    onPress={handleSubmit}
                    style={AppStyle.StyleRegister.viewButton}
                  >
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
                  </TouchableOpacity>

                  <View style={AppStyle.StyleRegister.viewSignIn}>
                    <Text
                      style={{ fontSize: 12, fontFamily: "RobotoMonoCheck" }}
                    >
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
                </>
              )}
            </Formik>
          </View>
          <View>
            <View style={AppStyle.StyleRegister.circle3}></View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const registerValidationSchema = yup.object().shape({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  phonenumber: yup.string().required("Phone Number is Required"),
});
