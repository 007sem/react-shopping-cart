import Counter from "@/components/Counter";
import { Link } from "react-router-dom";

import { useContext, useMemo, useEffect } from "react";
import { CartContext } from "@/App";

function ProductDetail({ data }) {
  const { cartList, cartDispatch } = useContext(CartContext);

  const currentCount = useMemo(() => {
    return cartList.find((item) => item.id === data.id)?.count || 0;
  }, [data]);

  return (
    <div>
      <img src={data.image} alt="" style={{ width: 200 }} />
      <h1>
        {data.name} {data.price}$
      </h1>
      <p>{data.description}</p>
      <Counter
        max={data.max}
        id={data.id}
        cartList={cartList}
        cartDispatch={cartDispatch}
        detail={data}
        currentCount={currentCount}
      />
      <Link to="/cart">go to cart</Link>
    </div>
  );
}

export default ProductDetail;
