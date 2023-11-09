/* eslint-disable react/jsx-key */
import React, { FC, useState } from 'react';

interface OffersProps {
  offers: Array<string>
  sendEmail: (offers : Array<string>, email : string, userName : string) => void
  email: string
  userName: string 
}

const Offers: FC<OffersProps> = ({offers, sendEmail, email, userName}) => {


  return (
    <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 px-16">
      <h1 className="text-2xl font-bold my-8 justify-center text-center"> We believe this is the best for you: </h1>
      {offers.map((offer) => {
        return (
        <h1 className='flex w-full text-center justify-center my-4'> {offer} </h1>
        )
      })}
      <button onClick={() => sendEmail(offers, email, userName)} className='block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'>
        Send me an Email
      </button>
    </div>
  );
};

export default Offers;
