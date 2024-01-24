import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@/App";
import CartItem from "@/components/CartItem";
import { useTotalPrice } from "@/hooks";

function Cart  () {

    const nav = useNavigate();
    const { cartList, cartDispatch } = useContext(CartContext);

    const [ total ] = useTotalPrice(cartList);

    return (
        <div>
            <a href="#" onClick={()=> nav(-1)}>go back</a>
            <h1>cart</h1>
            <div>
                {
                    cartList.map(item =>(
                        <CartItem 
                        key={item.id}
                        data={item}
                        cartList={cartList}
                        cartDispatch={cartDispatch}
                        />
                    ))
                }
            </div>
            <div>total price: {total}$</div>
        </div>
    )
};
 
export default Cart;   