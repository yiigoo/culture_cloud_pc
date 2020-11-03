import axios from 'axios'
import { Modal } from 'view-design'

const $http = {
    get(...arg) {
        return new Promise( (resolve,reject) =>{
            axios.get(...arg)
            .then((res)=>{
                resolve(res.data)
            })
            .catch((err)=>{
                Modal.warning({ content: err.message})
                reject()
            })
        })
    },
    post(...arg) {
        return new Promise( (resolve,reject) =>{
            axios.post(...arg)
            .then((res)=>{
                resolve(res.data)
            })
            .catch((err)=>{
                Modal.warning({ content: err.message})
                reject()
            })
        })
    }
}

export default $http