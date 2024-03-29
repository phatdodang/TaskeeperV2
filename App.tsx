import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
import reducers from "./src/redux/reducers/index";

import Login from "./src/components/Authentication/Login";
import Register from "./src/components/Authentication/Register";
import Verifycation from "./src/components/Authentication/Verifycation";
import LandingPage from "./src/components/Authentication/LandingPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import mySaga from "./src/redux/sagas/index";

const store = createStore(reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator>
          {/* <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ headerShown: false }}
          />  */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="Verifycation"
            component={Verifycation}
            options={{ headerShown: false }}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
    // <Text>{t('hello')}</Text>
    // </View>
  );
}

