import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const ProfilePage = () => {
  // Sample user data - in a real app, this would come from an API or state
  const {userData}=useSelector((state)=>state.authentication);


  return (
    <div className="h-[calc(100vh-5.5rem)] ">
      <div className="w-full h-full   rounded-xl shadow-md overflow-hidden">
        <div className="flex items-center justify-center  h-full w-full">
          {/* Left Side - Profile Image */}
          <div className=" p-8 flex justify-center items-center  w-[50%] h-full  ">
            <span 
              className="rounded-full h-80 w-80 object-cover bg-black text-white flex items-center justify-center text-8xl "
            >{userData.name[0].toUpperCase()}</span>
          </div>
          
          {/* Right Side - User Details */}
          <div className="p-8 flex-1 h-[60%]  flex items-start justify-around flex-col">
            <div className="uppercase tracking-wide text-2xl text-[#98c1d9] font-semibold">
              User Profile
            </div>
            <h1 className="block mt-1 text-xl leading-tight font-medium text-shadow-gray-800">
              {userData.name}
            </h1>
            
            <div className="mt-4 space-y-4">
              <div>
                <span className="text-gray-600 font-medium">Email: </span>
                <span>{userData.email}</span>
              </div>
           
              
              <div>
                <span className="text-gray-600 font-medium">Bio: </span>
                <p className="text-gray-800">{userData.bio}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-6">
                <Link to={`/rented-books/${userData.email}`} className="bg-[#dee2ff] p-4 rounded-lg text-[#14213d]">
                  <h3 className=" font-bold text-lg">Rented Books</h3>
                  <p className="text-3xl font-bold text-">{userData.rentedBooks.length}</p>
                  <p className="text-sm ">Currently reading</p>
                </Link>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-green-800 font-bold text-lg">Purchased Books</h3>
                  <p className="text-3xl font-bold text-green-600">{userData.purchasedBooks.length}</p>
                  <p className="text-sm text-green-400">In collection</p>
                </div>
              </div>
              
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;