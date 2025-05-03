import axios from "axios";



export default async function axiosHandler(url,method,credentials,headers,data){

   try {
    const response = await axios({
        url:url,
        method:method,
        headers:headers,
        withCredentials:credentials,
        data:data
    })

    return  response;
   } catch (error) {
    console.log(error)
    throw new Error(error.response.data.message || "An error occurred");
   }

}