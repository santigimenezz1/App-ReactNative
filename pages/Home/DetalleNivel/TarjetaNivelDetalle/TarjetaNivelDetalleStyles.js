import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container__tarjetaNivelDetalle:{
 
    },
    container__tarjetaNivel:{
        width:"100%",
        padding:12,
        paddingLeft:20,
        borderRadius:10,
        backgroundColor: "hsl(215, 18%, 13%)",
        height:RFValue(80),
        borderWidth:1,
        borderColor:"hsl(161, 51%, 35%)",

    },
    text:{
        color:"white",
        fontSize: RFValue(20), // Ajusta el tamaño de la fuente de manera responsiva
        fontWeight:"bold",
    },
    texth2:{
        color:"white",
        fontSize: RFValue(12), // Ajusta el tamaño de la fuente de manera responsiva
    }
})
export default styles