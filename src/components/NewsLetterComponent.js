import React from "react";

const NewsLetterComponent = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 bg-[#24262b] text-white">
      <div className="mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1>Need advice on how to improve your flow?</h1>
          <p>Sign Up to join our NewsLetter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <input
              type="email"
              placeholder="email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="text-white bg-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 border-none">
              Notify Me
            </button>
          </div>
          <p>
            We are concerned about the security of your data, Read{" "}
            <span className="text-[#00df9a]">Privacy policy</span>
          </p>
        </div>
        <hr className="my-8 bg-gray-700 border-1 gark:bg-gray-700" />
      </div>
    </div>
  );
};

export default NewsLetterComponent;
