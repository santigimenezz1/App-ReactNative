import { Text, View } from "react-native"
import styles from "../TarjetaNivel/TarjetaNivel.js"
const TarjetaNivel = ( {nivel, tiempo} ) => {
    return (
        <View style={styles.container__tarjetaNivel}>
            <Text style={styles.text}>{nivel}</Text>
            <Text style={styles.texth2}>{tiempo}</Text>
        </View>
    )
}
export default TarjetaNivel