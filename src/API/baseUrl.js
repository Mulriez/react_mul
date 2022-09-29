import axios from 'Axios'


const client = axios.create({
    baseUrl : 'https://belajar-react.smkmadinatulquran.sch.id/api'
})

export default client;