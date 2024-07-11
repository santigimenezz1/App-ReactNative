import { Pressable, Text, View } from "react-native"
import styles from "./BotonLoginUsuario"

const BotonLoginUsuario = () => {
    return (
        <View style={styles.container__botonesRegistro}>
        <Pressable style={styles.botonRegistroUsuario}>
            <Text style={styles.botonText}>
                Registrarse
            </Text>
        </Pressable>
        <Pressable style={styles.botonLoginUsuario}>
            <Text style={styles.botonText}>
                Iniciar sesión
            </Text>
        </Pressable>
        </View>
    )
}
export default BotonLoginUsuario