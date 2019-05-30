import Axios from "axios";
import * as configApi from '../constances/configApi';

export default function callApi(endpoint, method='get', data){
    return Axios({
        method : method,
        url : `${configApi.API_URL}/${endpoint}`,
        data : data
    }).catch(err => {
        console.log(err);
    })
}