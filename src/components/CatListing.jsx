import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatCard from './Card';

const CatListing = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCats = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=10`);
      setCats(response.data.data.data);
      setTotalPages(Math.ceil(response.data.data.totalPages)); // Assuming the API returns a 'total' count
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cats:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCats(page);
  }, [page]);

  return (
    <>
      <div className='ml-[85%] mb-2 h-10 w-10'>
        <a href="https://chaicode.com" className='inline-block h-full w-full'>
          <img
            src="https://i.ibb.co/DgRcZtK/image-2.png"
            alt="chaiaurcode-logo"
            className="rounded-lg shadow-lg shadow-slate-500 w-full h-full"
          />
        </a>
      </div>
      <div className="container mx-auto mt-4 border-2 shadow-lg rounded-lg min-w-full">
        <div className="flex overflow-x-scroll space-x-2 pb-2">
          {loading ? (
            [...Array(4)].map((_, index) => <CatCard key={index} />)
          ) : (
            cats.map((cat) => <CatCard key={cat.id} cat={cat} />)
          )}
        </div>
        <div className="flex justify-between mt-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-2 py-1 mx-2 mb-2 bg-blue-500 text-white rounded disabled:bg-gray-400 text-sm"
          >
            Previous
          </button>
          <span className="text-sm">Page {page} of {totalPages}</span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-2 py-1 mx-2 mb-2 bg-blue-500 text-white rounded disabled:bg-gray-400 text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CatListing;