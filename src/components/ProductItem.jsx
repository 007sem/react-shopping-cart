import { Link } from "react-router-dom";

function ProductItem ({ data }) {

    // console.log(data)
    
    return (
        <div className="product-item">
            <Link to={"/detail/"+data.id}>
                <img src={data.image} style={{width:100}} />
            </Link>
            <h3>{ data.name } { data.price }$</h3>
        </div>
    )
};
 
export default ProductItem;