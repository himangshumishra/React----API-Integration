import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from 'react-icons/ri';
const RandomJokes = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
        const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes/joke/random');
    //   console.log(response.data.data.content);
      
        setJoke(response.data.data.content);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);
  const generateRandomAnalytics = () => {
    const randomTime = () => {
      const hour = Math.floor(Math.random() * 12) + 1;
      const minute = Math.floor(Math.random() * 60).toString().padStart(2, '0');
      const period = Math.random() > 0.5 ? 'AM' : 'PM';
      return `${hour}:${minute} ${period}`;
    };
  
    const randomDate = () => {
        const start = new Date(2020, 0, 1);
        const end = new Date();
        const randomTimestamp = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return randomTimestamp.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      };
  
    const formatter = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
    });
  
    return {
      timestamp: randomTime(),
      views: formatter.format(Math.floor(Math.random() * 100000)),
      date: randomDate(),
      retweets: formatter.format(Math.floor(Math.random() * 1000)),
      likes: formatter.format(Math.floor(Math.random() * 5000)),
      comments: formatter.format(Math.floor(Math.random() * 300)),
      bookmarks: formatter.format(Math.floor(Math.random() * 200)),
    };
  };

  const analytics = generateRandomAnalytics();

  return (
      <>
<div className="max-w-xl mx-auto bg-black text-white border border-gray-300 rounded-lg mt-12 p-6">
  {loading ? (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    </div>
  ) : (
    <div>
      <div className='flex mb-5 items-center gap-10 font-bold text-xl'>
        <FaArrowLeftLong />
        <p>Post</p>
      </div>
      <div className="flex items-center mb-4">
        <img
          src='https://i.ibb.co/m4H7r0F/elon-profile.jpg'
          alt="Elon Musk"
          className="rounded-full h-12 w-12 mr-4"
        />
        <div className='m-0'>
          <div className="font-bold mb-0">Elon Musk</div>
          <div className="text-gray-500">@elonmusk</div>
        </div>
        <RiVerifiedBadgeFill className="text-blue-500 mb-6" />
        <BsThreeDots className='ml-auto'/>
      </div>
      <div className="text-lg mb-4">
        <p>{joke}</p>
      </div>
      <div className="text-gray-500 text-sm mb-2">
        <span>{analytics.timestamp}</span> · <span>{analytics.date}</span> ·
        <span className='text-white font-semibold'>{analytics.views.toLocaleString()}</span>
        <span>Views</span>
      </div>
      <hr className='border-1 border-gray-500 mb-2 mt-5'/>
      <div className="flex justify-between text-gray-500 text-sm">
        <div className='flex justify-center items-center'>
          <FaComment className='m-1'/>
          <span>{analytics.comments}</span>
        </div>
        <div className='flex justify-center items-center'>
          <FaRetweet className='m-1'/>
          <span>{analytics.retweets}</span>
        </div>
        <div className='flex justify-center items-center'>
          <CiHeart className='m-1'/>
          <span>{analytics.likes}</span>
        </div>
        <div className='flex justify-center items-center'>
          <FaRegBookmark className='m-1'/>
          <span>{analytics.bookmarks}</span>
        </div>
        <div className='flex justify-center items-center'>
          <FiShare />
        </div>
      </div>
      <hr className='border-1 border-gray-500 mt-3'/>
    </div>
    
  )}

</div>
            <div className='ml-[80%] mt-[10%] fixed'>
            <a href="https://chaicode.com">
              <img
                src="https://i.ibb.co/DgRcZtK/image-2.png"
                alt="chaiaurcode-logo"
                className="w-14 h-14 rounded-lg shadow-lg shadow-slate-500"
              />
            </a>
          </div>
          </>
    
  );
};

export default RandomJokes;
