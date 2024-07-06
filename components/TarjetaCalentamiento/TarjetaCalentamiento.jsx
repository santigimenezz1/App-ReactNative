import { Text, View } from "react-native"
import styles from "./TarjetaCalentamientoStyles"

const TarjetaCalentamiento = () => {
    return (
        <View style={styles.container__tarjetaCalentamiento}>
            <Text style={styles.text}>Calientamiento/Enfriamiento</Text>
            <Text style={styles.texth2}>17:00 min</Text>
        </View>
    )
}
export default TarjetaCalentamiento