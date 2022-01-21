import React, {useState, useEffect} from 'react';
import StackNavigator from './StackNavigator';
import {LogBox} from "react-native";
LogBox.ignoreAllLogs(); //Ignore log notification by message
import {NavigationContainer, DarkTheme, DefaultTheme} from "@react-navigation/native";
import { AuthProvider } from './hooks/useAuth';

import {Provider as PaperProvider, DarkTheme as PaperDarkTheme} from "react-native-paper";
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './config/themeContext';
import theme from './config/Theme';


export default function App() {
  
  const [mode, setMode] = useState(false);
  useEffect(() => {
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });
  

  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
    
    <NavigationContainer >
      {/* HOC - Higher Order Component */}
      <AuthProvider>
        {/* Passes down the cool Auth stuff to children... */}
      <StackNavigator />
      </AuthProvider>
      
    </NavigationContainer>
    
    </themeContext.Provider>
  
    
  );
}


