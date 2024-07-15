import { Text, View } from "react-native"
import TarjetaNivelDetalle from "../DetalleNivel/TarjetaNivelDetalle/TarjetaNivelDetalle"
import { ScrollView } from "react-native-gesture-handler"
import styles from "./DetalleCalentamientoStyles"
import { useRoute } from "@react-navigation/native"

const DetalleCalientamiento = ( {navigation} ) => {
    const route = useRoute(); //  usamos useRoute para acceder a los parámetros pasados a la pantalla (el nivel)
    const { nivel, data } = route.params; 

    return (
        <ScrollView 
        style={styles.container__detalleCalentamiento} 
        contentContainerStyle={styles.container__detalleCalentamiento}
    >
 {
                data &&
                data.data.ejercicios.map((ejercicio)=>(
            <TarjetaNivelDetalle ejercicio={ejercicio} nivel={ejercicio.nombre} tiempo={"15:35"} navigation={navigation} />
                ))

            }


    </ScrollView>
    )
}
export default DetalleCalientamiento