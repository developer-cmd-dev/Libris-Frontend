import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useOutletContext } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { handleBooksData } from '@/Features/BooksDataSlice';
import { useDispatch } from 'react-redux';

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
                <Button className={"w-[70%] rounded-tl-xl rounded-tr-none rounded-bl-none rounded-br-xl  bg-blue-800 text-white text-lg hover:text-slate-800"}  >Rent Book</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
  )
}

export default HomePage