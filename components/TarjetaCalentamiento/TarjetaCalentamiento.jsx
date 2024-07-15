import { Pressable, Text, View} from "react-native"
import styles from "./TarjetaCalentamientoStyles"
import DetalleCalientamiento from "../../pages/Home/DetalleCalentamiento/DetalleCalentamiento"

const TarjetaCalentamiento = ( {navigation, nivel, tiempo} ) => {
    return (
        <View>
        <Pressable onPress={()=>navigation.navigate("DetalleCalentamiento" )} style={styles.container__tarjetaCalentamiento}>
            <Text style={styles.text}>{nivel}</Text>
            <Text style={styles.texth2}>{tiempo} min</Text>
        </Pressable>
        </View>
    )
}
export default TarjetaCalentamiento