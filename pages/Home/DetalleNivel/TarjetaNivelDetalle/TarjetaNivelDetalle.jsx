import { Image, Pressable, Text, View } from "react-native"
import styles from './TarjetaNivelDetalleStyles.js'
import { useContext } from "react"
import { CartContext } from "../../../../Context/Context.jsx"

const TarjetaNivelDetalle = ( {nivel, tiempo, navigation, ejercicio} ) => {
    const {closed, setClosed, userRegistro} = useContext(CartContext)

    const navegarDetalleVideo = () => {
        if(closed){
            navigation.navigate("DetalleNivelVideo", {ejercicio})
        }else{
            alert("Desbloquear con codigo de acceso")
        }
    }
    
    return (
        <View style={styles.container__tarjetaNivelDetalle}>
        <Pressable onPress={()=>navegarDetalleVideo()} style={styles.container__tarjetaNivel}>
            <View>
            <Text style={styles.text}>{nivel}</Text>
            <Text style={styles.texth2}>{tiempo}</Text>
            </View>
            {
                !closed &&
            <View style={styles.container__bloqueado}> 
            <View style={{width:"100%",display:"flex",alignItems:"center"}}>
            <Image  width={22} height={22} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720478069/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/cerrar_qrawqr.png"}}></Image>
            </View>
            <Text style={{color:"white",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Bloqueado</Text>
            </View>
            }
        </Pressable>
        </View>
    )
}
export default TarjetaNivelDetalle