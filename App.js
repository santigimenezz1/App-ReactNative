import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './pages/Home/HomeNavigator.js'
import Estadisticas from './pages/Estadisticas/Estadisticas.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';

const Tab = createBottomTabNavigator();

function MyTabs() { //Funcion para crear la barra de navegacion y las distintas pantallas de la app
  return (
    //SE CREA EL NAVEGADOR
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Esto oculta el encabezado por completo,
        tabBarStyle: { backgroundColor: 'hsl(216, 13%, 8%)', height:60, paddingBottom:5, borderColor:"hsl(216, 9%, 22%)", borderTopWidth:1 }, // Cambia el color de fondo de la barra de navegación a rojo
      }}
          //SE CREAN LOS BOTONES PARA CAMBIAR A LAS DISTINTAS PANTALLAS. EN EL HOME COMO QUIERO AGREGAR OTRA NAVEGACION, SE LA PASO AQUI Y LUEGO EN EL COMPONENTE DE ESA NAVEGACION DEFINO CUALES VAN A SER LAS PANTALLAS QUE SE VAN A MOSTAR
    >
      <Tab.Screen name="Ejercicios" component={HomeNavigator} /> 
      <Tab.Screen name="Estadisticas" component={Estadisticas} />
      <Tab.Screen name="Perfil" component={Perfil} />
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
