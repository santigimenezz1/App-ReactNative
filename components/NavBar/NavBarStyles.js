import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container__navBar:{
        width:"100%",
        padding:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    container__navBar__titulo:{
     display:"flex",
     flexDirection:"row",
     width:"50%",
     gap:10,
     alignItems:"center",
   
    },
    container__navBar__titulo__text:{
        color:"white",
        fontSize:RFValue(18),
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:2
    }
})

export default styles