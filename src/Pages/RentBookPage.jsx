import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import RangeDatePicker from "@/components/RangeDatePicker";
import axiosHandler from "@/utils/axiosHandler";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/Features/LoadingSlice";
import { toast } from "sonner";
import { login } from "@/Features/AuthenticationSlice";

function RentBookPage() {
  const {id} = useParams()
  const [data, setData] = useState(null);
  const [dateTime,setDateTime]=useState(null);
  const [clientView,setClientView]=useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userData}=useSelector((state)=>state.authentication);

  useEffect(() => {
   const data = JSON.parse(localStorage.getItem("booksData"));
   const filteredData = data.filter((item) => item.id === Number.parseInt(id));
    setData(filteredData[0]);
  }, [id]);


  const handleDateTime = (setValue,clientView) => { 
    setDateTime(({...setValue,rentalCost:data.price}))
    setClientView(clientView);
  }

  const rentBook = async()=>{
    if(dateTime!==null){
      dispatch(setLoading(true))
      try {
        const token = localStorage.getItem("access_token");
        const header = {  
          Authorization: token ? `Bearer ${token}` : null,
        }
        const response = await axiosHandler(`http://localhost:8080/home/rent-book/${id}`,"post",null,header,dateTime);
        if(response.status===200){
          const upadtedUserData ={...userData,rentedBooks:[...response.data]}
          
          dispatch(login(upadtedUserData))
          toast.success("Book rented successfully")
          setDateTime(null);
          dispatch(setLoading(false));
          navigate(-1)
        }
      } catch (error) {
        toast.error("Error renting book");
        dispatch(setLoading(false));
      }
    }


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
        
        {dateTime==null ? (<RangeDatePicker handleDateTime={handleDateTime} />):(
            <div className="max-w-full mx-auto h-[70%] bg-slate-900 shadow-xl rounded-2xl p-3 space-y-6">
            <h2 className="text-xl font-bold text-center text-white">Your Rental Summary</h2>
      
            <div className="bg-gray-700 p-4 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-white">Rental Period</h3>
              <div className="mt-2 text-white">
                <p><span className="font-medium">From:</span>${clientView.startDate.toString().replace("$","")}</p>
                <p><span className="font-medium">To:</span>${clientView.endDate.toString().replace("$","")}</p>
              </div>
            </div>
      
            <div className="space-y-4">
              <div className="bg-blue-100 text-blue-800 p-4 rounded-xl shadow-sm">
                ✅ You will receive an email confirmation once your rental is approved.
              </div>
      
              <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl shadow-sm">
                ⚠️ When your rental due date ends, the system will automatically return the book and you'll get an email notification.
              </div>

              <Button onClick={()=>setDateTime(null)}>Change your Rental Date.</Button>
            </div>
          </div>
        )}

        <div className="w-full h-24 flex flex-col sm:flex-row items-center justify-around gap-2 mt-4">
         <h1 className="text-3xl md:text-4xl w-full sm:w-[50%] text-center flex items-center justify-center">
           <MdCurrencyRupee />
           {data.price.toString().substring(0,3)} 
         </h1>
         <div className="w-full sm:w-[50%] h-full flex items-center justify-center">
          <Button onClick={rentBook} className="w-full sm:w-auto bg-green-500 text-white hover:text-black"> 
           Pay Now
          </Button>
         </div>
        </div>  
      </div>
    </div>
  );
}

export default RentBookPage;
