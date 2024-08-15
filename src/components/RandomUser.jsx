import React, { useEffect, useState } from 'react';
import { MdKeyboardBackspace } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import axios from 'axios';

const RandomUser = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.freeapi.app/api/v1/public/randomusers/user/random');
        console.log(response.data.data);
        setUserData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [reload]);

  const handleRefresh = () => {
    setLoading(true);
    setReload(prev => !prev);
    setLoading(false);
  };

  return (
    <>
      <div className="flex items-center mt-6 w-full justify-center">
        <div className="max-w-lg max-h-lg mb-8 mx-6">
          {loading ? (
            <div className="animate-pulse flex flex-col items-center justify-center">
              <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4 "></div>
              <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-2.5"></div>
              <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-80 mb-4 "></div>
              <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-2.5"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="bg-[#B6B3F3] shadow-xl rounded-lg py-3 border-white border-8">
              <div className='flex justify-between ml-3 mr-3 items-center'>
                <MdKeyboardBackspace className='cursor-pointer text-3xl' />
                <p className=' text-center font-bold text-xl'>Profile Overview</p>
                <IoMdRefresh onClick={handleRefresh} className='cursor-pointer text-3xl' />
              </div>
              <div className="p-2 flex items-center justify-center">
                <img className="w-20 h-20 rounded-full shadow-lg shadow-slate-500" src={userData?.picture.medium} alt={userData?.name.first} />
                <p className='bg-black text-white inline-block rounded-3xl px-1 mb-14 mx-2'>{userData?.name.title}</p>
              </div>
              <div>
                <p className="text-center text-[18px] font-serif font-semibold">{userData?.name.first} {userData?.name.last}</p>
                <p className="text-center text-[12px] font-[inter] font-semibold">{userData?.login?.username}</p>
                <hr className="h-px my-3 border-1 border-purple-400 mx-4" />
                <div className='flex items-center justify-center gap-6 font-bold'>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(userData?.location?.city || '')}`} target="_blank" rel="noopener noreferrer" className='flex gap-4 items-center justify-center'>
                    <CiLocationOn className='bg-black text-white p-1 rounded-full text-3xl' />
                    <p>Location</p>
                  </a>
                  <a href={`tel:${userData?.phone}`} target="_blank" rel="noopener noreferrer" className='flex gap-4 items-center justify-center'>
                    <IoCallOutline className='bg-black text-white p-1 rounded-full text-3xl' />
                    <p>Call me</p>
                  </a>
                </div>
                <hr className="h-px my-3 border-1 border-purple-400 mx-4" />
              </div>
              <div className="grid grid-cols-2 p-3 text-[#000000B2]">
                <div className="p-2">
                  <p className='font-bold text-[9px]'>City</p>
                  <p className="text-[18px] font-serif font-semibold">{userData?.location.city}</p>
                </div>
                <div className="p-2">
                  <p className='font-bold text-[9px]'>Nationality</p>
                  <p className="text-[18px] font-serif font-semibold">{userData?.nat}</p>
                </div>
                <div className="p-2">
                  <p className='font-bold text-[9px]'>Date of Birth</p>
                  <p className="text-[18px] font-serif font-semibold">{userData?.dob?.date
                    ? new Intl.DateTimeFormat('en-IN', {
                      year: 'numeric',
                      month: 'long', // Full month name
                      day: 'numeric'
                    }).formatToParts(new Date(userData.dob.date))
                      .map(({ type, value }) => type === 'month' ? `${value},` : value)
                      .join('')
                    : 'Date not available'
                  }</p>
                </div>
                <div className="p-2">
                  <p className='font-bold text-[9px]'>Phone No.</p>
                  <p className="text-[18px] font-serif font-semibold">{userData?.phone}</p>
                </div>
                <div className="p-2">
                  <p className='font-bold text-[9px]'>Time Zone</p>
                  <p className="text-[18px] font-serif font-semibold">{userData?.location?.timezone.offset || 'Offset not available'}, ({userData?.location?.timezone.description || 'Description not available'})</p>
                </div>
                <div className="p-2">
                  <p className='font-bold text-[9px]'>Registered Since</p>
                  <p className="text-[18px] font-serif font-semibold">{userData?.registered?.date
                    ? new Intl.DateTimeFormat('en-IN', {
                      year: 'numeric',
                      month: 'long', // Full month name
                      day: 'numeric'
                    }).formatToParts(new Date(userData.registered.date))
                      .map(({ type, value }) => type === 'month' ? `${value},` : value)
                      .join('')
                    : 'Date not available'
                  }</p>
                </div>
              </div>
              <div className='ml-[80%]'>
                <a href="https://chaicode.com">
                  <img
                    src="https://i.ibb.co/DgRcZtK/image-2.png"
                    alt="chaiaurcode-logo"
                    className="w-14 h-14 rounded-lg shadow-lg shadow-slate-500"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default RandomUser;