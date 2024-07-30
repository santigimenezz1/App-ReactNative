import { Button, Image, Text, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import styles from "./TarjetaIngresoCodigoStyles"
import { useContext, useState } from "react"
import { CartContext } from "../../../Context/Context"

const TarjetaIngresoCodigo = ( {CerrarModal, codigoCorrecto, setCodigoCorrecto} ) => {
    const {closed, setClosed, userRegistro} = useContext(CartContext)
    const [text, setText] = useState("")

    const guardarText = (text) => {
        setText(text)
        setCodigoCorrecto(false)
    }

   const validacionCodigo = () => {
     if(text === userRegistro.codigoAcceso) {
        setClosed(true)
        console.log(closed)
        CerrarModal()

     }else{
        setClosed(false)
        setCodigoCorrecto(true)
     }
   }

   console.log(text)
   console.log(closed)
    return (
        <View style={styles.container}>
            <Image width={25} height={30} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720473576/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/contrasena_ddqgg9.png"}}></Image>
            <TextInput onChangeText={(text)=>guardarText(text)} placeholder="Codigo" placeholderTextColor="hsl(0, 0%, 74%)" style={styles.input}/>
            <TouchableOpacity onPress={()=>validacionCodigo()} style={styles.button}>
                <Text style={{color:"white", fontWeight:"bold",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Continuar</Text>
                </TouchableOpacity>
        </View>
    )
}
export default TarjetaIngresoCodigo