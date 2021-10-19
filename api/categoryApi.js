
import axiosClient from "./axiosClient"

const categoryApi = {
    getAll(){
        const url = '/category';
        return axiosClient.get(url);
    },
    getCategory(id){
        const url = `/category/${id}`;
        return axiosClient.get(url)
    }
}

export default categoryApi;