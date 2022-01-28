
function Product(props) {
    return (
        <div>
            <hr />
            <h2>{props.product.name}</h2>
            <div>Special Price: {props.product.price}</div>
        </div>
    );
}

export default Product;