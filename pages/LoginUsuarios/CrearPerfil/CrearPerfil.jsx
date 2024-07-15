import { Pressable, Text, TextInput, View } from "react-native"
import styles from "./CrearPerfil.js"
import { useRoute } from "@react-navigation/native";

const CrearPerfil = ( {navigation} ) => {
    const route = useRoute(); //  usamos useRoute para acceder a los parámetros pasados a la pantalla (el nivel)
    const {usuarioRegisto} = route.params; 

    console.log({usuarioRegisto})
    return (
        <View style={styles.container__crearPerfil}>
            <View style={styles.container__input}>
            <TextInput style={styles.input} placeholderTextColor="white" placeholder="Nombre"></TextInput>
            <TextInput style={styles.input} placeholderTextColor="white" placeholder="Pais"></TextInput>
            <TextInput style={styles.input} placeholderTextColor="white" placeholder="Numero de camiseta"></TextInput>
            <TextInput style={styles.input} placeholderTextColor="white" placeholder="Posición"></TextInput>
            <TextInput style={styles.input} placeholderTextColor="white" placeholder="Club favorito"></TextInput>
            </View>
            <Pressable onPress={()=>navigation.navigate("Cargar imagen")} style={styles.botonCrearPerfil}>
                <Text style={styles.text}>Continuar</Text>
            </Pressable>
        </View>
    )
}
export default CrearPerfil