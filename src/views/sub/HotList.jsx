import { useOutletContext } from "react-router-dom";
import ProductItem from "@/components/ProductItem";

function HotList () {
    
    const { hotList } = useOutletContext();

    return (
        <div>
            {
                hotList.map(item=><ProductItem key={item.id} data={item} />)
            }
        </div>
    )
};
 
export default HotList;