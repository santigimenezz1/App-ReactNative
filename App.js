import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PerfilScreen from './screens/PerfilScreen';
import Home from './pages/Home/Home.jsx';

const Tab = createBottomTabNavigator();

function MyTabs() { //Funcion para crear la barra de navegacion y las distintas pantallas de la app
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Esto oculta el encabezado por completo,
        tabBarStyle: { backgroundColor: 'hsl(216, 13%, 8%)', height:60, paddingBottom:5, borderColor:"hsl(216, 9%, 22%)", borderTopWidth:1 }, // Cambia el color de fondo de la barra de navegación a rojo
      }}
    >
      <Tab.Screen name="Ejercicios" component={Home} />
      <Tab.Screen name="Estadisticas" component={PerfilScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />

    </Tab.Navigator>
  );
}

export default function App() { //Creamos el contenedor de la navegacion y le pasamos la funcion con la navegacion y sos pantallas 
  return (
    <NavigationContainer> 
      <MyTabs />
    </NavigationContainer>
  );
}
