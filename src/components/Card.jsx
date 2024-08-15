import React from 'react';

const Card = ({ cat }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg flex-shrink-0 w-[300px] max-h-fit text-base">
      {cat ? (
        <>
          <img src={cat?.image} alt={cat?.name} className="h-48 w-full object-cover mb-4 rounded-t-lg" />
          <h2 className="text-lg font-bold px-2">{cat?.name}</h2>
          <p className="text-black font-semibold text-sm p-2">{cat?.description}</p>
          <p className="text-black font-bold px-2 italic inline-block">Origin</p>
          <span className='mx-2 font-semibold'>{cat?.origin}</span>
          
          <div>
            <p className='text-black font-bold m-2'>Temperament</p>
            <div className="text-black flex flex-wrap">
              {cat.temperament.split(',').map((temperament, index) => (
                <p className='bg-gray-300 m-1 rounded-full px-2 py-1 text-xs' key={index}>{temperament.trim()}</p>
              ))}
            </div>
          </div>
          
          <p className="text-black font-bold px-2 italic inline-block mt-2">Lifespan</p>
          <span className='mx-2 font-semibold'>{cat?.life_span} years</span>
          
          <div className='p-2 mt-4'>
            <a href={cat?.wikipedia_url} className='text-blue-600'>Learn More</a>
          </div>
        </>
      ) : (
        <div className="animate-pulse">
          <div className="bg-gray-300 h-40 w-full mb-4 rounded-md"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      )}
    </div>
  );
};

export default Card;