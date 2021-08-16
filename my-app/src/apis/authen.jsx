// import axios from "axios";

// const authen = {
//     login: (data) => {
//         return axios.post("http://localhost:8080/api/login", data)
//     }
// }

// export default authen

export default {
    login:(data) => {
        return fetch('http://localhost:8080/api/login',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
}