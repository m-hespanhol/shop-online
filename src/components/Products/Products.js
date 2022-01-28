import uuid from 'react-uuid';
import React from 'react';
import Product from './Product/Product';

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        const products = [
            {
                id: uuid(),
                name: 'PlayStation',
                price: 500
            },
            {
                id: uuid(),
                name: 'TV',
                price: 850
            }
        ];
        this.setState({
            products
        });
    }

    render() {
        return (
            <div>
                <div>Welcome, {this.props.userName}.</div>
                <h1>Products on Sale</h1>
                <div>{this.state.products.map(
                    (product, index) => {
                        return (
                            <Product
                                key={index}
                                product={product}
                            />
                        );
                    }
                )}</div>
            </div>
        );
    }
}

export default Products;