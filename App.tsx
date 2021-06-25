import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import reducers from './src/redux/reducers/index.js';
import mySaga from "./src/redux/sagas/index.js";

// const store = createStore(reducers,applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(mySaga);
export default function App() {
  return (
     //<Provider store={store}>
          <View style={styles.container}>
              <Text>Open up App.tsx to start working on your app!</Text>
              <StatusBar style="auto" />
            </View>
     //</Provider>
       
  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
