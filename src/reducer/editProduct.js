import * as types from '../constances/ActionTypes';

var initState = {};

const editProduct = (state = initState,action) => {
    switch (action.type) {
        case types.GET_PRODUCT_BY_ID:{
            return action.product
        }
        default:
            return state
    }
}

export default editProduct;