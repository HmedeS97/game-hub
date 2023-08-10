import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: '59c41a4a0c7946c8840189dd5a55a423'
    } 
})