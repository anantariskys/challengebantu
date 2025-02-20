import axios from "axios"


const core = axios.create(
    {
        baseURL: "https://67b13a313fc4eef538e9667f.mockapi.io/api"  
    }
)

export default core