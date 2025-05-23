import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useOutletContext } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { handleBooksData } from '@/Features/BooksDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CiShoppingCart } from "react-icons/ci";


function HomePage() {
  const [resData, setResData] = useState([])
  const [response] = useOutletContext()
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.loading);
  const sekeletonArray = new Array(32);

  useEffect(() => {
    
    setResData(response)
  }, [response])


  const handleSendBooksData = (value) => {
    dispatch(handleBooksData(value))
  }





  return (
    <div className="flex flex-1 flex-col min-h-screen gap-4 p-4 borders border-red-300 ">
      <div className="grid auto-rows-min gap-4 md:grid-cols-5">
        {resData.length>0? resData.map((data) => (
          <Link
            to={`title/${data.title}`}
            onClick={() => handleSendBooksData(data)}
            key={data.id}
            className="aspect-square rounded-xl bg-none  flex flex-col  items-center justify-end    cursor-pointer"
          >
            <div>
              <img src={data.formats["image/jpeg"]} alt={`${data.title.concat("...")}`} />
            </div>
            <div className="w-full h-[20%] flex flex-col px-2 items-center justify-center ">
              <Button variant={"default"} className={"w-[70%] rounded-tl-xl rounded-tr-none rounded-bl-none rounded-br-xl   "} >Rent Book</Button>
            </div>
          </Link>
        )):sekeletonArray.map((index)=>(
          <Link
          to={`title/${data.title}`}
          onClick={() => handleSendBooksData(data)}
          key={index}
          className="aspect-square border rounded-xl bg-none  flex flex-col  items-center justify-end    cursor-pointer"
        >
       <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
        </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage