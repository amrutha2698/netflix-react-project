import axios from "axios";

//create an axios instance for baseurl
const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})
export default instance