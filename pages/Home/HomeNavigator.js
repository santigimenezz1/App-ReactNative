import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/Home.jsx'; // Ajusta la ruta si es necesario
import DetalleNivel from './DetalleNivel/DetalleNivel.jsx'
import DetalleCalientamiento from '../DetalleCalentamiento/DetalleCalentamiento.jsx';

const Stack = createStackNavigator();


const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: "hsl(215, 18%, 13%)",
          height:130
        },
        headerTintColor: '#fff', // Color del texto del encabezado
    }}
>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="DetalleNivel" component={DetalleNivel} options={{ title: 'Detalle del NivelASD' }} />
      <Stack.Screen name="DetalleCalentamiento" component={DetalleCalientamiento} options={{ title: 'Calentamiento/Enfriamiento' }} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
