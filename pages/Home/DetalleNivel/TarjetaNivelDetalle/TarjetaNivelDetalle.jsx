import { Pressable, Text, View } from "react-native"
import styles from './TarjetaNivelDetalleStyles.js'

const TarjetaNivelDetalle = ( {nivel, tiempo} ) => {
    return (
        <View style={styles.container__tarjetaNivelDetalle}>
        <Pressable style={styles.container__tarjetaNivel}>
            <Text style={styles.text}>{nivel}</Text>
            <Text style={styles.texth2}>{tiempo}</Text>
        </Pressable>
        </View>
    )
}
export default TarjetaNivelDetalle