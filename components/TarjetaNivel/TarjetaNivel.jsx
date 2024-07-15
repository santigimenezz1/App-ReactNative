import { Image, Pressable, Text, View } from "react-native"
import styles from "../TarjetaNivel/TarjetaNivel.js"
import { addDoc, collection, getDoc } from 'firebase/firestore'
import { db } from "../../firebaseConfig.js"
import niveles from "../../niveles.js"
import { useState } from "react"


const TarjetaNivel = ( {nivel, tiempo, navigation} ) => {
    const [estado, setEstado] = useState()


    //FUNCION PARA AGREGAR LOS NIVELES A LA BASE DE DATOS EN FIREBASE
    const test = (navigation, niveles) => {
          //AÑADIMOS EL DOCUMENTO A UNA COLECCION, ESPECIFICO LA BASE DE DATOS Y EL NOMBRE DE LA COLLECCION, LUEGO EL OBJETO QUE QUIERO AGREGAR A ESA COLECCION.
          niveles.map((nivel)=>(
              addDoc(collection(db, "niveles"), nivel)        
          ))
          navigation.navigate("DetalleNivel", {nivel})
    }
 
    return ( //AQUI LE DIGO QUE ME ENVIE A LA PANTALLA DETALLENIVEL Y ADEMAS LE PASO EL USEPARAMS ()
        <View>
        <Pressable onPress={()=>navigation.navigate("DetalleNivel", {nivel})} style={styles.container__tarjetaNivel}>
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