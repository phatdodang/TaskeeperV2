import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const StyleVerifycation = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        position: 'relative'
    },
    header: {
        height: 57,
        alignItems: 'center',
        padding: 20,
        margin: 20,
    },
    logoverify: {
        fontSize: 36,
        lineHeight: 47,
        fontStyle: 'normal',
        fontWeight: 'bold',
    },
    img: {
        alignItems: 'center',
        justifyContent: 'center',
        left: 30,
        margin: 20,
        top: 30
    },
    text: {
        width: 210,
        height: 47,
        top: 30,
        left: 100,
        marginLeft: 10,
        alignItems: 'center'
    },
    body: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 40,
        marginBottom: -40
    },
    textinput: {
        fontWeight: '600',
        alignContent: 'center',
        alignSelf: 'center',
        paddingLeft: 22,
        fontSize: 20,
        height: 56,
        width: 62,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    footer: {
        position: 'relative',
        top: 100,
        alignItems: 'center',
    },
    button: {
        width: 260,
        height: 49,
        borderRadius: 15,
        borderColor: "#2D7474",
        borderWidth: 1,
        backgroundColor: "#2D7474",
        alignItems: 'center',
    },
    textbutton: {
        fontSize: 20,
        lineHeight: 26,
        fontStyle: 'normal',
        color: "#FFFFFF",
        position: 'absolute',
        width: 64,
        height: 23,
        margin: 7
    },
    containermodal: {
        backgroundColor: '#000000aa',
         flex: 1,
          justifyContent: 'center', 
          alignItems: 'center'
    },
    formmodal:{
        backgroundColor: '#faf9f9', 
        borderRadius: 20,
        height: 403, 
        width: "70%", 
        justifyContent: 'center',
         alignItems: 'center'
    },
    textmodal:{
        width:200,
        height:43,
        alignItems:'center',
    },
    text1:{
        fontSize: 18, 
        fontWeight: 'bold', 
        lineHeight: 20
    },
    text2:{
        fontSize: 16, 
        lineHeight: 20
    },
    buttonmodal:{
        margin: 20,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonmodal1:{
        width: 150,
        height: 28,
        borderRadius: 10,
        borderColor: "#ADD2C9",
        borderWidth: 1,
        backgroundColor: "#ADD2C9",
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textbuttonmodal:{
        fontSize: 16,
        lineHeight: 30,
        fontStyle: 'normal',
        color: "#FFFFFF",
        position: 'absolute',
        width: 64,
        height: 40, padding: 5, paddingLeft: 15
    }
})
export default StyleVerifycation;