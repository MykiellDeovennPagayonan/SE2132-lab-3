import React, { FC, useState } from "react";

interface InputProps {
  locations: Array<string>;
  setUserLocation: React.Dispatch<React.SetStateAction<string>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const Input: FC<InputProps> = ({ locations, setUserLocation, setUserName }) => {
  const [userName, setUserNameInitial] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserLocation(selectedCountry);
    setUserName(userName);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameInitial(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >
      <div className="flex flex-col overflow-y-auto md:flex-row">
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={handleNameChange}
          className="p-2 m-2 border border-gray-400 rounded placeholder-gray-600 text-gray-600"
        />

        <select
          className="p-2 m-2 border border-gray-400 rounded text-gray-600"
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

        <button
          type="submit"
          className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple md:mt-2 mb-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Input;
