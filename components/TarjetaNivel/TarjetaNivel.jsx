import { Image, Pressable, Text, View } from "react-native"
import styles from "../TarjetaNivel/TarjetaNivel.js"
const TarjetaNivel = ( {nivel, tiempo, navigation} ) => {
    return ( //AQUI LE DIGO QUE ME ENVIE A LA PANTALLA DETALLENIVEL Y ADEMAS LE PASO EL USEPARAMS ()
        <View>
        <Pressable onPress={()=>navigation.navigate("DetalleNivel", {nivel} )} style={styles.container__tarjetaNivel}>
            <View>
            <Text style={styles.text}>{nivel}</Text>
            <Text style={styles.texth2}>{tiempo}</Text>
            </View>
            <View>
            <Image width={30} height={30} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720478069/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/cerrar_qrawqr.png"}}></Image>
            </View>
        </Pressable>

        </View>
    )
}
export default TarjetaNivel