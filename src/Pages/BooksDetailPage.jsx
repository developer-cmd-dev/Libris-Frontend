import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { Link, useParams } from "react-router";
import { useSelector } from "react-redux";

function BooksDetailPage() {
  const { title } = useParams();
  const [data, setData] = useState(null);
  const [isRented, setIsRented] = useState(false);
  const {userData}=useSelector((state)=>state.authentication);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("booksData"));
    const filteredData = data.filter((item) => item.title === title);
    userData.rentedBooks.forEach((item)=>{
     
      if(item.bookId == filteredData[0].id){
       setIsRented(true)
      }else{
        console.log("not rented")
      }
    })


    setData(filteredData[0]);
  }, [title]);

  return (
    data !== null && (
      <div className="w-full h-[calc(100vh-5.5rem)] flex flex-col md:flex-row items-center justify-center overflow-hidden">
        <div className="w-full md:w-[50%] h-[40%] md:h-full flex items-center justify-center p-4">
          <img
            src={data.formats["image/jpeg"]}
            alt=""
            className="w-full max-w-md md:w-[25vw] object-contain max-h-[80%]"
          />
        </div>

        <div className="details w-full md:w-[50%] h-[60%] md:h-full flex flex-col items-center justify-between p-4 md:p-6">
          <div className="w-full h-24 flex flex-col items-center justify-around text-center md:text-left">
            <h1 className="text-2xl md:text-4xl w-full">
              {data.title} - {data.languages[0]}
            </h1>
            <p className="text-base md:text-lg w-full">
              {data.authors[0].name}
            </p>
          </div>

          <div className="w-full flex-1 overflow-y-auto py-4">
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              {data.summaries}
            </p>
          </div>
          {
            isRented?(     <div className="reader">
              <Link to={`/read/${data.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read Book
              </Link>
            </div>):(
          <div className="w-full h-24 flex flex-col sm:flex-row items-center justify-around gap-2 mt-4">
          <h1 className="text-3xl md:text-4xl w-full sm:w-[50%] text-center flex items-center justify-center">
            <MdCurrencyRupee />
            {data.price.toString().substring(0, 3)}
          </h1>
          <div className="w-full sm:w-[50%] h-full flex items-center justify-center">
            <Link to={`/rent-book/${data.id}`} className="w-full sm:w-auto">
              <CiShoppingCart />
              Rent this book
            </Link>
          </div>
        </div>
            )
          }

     


        </div>
      </div>
    )
  );
}

export default BooksDetailPage;
