import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get("window");
//file chứa các style sheet chung dành cho toàn components

const StyleCommon = StyleSheet.create({
    body: {
       position:"relative"
    },
    circle1: {
        position:'absolute',
        width:200,
        height:200,
        left:0,
        top:-109,
        backgroundColor:'rgba(173, 210, 201, 0.71)',
        borderRadius:100
    },
    circle2: {
        position:'absolute',
        width:200,
        height:200,
        left:-100,
        top:-9,
        backgroundColor:'rgba(173, 210, 201, 0.71)',
        borderRadius:100
    },
    viewTitle:{
        alignItems:'center',
        flexDirection:"column",
        width:"100%",
        justifyContent:'center',
        height:height*0.18,
        marginTop:40
    },
    titleSignIn:{
       fontWeight:"700",
       fontSize:36, 
       color:"#000000"       
    },
    titleDetail:{
        fontWeight:"500",
        fontSize:16,
    },
    viewImage:{
        alignItems:'center',
        width:"100%",
        justifyContent:'center',
    },
    imageHeader:{
        height:230,
        width:"75%",
        borderRadius:30
    },
    viewTextFoget:{
        color:"#5EA3A3",
        fontWeight:"500",
        fontSize:14,
        marginBottom:20
    },
    buttonSignIn:{
        width:256,
        height:49,
        backgroundColor:"#2D7474",
        alignItems:'center',
        justifyContent:"center",
        borderRadius:12,
        marginBottom:20
    },
    viewTextButtonSignIn:{
        fontWeight:"500",
        fontSize:18,
        color:"#ffff"
    },
    input: {
        borderWidth: 1,
        marginLeft: 10,
        width: "80%",
        height:49,
        borderRadius: 5,
        borderColor: "black",
        paddingLeft: 15,
        paddingRight: 5,
    },
    viewInput:{
        width:width,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
       
    },
    viewTextInput:{
        position:'absolute',
        left:70,
        top:-10,
        backgroundColor:'white',
    },
    viewLoginInput:{
        alignItems:'center',
        width:"100%",
        justifyContent:'center',
        marginTop:10
    },
    textInputLogin:{
        fontWeight:"500",
        fontSize:18,
        color:"#000000"
    },
    viewTextChooseSignIn:{
        color:"#000000",
        fontWeight:'400',
        fontSize:12,
        marginBottom:20
    },
    viewChooseSignIn:{
        alignItems:'center',
        width:"100%",
        justifyContent:'center',
       
       
    },
    viewChooseSignInButton:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"70%",
        marginBottom:20
       
    },
    viewChooseSignInButtonFacebook:{
        width: 105,
        height: 39,
        backgroundColor:"#256ABA",
        borderRadius:24,
        alignItems:"center",
        justifyContent:"center"
    },
    viewChooseSignInButtonGoogle:{
        width: 105,
        height: 39,
        backgroundColor:"#EA4335",
        borderRadius:24,
        alignItems:"center",
        justifyContent:"center",
        
    },
    viewNote:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:15
    },
   
});
export default StyleCommon;