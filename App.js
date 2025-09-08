import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import{ createStackNavigator } from '@react-navigation/stack';
import { PaperProvider} from 'react-native-paper';
import CreateProfile from './src/Screens/CreateProfile';
import ViewProfile from './src/Screens/ViewProfile';  


//importacion de las pantallas
const Stack = createStackNavigator();


  export default function App() {
  return(
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CreateProfile">
          <Stack.Screen name="CreateProfile" component={CreateProfile} options={{title: 'Crear Perfil'}}/>
          <Stack.Screen name="ViewProfile" component={ViewProfile} options={{title: 'Ver Perfil'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )


};