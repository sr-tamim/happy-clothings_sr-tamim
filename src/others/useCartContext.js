import { useContext } from "react";
import { CartContext } from "../App";

const useCartContext = () => {
    return useContext(CartContext)
};

export default useCartContext;