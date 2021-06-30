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
        height:height*0.2,
        width:"100%",
        justifyContent:'center'
        
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
        height:height*0.25,
        width:"100%",
        justifyContent:'center',
        
    },
    imageHeader:{
        height:300,
        width:350,
       borderRadius:30
    },
   
    viewForgot:{
        alignItems:'center',
        height:height*0.01,
        width:"100%",
        justifyContent:'center',
        
    },
    viewTextFoget:{
        color:"#5EA3A3",
        fontWeight:"500",
        fontSize:14,

    },
    viewButton:{
        alignItems:'center',
        height:height*0.1,
        width:"100%",
        justifyContent:'center',
        marginTop:15
    },
    buttonSignIn:{
        width:256,
        height:49,
        backgroundColor:"#2D7474",
        alignItems:'center',
        justifyContent:"center",
        borderRadius:12
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
        height:height*0.20,
        width:"100%",
        justifyContent:'center',
        marginTop:30
    },
    textInputLogin:{
        fontWeight:"500",
        fontSize:18,
        color:"#000000"
    },
    viewTextChooseSignIn:{
        color:"#000000",
        fontWeight:'400',
        fontSize:12
    },
    viewChooseSignIn:{
        alignItems:'center',
        width:"100%",
        justifyContent:'center',
        marginTop:15,
       
    },
    viewChooseSignInButton:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"70%",
        height:height*0.1,
        marginTop:40
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
        marginBottom:30 ,
        height:height*0.2,
    }
});
export default StyleCommon;