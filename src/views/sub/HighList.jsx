import { useOutletContext } from "react-router-dom";
import ProductItem from "@/components/ProductItem";

function HighList () {

    const { highList } = useOutletContext();
    
    return (
        <div>
            {
                highList.map(item=><ProductItem key={item.id} data={item} />)
            }
        </div>
    )
};
 
export default HighList;