import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container__tarjetaCalentamiento:{
        width:"100%",
        height:100,
        borderWidth:1,
        padding:10,
        borderRadius:10,
        marginTop:10,
        backgroundColor: "hsl(199, 76%, 28%)",
    
    },
    text:{
        color:"white",
        fontSize: RFValue(20), // Ajusta el tamaño de la fuente de manera responsiva
        fontWeight:"bold",
        fontFamily: 'NunitoSans_700Bold',
        letterSpacing:1

    },
    texth2:{
        color:"white",
        fontSize: RFValue(15),
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:1

         // Ajusta el tamaño de la fuente de manera responsiva
    }
})
export default styles