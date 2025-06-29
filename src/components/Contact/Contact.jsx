import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="text-white relative px-4 py-10 bg-[#201E43] shadow-lg sm:rounded-3xl sm:p-20">

            <div className="text-center pb-6">
              <h1 className="text-3xl">Contact Us!</h1>
              <p className="text-gray-300">
                Fill up the form below to send us a message.
              </p>
            </div>

            <form>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="_subject"
              />

              <textarea
                className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                name="message"
                style={{ height: '121px' }}
              ></textarea>

              <div className="flex justify-between">
                <input
                  className="shadow bg-[#BCCCDC] hover:bg-[#9dc2e7] text-[#201E43] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send ➤"
                />
                <input
                  className="shadow bg-[#BCCCDC] hover:bg-[#9dc2e7] text-[#201E43] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                />
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
