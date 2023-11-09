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
      className="h-3/4 w-4/5 flex flex-col items-center justify-between bg-white p-8 rounded shadow-lg space-y-4"
    >
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={handleNameChange}
          className="p-2 w-full border border-gray-300 rounded"
        />
      </div>

      <div className="w-1/2">
        <select
          className="p-2 w-full border border-gray-300 rounded text-gray-500"
          onChange={handleCountryChange}
          value={selectedCountry}
        >
          <option value="" className="text-gray-500">
            Select a country
          </option>
          {locations.map((location, index) => (
            <option key={index} value={location} className="text-gray-500">
              {location}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded w-full hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};
export default Input;
