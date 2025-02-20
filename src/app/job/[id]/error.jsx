"use client"
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center h-screen">
        <div className="p-8 shadow-md rounded-md">
          <h1 className="text-3xl mb-4">Oops, something went wrong</h1>
          <p className="text-lg mb-4">{error.message}</p>
          <button
            onClick={() => reset()}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
