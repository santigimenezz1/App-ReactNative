import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './pages/Home/HomeNavigator.js';
import Estadisticas from './pages/Estadisticas/Estadisticas.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

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
      <Tab.Screen name="Ejercicios" component={HomeNavigator} />
      <Tab.Screen name="Estadisticas" component={Estadisticas} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
}
