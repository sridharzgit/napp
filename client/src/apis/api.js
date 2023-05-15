import axios from 'axios'

const csInstance = axios.create({
    baseURL: "http://localhost:3080/cs"
    
})
csInstance.defaults.headers.common['Content-Type'] = "application/json";

const dsInstance = axios.create({
    baseURL: "http://localhost:3080/ds"
    
})
dsInstance.defaults.headers.common['Content-Type'] = "application/json";
//baseURL: "`${process.env.REACT_APP_CS_URL}`"

export {csInstance,dsInstance}


