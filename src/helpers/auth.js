import axios from "axios"

const backendHost = 'http://localhost:5000/api/'

export function login(data){
    return new Promise((res,rej)=>{
        axios.post(backendHost+"auth",data)
        .then((result)=>{
            res(result)
        })
        .catch((err)=>{
            rej(err)
        })
    })
}

export function getUserFromLocal(){
    const userStr = localStorage.getItem("orbUser")
    if(!userStr){ return null }
    return JSON.parse(userStr)
}