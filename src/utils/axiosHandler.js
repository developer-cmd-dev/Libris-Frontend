import axios from "axios";



export default async function axiosHandler(url,method,headers,credentials){

   try {
    const response = await axios({
        url:url,
        method:method,
        headers:headers,
        withCredentials:credentials
    })

    return await response;
   } catch (error) {
    console.log(error)
   }

}