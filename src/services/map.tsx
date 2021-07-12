import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {Language} from './api';
interface Props {

}

//@ts_config
const PhoneCode = (props) => {
          return(
            <TouchableOpacity onPress={()=>{props.stackScreen(props.item.codeValue+" "+props.item.national,props.item.codeId)}} >
                <Text style={{fontSize:14}}>{props.item.codeValue} {props.item.national}</Text>
            </TouchableOpacity>
          )
};
export default PhoneCode;

