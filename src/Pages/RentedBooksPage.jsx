import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
function RentedBooksPage() {
    const {userData}=useSelector((state)=>state.authentication);
    const [booksData,setBooksData]=useState([])

    useEffect(()=>{
        const booksArr = JSON.parse(localStorage.getItem("booksData"));
        const filtered = booksArr.filter((item)=>userData.rentedBooks.some((book)=>book.bookId == item.id));
        if(filtered.length>0){
            setBooksData(filtered)
        }
    },[userData])


  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-1 flex-col gap-4 p-4 ">
      {
        booksData.length>0?(<div className="grid auto-rows-min gap-4 md:grid-cols-5">
          {booksData.map((data) => (
            <Link
            to={`title/${data.title}`}
              key={data.id}
              className="aspect-square bg-[#22223B] rounded-xl bg-none  flex flex-col  items-center justify-end    cursor-pointer"
            >
                <div>
                  <img src={data.formats["image/jpeg"]} alt={`${data.title.concat("...")}`} />
                </div>
              <div className="w-full h-[20%] flex  px-2 items-center justify-around text-black">
                <Link to={`/return-book/${data.id}`} className={"w-[40%] rounded-xl rounded-tr-none rounded-br-none bg-white  h-[60%] flex items-center justify-center  "} >Return Book</Link>
                <Link to={`/read/${data.title}`}  className={"w-[40%] rounded-xl rounded-tl-none rounded-bl-none bg-white h-[60%] flex items-center justify-center  "} >Read Book</Link>
              </div>
            </Link>
          ))}
        </div>):(
          (
            <div className=' flex h-screen items-center justify-center w-full'>
              <h1 className='text-5xl opacity-40'>No Items</h1>
            </div>
          )
        )
      }

  </div>
  )
}

export default RentedBooksPage