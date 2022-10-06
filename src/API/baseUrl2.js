import axios from 'axios'
import Cookies from 'js-cookie';


const client = axios.create({
    baseURL : 'https://api-react-2.herokuapp.com/api',
    headers : {
        Accept : "application/JSON",
        Authorization : `Bearer ${Cookies.get("myapps_token")}`,
    },
})

export default client;