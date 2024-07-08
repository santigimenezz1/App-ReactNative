import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/Home.jsx'; // Ajusta la ruta si es necesario
import DetalleNivel from '../DetalleNivel/DetalleNivel.jsx'; // Ajusta la ruta si es necesario

const Stack = createStackNavigator();

const HomeNavigator = ({nivel}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="DetalleNivel" 
        component={DetalleNivel} 
        options={{ title: 'Detalle del NivelASD' }} 
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
