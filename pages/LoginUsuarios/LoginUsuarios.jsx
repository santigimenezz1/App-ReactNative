import { Image, View } from "react-native"
import styles from "./LoginUsuarios.js"
import BotonLoginUsuario from "../../components/BotonLoginUsuario/BotonLoginUsuario.jsx"

const LoginUsuarios = ( {navigation} ) => {
    return (
        <View style={styles.container__loginUsuarios}>
            <Image width={350} height={350} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720826352/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/Deep_Blue_z2bytv.png"}}></Image>
            <View>
                <BotonLoginUsuario navigation={navigation}  />
            </View>
        </View>
    )
}
export default LoginUsuarios