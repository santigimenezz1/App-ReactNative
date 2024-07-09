import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container__tarjetaNivel:{
        width:"100%",
        padding:12,
        paddingLeft:20,
        borderRadius:10,
        marginTop:10,
        backgroundColor: "hsl(215, 18%, 13%)",
        height:RFValue(95),
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

    },
    text:{
        color:"white",
        fontSize: RFValue(25), // Ajusta el tamaño de la fuente de manera responsiva
        fontWeight:"bold",
    },
    texth2:{
        color:"white",
        fontSize: RFValue(14), // Ajusta el tamaño de la fuente de manera responsiva
    }
})
export default styles