// ✨ implement axiosWithAuth
import Axios from "axios";



expect function axiosWithAuth() {
    const token = localStorage.getItem('token')
    return axios.create({
        header: {
            Authorization: token, 
        },
    })
}