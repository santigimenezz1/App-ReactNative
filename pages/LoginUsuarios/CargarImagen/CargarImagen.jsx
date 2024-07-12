const { View, Text, Image, Pressable } = require("react-native")
import styles from "./CargarImagen"

const CargarImagen = () => {
 return (
    <View style={styles.container__cargarImagen}>
        <View style={styles.container__imagen}>
            <Image style={styles.imagen}  height={300} width={200} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720798272/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/kide.php_sqosp3.png"}}></Image>
        </View>
        <Pressable style={styles.botonCargar}>
                <Text style={styles.text}>Cargar</Text>
            </Pressable>
            <Pressable style={styles.botonOmitir}>
                <Text style={styles.text}>Omitir</Text>
            </Pressable>

    </View>
 )
}
export default CargarImagen