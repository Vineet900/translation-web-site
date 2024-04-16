import React, { useState } from "react";
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
      means:
        responseData[0]?.meanings[0]?.definitions[0]?.definition ||
        "No definition found",
      audio: responseData[0]?.phonetics[0]?.audio,
    });
  };

  const playAudio = (e) => {
    if (input.audio) {
      const audio = new Audio(input.audio);

      audio.play();
    }
  };
  return (
    <form className=" bg-white border-2 max-w-6xl mx-auto mt-20 " action="" onSubmit={formsub}>
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 p-4 gap-8 ">
        <textarea
          className="border-2 border-black m-12 placeholder:text-xl placeholder:text-gray-700 p-4 rounded-md"
          cols="50"
          rows="10"
          value={results}
          onChange={(e) => setResults(e.target.value)}
          placeholder="Enter your Word her"
        ></textarea>
        <textarea
          className="border-2 border-black m-12 p-8 rounded-md text-xl text-gray-700 "
          cols="50"
          value={input?"Loading...":input.means}
          rows="10"
        ></textarea>
        
      </div>
      <div className="flex justify-between items-center ml-6 mr-6 mb-6">
          <IoIosVolumeHigh
            onClick={playAudio}
            className=" size-7 cursor-pointer"
          />
          <br />
          <button className=" bg-yellow-300 font-serif p-2 rounded-lg ">
            Translate
          </button>
        </div>
    </form>
  );
}

export default Dictionary;
