import { Image, View } from "react-native"
import styles from "./LoginUsuarios.js"
import BotonLoginUsuario from "../../components/BotonLoginUsuario/BotonLoginUsuario.jsx"

const LoginUsuarios = () => {
    return (
        <View style={styles.container__loginUsuarios}>
            <Image width={300} height={300} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720717586/Black_and_Gold_Foil_Football_Club_Logo_y3ifqq.png"}}></Image>
            <View>
                <BotonLoginUsuario />
            </View>
        </View>
    )
}
export default LoginUsuarios