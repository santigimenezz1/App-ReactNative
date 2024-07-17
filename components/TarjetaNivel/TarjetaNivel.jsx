import { Image, Pressable, Text, View } from "react-native"
import styles from "../TarjetaNivel/TarjetaNivel.js"
import { addDoc, collection, getDoc } from 'firebase/firestore'
import { db } from "../../firebaseConfig.js"
import niveles from "../../niveles.js"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/Context.jsx"


const TarjetaNivel = ( {data, nivel, tiempo, navigation} ) => {
    const [estado, setEstado] = useState()
    const {closed, setClosed, userRegistro} = useContext(CartContext)


    //FUNCION PARA AGREGAR LOS NIVELES A LA BASE DE DATOS EN FIREBASE
    const test = (navigation, niveles) => {
          //AÑADIMOS EL DOCUMENTO A UNA COLECCION, ESPECIFICO LA BASE DE DATOS Y EL NOMBRE DE LA COLLECCION, LUEGO EL OBJETO QUE QUIERO AGREGAR A ESA COLECCION.
          niveles.map((nivel)=>(
              addDoc(collection(db, "niveles"), nivel)        
          ))
    }

    console.log(closed)
 
    return ( //AQUI LE DIGO QUE ME ENVIE A LA PANTALLA DETALLENIVEL Y ADEMAS LE PASO EL USEPARAMS ()
        <View>
        <Pressable onPress={()=>navigation.navigate("DetalleNivel", {nivel, data})} style={styles.container__tarjetaNivel}>
            <View>
            <Text style={styles.text}>{nivel}</Text>
            <Text style={styles.texth2}>{tiempo} min</Text>
            </View>
            {
                !closed &&
            <View style={styles.container__candado}>
            <Image width={22} height={22} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720478069/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/cerrar_qrawqr.png"}}></Image>
            <Text style={styles.text__bloqueado}>Bloqueado</Text>
            </View>
            }
        </Pressable>

        </View>
    )
}
export default TarjetaNivel