import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useOutletContext } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { handleBooksData } from '@/Features/BooksDataSlice';
import { useDispatch } from 'react-redux';
import { CiShoppingCart } from "react-icons/ci";


function HomePage() {
    const[resData,setResData]=useState([])
 const [response]=useOutletContext()
 const dispatch = useDispatch()

 useEffect(() => {
    setResData(response)
 }, [response])


 const handleSendBooksData = (value) => {
     dispatch(handleBooksData(value))
   }

 
 


  return (
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-5">
          {resData.map((data) => (
            <Link
            to={`title/${data.title}`}
            onClick={()=>handleSendBooksData(data)}
              key={data.id}
              className="aspect-square rounded-xl bg-none  flex flex-col  items-center justify-end    cursor-pointer"
            >
                <div>
                    <img src={data.formats["image/jpeg"]} alt="" />
                </div>
              <div className="w-full h-[20%] flex flex-col px-2 items-center justify-center ">
                <Button variant={"default"} className={"w-[70%] rounded-tl-xl rounded-tr-none rounded-bl-none rounded-br-xl   "} >Rent Book</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
  )
}

export default HomePage