// Context/Context.jsx
import { createContext, useState } from "react";

export const CartContext = createContext(); // Se crea el contexto global

// Creamos el componente que va a utilizar el contexto global
const GlobalContext = ({ children }) => {
    const [test, setTest] = useState({
      email: "",
      password: "",
      nombre: "",
      pais: "",
      numeroCamiseta: "",
      posicion: "",
      clubFavorito: "",
      imagenPerfil: ""
    });

    const data = {
        test,
        setTest
    };

    return (
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    );
}

export default GlobalContext;
