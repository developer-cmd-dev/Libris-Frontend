import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";


function BooksDetailPage() {
  const data = useSelector((state) => state.booksData);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="w-full h-[calc(100vh-5.5rem)]  flex items-center justify-center">
      <div className=" w-[50%]  h-full flex items-center justify-center ">
        <img src={data.formats["image/jpeg"]} alt="" className="w-[25vw]" />
      </div>

      <div className="details w-[50%] h-full flex flex-col items-center justify-start p-6 ">
        <div className=" w-full h-24 flex flex-col items-center justify-around">
          <h1 className="text-4xl w-full">{data.title} - {data.languages[0]}</h1>
          <p className=" text-lg w-full">{data.authors[0].name}</p>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-around ">
          <h1 className="py-2 text-slate-400">
            {data.summaries}
          </h1>
        </div>

        <div className="w-full h-24 flex  items-center justify-around border ">
         <h1 className="text-4xl w-[50%]"> {data.price.toString().substring(0,3)} </h1>
         <div className="w-[50%] h-full flex items-center justify-center">
          <Button>Rent this book <CiShoppingCart />
          </Button>
         </div>
        </div>  
      </div>
    </div>
  );
}

export default BooksDetailPage;
