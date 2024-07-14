import { Image, Pressable, Text, View } from "react-native"
import styles from "../TarjetaNivel/TarjetaNivel.js"
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../firebaseConfig.js"


const TarjetaNivel = ( {nivel, tiempo, navigation} ) => {
    const test = (navigation) => {
          //AÑADIMOS EL DOCUMENTO A UNA COLECCION, ESPECIFICO LA BASE DE DATOS Y EL NOMBRE DE LA COLLECCION, LUEGO EL OBJETO QUE QUIERO AGREGAR A ESA COLECCION.
        addDoc(collection(db, "nueva_coleccion"), {
            campo1: "valor1",
            campo2: "valor2"
          });        
          navigation.navigate("DetalleNivel", {nivel})
    }

   
    return ( //AQUI LE DIGO QUE ME ENVIE A LA PANTALLA DETALLENIVEL Y ADEMAS LE PASO EL USEPARAMS ()
        <View>
        <Pressable onPress={()=>test(navigation)} style={styles.container__tarjetaNivel}>
            <View>
            <Text style={styles.text}>{nivel}</Text>
            <Text style={styles.texth2}>{tiempo}</Text>
            </View>
            <View style={styles.container__candado}>
            <Image width={22} height={22} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720478069/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/cerrar_qrawqr.png"}}></Image>
            <Text style={styles.text__bloqueado}>Bloqueado</Text>
            </View>
        </Pressable>

        </View>
    )
}
export default TarjetaNivel