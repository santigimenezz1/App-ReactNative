import { Text, View } from "react-native"
import styles from "./TarjetaConsejos"
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';




const TarjetaConsejos = () => {
    return (
        <View style={styles.container__tarjetaConsejos}>
            <Text style={styles.tittle}>Consejos</Text>
            <View style={styles.container__consejos}>
            <FontAwesome name="calendar-check-o" size={24} color="hsl(199, 76%, 28%)" />  
                      <View style={{width:"80%"}}>
            <Text style={{color:"white", letterSpacing:1, fontSize:13,fontFamily: 'NunitoSans_400Regular',}}>Entrena de 10-30 minutos por dia para obtener los mejores resultados. La constancia es fundamental</Text>
            </View>
            </View>

            <View style={styles.container__consejos}>
            <AntDesign name="clockcircleo" size={24} color="hsl(199, 76%, 28%)" />           
             <View style={{width:"80%"}}>
            <Text style={{color:"white", letterSpacing:1, fontSize:13,fontFamily: 'NunitoSans_400Regular',}}>Empieza despacio, dominalo y luego tu decides la velocidad</Text>
            </View>
            </View>
            <View style={styles.container__consejos}>
            <FontAwesome6 name="person-running" size={24} color="hsl(199, 76%, 28%)" />   
                     <View style={{width:"80%"}}>
            <Text style={{color:"white", letterSpacing:1, fontSize:13,fontFamily: 'NunitoSans_400Regular',}}>No te sales ejercicios para mejorar por igual diferentes habilidades</Text>
            </View>
            </View>

            

        </View>
    )
}
export default TarjetaConsejos