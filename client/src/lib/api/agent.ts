import axios from "axios";

const sleep = (dealy: number) => {

    return new Promise( resolve =>  setTimeout(resolve, dealy));
}

const agent = axios.create({
   baseURL : import.meta.env.VITE_API_URL
});


agent.interceptors.response.use( async (respone) => { 

    try {
        await sleep(1000);
        return respone;
    } catch (error) {
        console.log(error)
        return Promise.reject(error)
    } 
})

export default agent;
