import React, { useState } from 'react';
import { IoIosVolumeHigh } from "react-icons/io";

function Dictionary() {
  const [results, setResults] = useState("");
  const [input, setInput] = useState({ means: null, audio: null });

  const formsub = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${results}`
    );
    const responseData = await response.json();
    setInput({
      means: responseData[0]?.meanings[0]?.definitions[0]?.definition || "No definition found",
      audio: responseData[0]?.phonetics[0]?.audio
    });
  };

  const playAudio = (e) =>{
    if (input.audio){
      const audio = new Audio(input.audio)
     

      
      audio.play()
      
    }
  }
  return (
    <form action="" className='text-center bg-yellow-300 h-screen' onSubmit={formsub}>
      <h1 className='bg-yellow-300 font-bold h-16 relative right-8 text-xl'>Dictionary</h1>
      <div className='border-2 w-[74vw] ml-44 h-[70vh] mt-11 bg-white'>
        <textarea
          className='border-2 border-black mt-36'
          cols="50"
          rows="10"
          value={results}
          onChange={(e) => setResults(e.target.value)}
        ></textarea>
        <textarea
          className='border-2 border-black ml-36'
          cols="50"
          value={input.means}
          rows="10"
        ></textarea>
        <IoIosVolumeHigh onClick={playAudio}  className='relative left-[65vw] t size-7' />
        <br />
        <button className='h-10 w-28 bg-yellow-300 font-serif '>Translate</button>
      </div>
    </form>
  );
}

export default Dictionary;
