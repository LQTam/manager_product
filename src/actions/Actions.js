import * as types from '../constances/ActionTypes'
import apiCaller from '../utils/apiCaller';

export const getProductRequestApi = () => {
    return (dispatch) => {
        return apiCaller("products","get",null)
        .then(res =>{
            dispatch(getAllProduct(res.data))
        })
    }
}

export const getAllProduct = (products) => {
    return {
        type: types.GET_ALL_PRODUCT,
        products
    }
}

export const deleteProductRequestApi = (id) => {
    return dispatch => {
        return apiCaller(`products/${id}`,'DELETE',null)
        .then(res=>{
            dispatch(deleteProductByID(id))
        });
    }
}
export const deleteProductByID = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

export const addProductRequestApi = (product) => {
    return dispatch => {
        return apiCaller('products','post',product)
        .then(res=>{
            dispatch(addProduct(res.data))
        });
    }
}
export const addProduct = (product) => {
    return {
        type : types.ADD_PRODUCT,
        product
    }
}

export const getProductByIDRequestApi = (id) => {
    return (dispatch) => {
        return apiCaller(`products/${id}`,"get",null)
        .then(res =>{
            dispatch(getProduct(res.data))
        })
    }
}

export const getProduct = (product) => {
    return {
        type: types.GET_PRODUCT_BY_ID,
        product
    }
}

export const editProductRequestApi = (product) => {
    return dispatch => {
        return apiCaller(`products/${product.id}`,'put',product).then(res =>{
            dispatch(editProduct(res.data))
        })
    }
}

export const editProduct = (product)=>{
    return {
        type:types.EDIT_PRODUCT,
        product,
    }
}