import { useDetail } from "@/hooks"
import { useParams, Link } from 'react-router-dom';

import ProductDetail from "../components/ProductDetail";

function Detail () {
    
    const { id } = useParams()

    const [ product ] = useDetail(id)
    return (
        <div>
            <Link to="/">go back</Link>
            <hr />
            <ProductDetail data={product}></ProductDetail>
            
        </div>
    )
};
 
export default Detail;