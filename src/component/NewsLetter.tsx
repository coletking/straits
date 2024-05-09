import React from "react";

function NewsLetter() {
  return (
    <div>
      <div className="w-full">
        <div className="container flex flex-col gap-y-8 md:gap-y-10 mx-auto px-5 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-gray-200 bg-gray-800 rounded-2xl">
          <div className="w-full text-center">
            <div className="mb-4 text-white text-3xl md:text-4xl font-extrabold">
              Sign up for our newsletter
            </div>

            <div className="text-base sm:text-lg">
              Be the first to know about releases and industry news and
              insights.
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="sm:w-2/4 sm:max-w-[400px] h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow"
              />

              <button
                type="submit"
                className="sm:w-1/4 sm:max-w-[180px] h-12 text-white bg-purple-600 rounded-lg shadow transition-all duration-300 ease-in-out hover:bg-purple-700"
              >
                Subscribe
              </button>
            </div>

            <div className="mt-3 text-sm text-center">
              We care about your data in our{" "}
              <u className="cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-50">
                privacy policy
              </u>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
