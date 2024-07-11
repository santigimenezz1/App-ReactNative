import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container__tarjetaPerfil:{
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
        zIndex:2,
    }
})
export default styles