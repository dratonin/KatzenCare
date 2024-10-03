
import React from 'react';



export const Input = ({ id, type = "text", placeholder }: { id: string, type?: string, placeholder: string }) => {

  return (

    <input

      id={id}

      type={type}

      placeholder={placeholder}

      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"

    />

  );

};
