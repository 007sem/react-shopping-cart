import { useState, useEffect, useReducer } from "react";
import http from "@/utils/http";

export function useProducts(url) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      
      try {
        const { data } = await http.get(url);
        setProducts(data); // 更新状态
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return [products, setProducts];
}

export function useDetail(id) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await http.get(`/product/${id}`);
        
        setProduct(data); // 更新状态
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return [product, setProduct];
}


export function useCounter (defaultValue, max){
    const [count, despatch] = useReducer(countReducer, defaultValue)


    function countReducer(count, {type, payload}){
        switch(type){
            case 'PLUS':
              if (count >= max) return count; // 防止溢出
              return count += 1;
            case 'INPUT':
              if (payload > max) return count; // 防止溢出
              return Number(payload);
            case 'MINUS':
              if (count <= 0) return 0;
              return count -= 1;
            default:
                return count
        }
    }

    return [ count, despatch ]

}


export function useCart(defaultList) {
  const [ cartList, despatch ] = useReducer(cartReducer, defaultList)

  function cartReducer(cartList, {type, payload}){
    switch(type){
      case 'ADD':
        const cid = new Date().getTime()
        payload.cid = cid
        return [
          payload,
          ...cartList
        ]
      case 'DELETE':
        console.log("delete")
        // paload = id
        return cartList.filter(item => item.id !== payload)

      case 'MODIFY':
        // paload = { id, count }
        return cartList.map(item => {
          if (item.id === payload.id) {
            return {...item, count: payload.count}
          } else {
            return item
          }
        })


      default:
        return cartList
    }
  }

  return [ cartList, despatch ]


}

export function useTotalPrice (cartList){
  const [ total, setTotal ] = useState(0)

  useEffect(()=>{

    let total = 0
    cartList.forEach(item => {
      total += item.price * item.count
    })
    setTotal(total)
  },[cartList])

  return [ total, setTotal ]

}