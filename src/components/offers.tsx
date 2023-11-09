/* eslint-disable react/jsx-key */
import React, { FC, useState } from 'react';

interface OffersProps {
  offers: Array<string>
}

const Offers: FC<OffersProps> = ({offers}) => {


  return (
    <div className="h-3/4 w-4/5 flex flex-col items-center justify-between bg-yellow-300 p-8 rounded">
      {offers.map((offer) => {
        return (<h1> {offer} </h1>)
      })}
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Send me an Email
      </button>
    </div>
  );
};

export default Offers;
