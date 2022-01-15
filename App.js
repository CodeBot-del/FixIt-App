import React from 'react';
import StackNavigator from './StackNavigator';
import {LogBox} from "react-native";
LogBox.ignoreAllLogs(); //Ignore log notification by message
import {NavigationContainer, DarkTheme} from "@react-navigation/native";
import { AuthProvider } from './hooks/useAuth';

import {Provider as PaperProvider, DarkTheme as PaperDarkTheme} from "react-native-paper";

export default function App() {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <PaperProvider theme={PaperDarkTheme}>
    <NavigationContainer theme={DarkTheme}>
      {/* HOC - Higher Order Component */}
      <AuthProvider>
        {/* Passes down the cool Auth stuff to children... */}
      <StackNavigator />
      </AuthProvider>
      
    </NavigationContainer>
    </PaperProvider>
    
  );
}


