import { useMemo } from "react";
import Counter from "@/components/Counter";

function CartItem ({ data, cartDispatch, cartList }) {



    
    return (
        <div>
            <img src={data.image} alt="" style={{ width: 100 }} />
            <p>
                {data.name} {data.price}$
            </p>
            <Counter
                max={data.max}
                id={data.id}
                cartList={cartList}
                cartDispatch={cartDispatch}
                detail={data}
                currentCount={data.count}
            />
        </div>
    )
};
 
export default CartItem;