import { useCounter } from "@/hooks";
import { useEffect } from "react";
function Counter({ max, id, cartList, cartDispatch, detail, currentCount }) {
  const [count, counterDispatch] = useCounter(currentCount, max);

  useEffect(() => {
    counterDispatch({ type: "INPUT", payload: currentCount });
  }, [currentCount]);

  useEffect(() => {
    if (count == 0) {
      cartDispatch({ type: "DELETE", payload: id });
    } else {
      const isExis = cartList.find((item) => item.id == id);
      if (isExis) {
        cartDispatch({ type: "MODIFY", payload: { id, count } });
      } else {
        cartDispatch({ type: "ADD", payload: { count, ...detail } });
      }
    }
  }, [count]);

  useEffect(()=>{
    console.log(cartList)
  },[cartList])


  return (
    <div>
      <button onClick={() => counterDispatch({ type: "PLUS" })}>+</button>
      <input
        type="number"
        value={count}
        onChange={(e) =>
          counterDispatch({ type: "INPUT", payload: e.target.value })
        }
      />
      <button onClick={() => counterDispatch({ type: "MINUS" })}>-</button>
    </div>
  );
}

export default Counter;
