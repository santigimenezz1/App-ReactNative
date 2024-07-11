import { Image, Text, View } from "react-native"
import styles from "./TarjetaPerfil.js"

const TarjetaPerfil = () => {
    return (
        <View style={styles.container__tarjetaPerfil}>
            <View style={styles.container__info}>
                <View style={{width:"100%", height:210, borderWidth:4, borderColor:"black", display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={{borderWidth:1, borderColor:"red", display:"flex", alignItems:"center", width:110}}>
                    <Text style={{fontSize:30}}>3</Text>
                    <Text style={{fontSize:30}}>CMD</Text>
                    <Image width={50} height={50} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720655416/espana_woqndn.png"}}></Image>
                    <Image width={50} height={50} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720655671/valencia_rboqia.png"}}></Image>

                    </View>
                    <Image width={200} height={"100%"} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720655011/images_maavxo.jpg"}}></Image>
                </View>

            </View>
          <Image width={"100%"} height={"100%"} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720653433/WEB-RARE-GOLD-T23_samshn.png"}}></Image>
        </View>
    )
}
export default TarjetaPerfil