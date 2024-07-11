import { Pressable, Text, View } from "react-native"
import styles from "./BotonLoginUsuario"

const BotonLoginUsuario = ( {navigation} ) => {
    return (
        <View style={styles.container__botonesRegistro}>
        <Pressable onPress={()=>navigation.navigate("Registro")} style={styles.botonRegistroUsuario}>
            <Text style={styles.botonText}>
                Registrarse
            </Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate("InicioSesion")} style={styles.botonLoginUsuario}>
            <Text style={styles.botonText}>
                Iniciar sesión
            </Text>
        </Pressable>
        </View>
    )
}
export default BotonLoginUsuario