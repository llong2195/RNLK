
import axiosClient from "./axiosClient"

const typeApi = {
    getAll(){
        const url = '/type'
        return axiosClient.get(url)
    },
    getType(id){
        const url = `/type/${id}`
        return axiosClient.get(url)
    }
}

export default typeApi;