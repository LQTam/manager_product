import React, { Component } from 'react'
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProductRequestApi,deleteProductRequestApi } from '../actions/Actions'
import ProductItem from '../components/ProductItem';

class ProductsPage extends Component {
    componentDidMount() {
        this.props.getAllProduct();
    }
    render() {
        var { products } = this.props;
        return (
            <>
                <div className="container pr-0">
                    <span className="input-group-btn">
                        <Link to='/products/add' className="btn btn-primary">Add Product</Link>
                    </span>
                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList>
                </div>
            </>
        )
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    id={index}
                    onDeleteProduct = {this.onDelete}
                />
            })
        }
        return result;
    }
    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllProduct: () => {
            dispatch(getProductRequestApi());
        },
        onDeleteProduct : (id) => {
            dispatch(deleteProductRequestApi(id));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

