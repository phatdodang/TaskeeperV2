import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppStyle from "../../themes/index";

interface Props {}

interface State {
    text:string;
}

export class Register extends Component<Props, State>{
    constructor(props: Props) {
        super(props); 
        this.state = {
          text: "Hello anh em",
        };
    }
    render(){
        return(
            <View style={AppStyle.StyleCommon.container}>
                <Text>{this.state.text}</Text>
            </View>
        )
    }
}
export default Register;