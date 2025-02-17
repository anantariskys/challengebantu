const { default: axios } = require("axios");


const core = axios.create(
    {
        baseURL: ""  //nunggu mock api
    }
)

export default core