import { Pressable, Text, TextInput, View } from "react-native"
import styles from "./CrearPerfil.js"

const CrearPerfil = ( {navigation} ) => {
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