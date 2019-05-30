import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class ProductItem extends Component {
    render() {
        var {product, id} = this.props;
        var statusName = product.condition ? "Con hang" : "Het hang";
        var statusClass = product.condition ? "warning" : "secondary";
        return (
            <>
                <tr>
                    <td>{id+1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                    <span className={`badge  badge-${statusClass}`}>{statusName}</span>
                    </td>
                    <td>
                        <div className='btn-group'>
                            <Link to={`/products/${product.id}/edit`} className='btn btn-primary'>Edit</Link>
                            <button className='btn btn-danger' 
                            onClick ={() => this.onDelete(product.id)}
                            >Delete</button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
    onDelete = (id) => {
        if(confirm("Are you sure you want to delete?")){ //eslint-disable-line
            this.props.onDeleteProduct(id);
        }
    }
}
