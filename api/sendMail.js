
import axiosClient from "./axiosClient"

const sendMail = {
    sendMail(data){
        const url = `/sendMail`;
        return axiosClient.post(url, data)
    }
}

export default sendMail;