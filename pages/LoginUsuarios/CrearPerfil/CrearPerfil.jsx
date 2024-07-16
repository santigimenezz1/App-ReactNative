import { Pressable, Text, TextInput, View } from "react-native"
import styles from "./CrearPerfil.js"
import { useRoute } from "@react-navigation/native";
import { useContext, useState } from "react";
import { CartContext } from "../../../Context/Context.jsx";

const CrearPerfil = ( {navigation} ) => {
    const { test, setTest } = useContext(CartContext);
    const [usuarioRegisto, setUsuarioRegistro] = useState({
        nombre: "",
        pais: "",
        numeroCamiseta: "",
        posicion: "",
        clubFavorito: ""
      });

      const EnviarRegistroUsuario = () => {
        setTest(
          {
            ...test,
            nombre: usuarioRegisto.nombre,
            pais: usuarioRegisto.pais,
            numeroCamiseta: usuarioRegisto.numeroCamiseta,
            pisicion: usuarioRegisto.posicion,
            clubFavorito: usuarioRegisto.clubFavorito
          }
    
        )
        navigation.navigate("Cargar imagen", { usuarioRegisto });
      };
    

    const route = useRoute(); //  usamos useRoute para acceder a los parámetros pasados a la pantalla (el nivel)


    console.log({test})
    return (
        <View style={styles.container__crearPerfil}>
            <View style={styles.container__input}>
            <TextInput onChangeText={(text)=>setUsuarioRegistro({...usuarioRegisto, nombre: text})} style={styles.input} placeholderTextColor="white" placeholder="Nombre"></TextInput>
            <TextInput onChangeText={(text)=>setUsuarioRegistro({...usuarioRegisto, pais: text})} style={styles.input} placeholderTextColor="white" placeholder="Pais"></TextInput>
            <TextInput onChangeText={(text)=>setUsuarioRegistro({...usuarioRegisto, numeroCamiseta: text})}style={styles.input} placeholderTextColor="white" placeholder="Numero de camiseta"></TextInput>
            <TextInput onChangeText={(text)=>setUsuarioRegistro({...usuarioRegisto, posicion: text})} style={styles.input} placeholderTextColor="white" placeholder="Posición"></TextInput>
            <TextInput onChangeText={(text)=>setUsuarioRegistro({...usuarioRegisto, clubFavorito: text})} style={styles.input} placeholderTextColor="white" placeholder="Club favorito"></TextInput>
            </View>
            <Pressable onPress={()=>EnviarRegistroUsuario()} style={styles.botonCrearPerfil}>
                <Text style={styles.text}>Continuar</Text>
            </Pressable>
        </View>
    )
}
export default CrearPerfil