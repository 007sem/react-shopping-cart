import { useContext } from "react";
import { ProductsContext } from "@/App"
import { Link } from "react-router-dom";
import ProductItem from "@/components/ProductItem";

function List () {
    const products = useContext(ProductsContext); // 获取全局数据

    
    return (
        <div>
            <Link to="/">go back</Link>
            {
                products.map(item=><ProductItem key={item.id} data={item} />)
            }
        </div>
    )
};
 
export default List;