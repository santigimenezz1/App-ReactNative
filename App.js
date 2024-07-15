import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './pages/Home/HomeNavigator.js';
import Perfil from './pages/Perfil/Perfil.jsx';
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import LoginUsuarioNavigator from './pages/LoginUsuarios/LoginUsuariosNavigator.js';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'hsl(216, 13%, 8%)',
          height: 60,
          paddingBottom: 5,
          borderColor: "hsl(216, 9%, 22%)",
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen name="Ejercicios" component={HomeNavigator} options={{
        tabBarIcon : () => <FontAwesome5 name="play" size={20} color="white" />,
        tabBarLabel: () => (
          <Text style={{ 
            color: 'white', 
            fontSize: 12, 
            fontFamily: 'NunitoSans_400Regular',
            letterSpacing:1
          }}>
            Ejercicios
          </Text>
        ),
      }} />
     
      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarIcon: () =><Octicons name="person-fill" size={26} color="white" />,
        tabBarLabel: () => (
          <Text style={{ 
            color: 'white', 
            fontSize: 12, 
            fontFamily: 'NunitoSans_400Regular',
            letterSpacing:1
          }}>
            Perfil
          </Text>
        ),
      }} />

      <Tab.Screen name="Login" component={LoginUsuarioNavigator} options={{
        tabBarIcon: () =><Octicons name="person-fill" size={26} color="white" />,
        tabBarLabel: () => (
          <Text style={{ 
            color: 'white', 
            fontSize: 12, 
            fontFamily: 'NunitoSans_400Regular',
            letterSpacing:1
          }}>
            Login
          </Text>
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [estado, setEstado] = useState(false); // Mover useState aquí
  
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if(!estado){
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }else{
    return (
      <NavigationContainer>
        <LoginUsuarioNavigator />
      </NavigationContainer>
    );
  }

}
