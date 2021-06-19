/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { SignUp } from "./screens"
import Tabs from './navigation/tabs'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}
const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer theme={theme}>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'SignUp'}
            >
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name='Home' component={Tabs}/>
        </Stack.Navigator>
         
    </NavigationContainer>

  )
}

export default App;
