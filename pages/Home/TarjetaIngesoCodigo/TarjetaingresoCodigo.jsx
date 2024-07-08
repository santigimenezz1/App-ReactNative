import { Button, Text, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import styles from "./TarjetaIngresoCodigoStyles"

const TarjetaIngresoCodigo = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="codigo" style={styles.input}
  />
            <TouchableOpacity style={styles.button}>
                <Text style={{color:"white", fontWeight:"bold"}}>Continuar</Text>
                </TouchableOpacity>
        </View>
    )
}
export default TarjetaIngresoCodigo