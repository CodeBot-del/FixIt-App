import React from 'react';
import StackNavigator from './StackNavigator';
import {NavigationContainer} from "@react-navigation/native";
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
    <NavigationContainer>
      {/* HOC - Higher Order Component */}
      <AuthProvider>
        {/* Passes down the cool Auth stuff to children... */}
      <StackNavigator />
      </AuthProvider>
      
    </NavigationContainer>
    
  );
}


