import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    
    input:{
        color:"red",
        borderWidth:2,
        borderColor:"hsl(161, 51%, 35%)",
        width: RFValue(220),
        borderRadius:12,
        color:"white",
        paddingLeft:10
    },
    button:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"hsl(161, 51%, 35%)",
        padding:8,
        borderRadius:12,
    },
  
    container:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        gap:10,
        padding:10
       
    }
})
export default styles