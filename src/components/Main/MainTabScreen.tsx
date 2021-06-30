import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const App = () => {
    return (
        <Tab.Navigator>
        </Tab.Navigator>
    )
}