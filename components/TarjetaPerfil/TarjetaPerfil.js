import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container__tarjetaPerfil:{
        borderWidth:1,
        borderColor:"red",
        width:"100%",
        height:600, 
        position:"relative", 
        display:"flex",
        alignItems:"center",
        justifyContent:"center" 
    },
    container__info:{
        width:"100%",
        height:400,
        position:"absolute",
        borderWidth:6,
        borderColor:"green",
        zIndex:2,
    }
})
export default styles