import { Pressable, Text, View } from "react-native"
import styles from "../TarjetaNivel/TarjetaNivel.js"
const TarjetaNivel = ( {nivel, tiempo, navigation} ) => {
    return (
        <View>
        <Pressable onPress={()=>navigation.navigate("DetalleNivel")} style={styles.container__tarjetaNivel}>
            <Text style={styles.text}>{nivel}</Text>
            <Text style={styles.texth2}>{tiempo}</Text>
        </Pressable>

        </View>
    )
}
export default TarjetaNivel