import React, { FC, useState } from 'react';

interface InputProps {
  locations: Array<string>;
  setUserLocation: React.Dispatch<React.SetStateAction<string>>,
  setUserName: React.Dispatch<React.SetStateAction<string>>
}

const Input: FC<InputProps> = ({ locations, setUserLocation, setUserName }) => {
  const [userName, setUserNameInitial] = useState<string>('')
  const [selectedCountry, setSelectedCountry] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserLocation(selectedCountry);
    setUserName(userName)
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameInitial(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="h-3/4 w-4/5 flex flex-col items-center justify-between bg-yellow-300 p-8 rounded">
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleNameChange}
        className="p-2 m-2 border border-gray-400 rounded"
      />

      <select
        className="p-2 m-2 border border-gray-400 rounded"
        onChange={handleCountryChange}
        value={selectedCountry}
      >
        <option value="">Select a country</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>

      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default Input;
