import { createHashRouter, RouterProvider } from "react-router-dom"
import routerConfig from "@/config/router";
import { StrictMode, createContext } from "react";

import { useProducts, useCart } from "./hooks";

const router = createHashRouter(routerConfig);
export const ProductsContext = createContext();
export const CartContext = createContext();

function App () {


    let [products, setProducts] = useProducts("/products")
    let [cartList, cartDispatch] = useCart([])
    
    return (
        <StrictMode>
            <ProductsContext.Provider value={ products }>
                <CartContext.Provider value={ {cartList, cartDispatch} }>
                    <RouterProvider router={router} />{/* 渲染路由 */}
                </CartContext.Provider>
            </ProductsContext.Provider>
        </StrictMode>
    )
};
 
export default App;


