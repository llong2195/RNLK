
import axiosClient from "./axiosClient"

const userApi = {
    getAll(){
        const url = '/user';
        return axiosClient.get(url);
    },
    getUser(id){
        const url = `/user/${id}`;
        return axiosClient.get(url)
    },
    login(data){
        const url = `/user/login`;
        return axiosClient.post(url, data)
    }
}

export default userApi;