
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginUsuarios from "./LoginUsuarios.jsx";
import InicioSesion from "./InicioSesion/InicioSesion.jsx";
import Registro from "./Registro/Registro.jsx";

const Stack = createStackNavigator();

const LoginUsuarioNavigator = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator>
                <Stack.Screen name="principal" component={LoginUsuarios} options={{ headerShown: false }}/>
                <Stack.Screen name="InicioSesion" component={InicioSesion} />
                <Stack.Screen name="Registro" component={Registro} />
            </Stack.Navigator>
        </View>
    );
}
export default LoginUsuarioNavigator;