import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container__home:{
        display:"flex",
         alignItems:"center",
          backgroundColor:"hsl(216, 13%, 8%)",
           position:"relative",
           height:"100%",  
    },
    main:{
        width:"95%",
        height:"100%",
        padding:5,
        flexDirection:"column",
        marginTop:10,
    },
    container__home__tarjetas:{
        borderWidth:1,
        borderColor:"red",
        width:"100%",
        display:"flex",
        padding:10
    },
    contentContainer:{
        paddingBottom:60
    }
 

})
export default styles