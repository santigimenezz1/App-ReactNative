import { Pressable, Text, View} from "react-native"
import styles from "./TarjetaCalentamientoStyles"

const TarjetaCalentamiento = () => {
    return (
        <View>
        <Pressable onPress={()=>console.log("hola")} style={styles.container__tarjetaCalentamiento}>
            <Text style={styles.text}>Calientamiento/Enfriamiento</Text>
            <Text style={styles.texth2}>17:00 min</Text>
        </Pressable>
        </View>
    )
}
export default TarjetaCalentamiento