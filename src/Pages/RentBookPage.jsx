import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { useParams } from "react-router";
import RangeDatePicker from "@/components/RangeDatePicker";


function RentBookPage() {
  const {id} = useParams()
  const [data, setData] = useState(null);
  const [dateTime,setDateTime]=useState(null)

  useEffect(() => {
   const data = JSON.parse(localStorage.getItem("booksData"));
    console.log(data)
   const filteredData = data.filter((item) => item.id === Number.parseInt(id));
   console.log(filteredData)
    setData(filteredData[0]);
  }, [id]);


  const handleDateTime = (e) => { 
    setDateTime(e)
  }



  

  return data!==null &&(
<div className="w-full h-[calc(100vh-5.5rem)] flex flex-col md:flex-row items-center justify-center overflow-hidden">
      <div className="w-full md:w-[50%] h-[40%] md:h-full flex items-center justify-center p-4">
        <img 
          src={data.formats["image/jpeg"]} 
          alt="image not found" 
          className="w-full max-w-md md:w-[25vw] object-contain max-h-[80%]" 
        />
      </div>

      <div className="details w-full md:w-[50%] h-[60%] md:h-full flex flex-col items-center justify-between p-4 md:p-6">
     {
        dateTime!==null && (
          <div className="w-full h-24 flex flex-col items-center justify-around text-center md:text-left">
          <h1 className="text-2xl md:text-4xl w-full">{data.title} - {data.languages[0]}</h1>
          <p className="text-base md:text-lg w-full">{data.authors[0].name}</p>
        </div>
        )
     }
        
        {dateTime==null && (<RangeDatePicker handleDateTime={handleDateTime} />)}

        <div className="w-full h-24 flex flex-col sm:flex-row items-center justify-around gap-2 mt-4">
         <h1 className="text-3xl md:text-4xl w-full sm:w-[50%] text-center flex items-center justify-center">
           <MdCurrencyRupee />
           {data.price.toString().substring(0,3)} 
         </h1>
         <div className="w-full sm:w-[50%] h-full flex items-center justify-center">
          <Button className="w-full sm:w-auto bg-green-500 text-white hover:text-black"> 
           Pay Now
          </Button>
         </div>
        </div>  
      </div>
    </div>
  );
}

export default RentBookPage;
