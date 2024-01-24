import { Outlet, Link } from "react-router-dom"
import { useContext, useMemo } from "react";
import { ProductsContext } from "@/App"

function Home () {

    const products = useContext(ProductsContext); // 获取全局数据


    const hotList = useMemo(()=>products.filter(item => item.isHot), [products]); // 筛选出热销商品
    const highList =  useMemo(()=>products.filter(item => item.isFeatured), [products]); // 筛选出精品商品

    // console.log(hotList, highList)

    return (
        <div>
            <h1>Home</h1>
            <Link to="/">hot</Link> | <Link to="/high_list">high</Link> | <Link to={"/list"}>list</Link>

            <Outlet context={ { hotList, highList } } />
        </div>
    )
};
 
export default Home;