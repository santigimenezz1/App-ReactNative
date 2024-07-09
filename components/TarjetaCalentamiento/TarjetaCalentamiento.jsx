import { Pressable, Text, View} from "react-native"
import styles from "./TarjetaCalentamientoStyles"
import DetalleCalientamiento from "../../pages/Home/DetalleCalentamiento/DetalleCalentamiento"

const TarjetaCalentamiento = ( {navigation} ) => {
    return (
        <View>
        <Pressable onPress={()=>navigation.navigate("DetalleCalentamiento" )} style={styles.container__tarjetaCalentamiento}>
            <Text style={styles.text}>Calientamiento/Enfriamiento</Text>
            <Text style={styles.texth2}>17:00 min</Text>
        </Pressable>
        </View>
    )
}
export default TarjetaCalentamiento