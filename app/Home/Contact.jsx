import React from 'react';
import { FaAddressBook, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section id="contact">
      <div className="mt-24 w-11/12 mx-auto mb-10">
      
          <h1 className="text-4xl font-semibold text-center">Contacts</h1>
        
       

        <div>
          <div className="grid md:grid-cols-2  gap-4 justify-center items-center justify-items-center">
            {/* 1st side */}
            <div className='mt-16'>
              <h1 className="font-semibold text-xl mb-4 text-start">
                Contacts with us:
              </h1>

              <div className="grid lg:grid-cols-2 gap-x-2 gap-y-4 mt-2 text-sm mr-8 justify-items-start">
                <div className="flex gap-1 justify-center items-center">
                  <FaPhoneAlt/>
                 <span className="font-semibold">Phone:</span> <span>+8801866186426(What&lsquo;sapp)</span>
                </div>

                <div className="flex gap-1 justify-center items-center">
                  <MdEmail />
                  <span className="font-semibold">Email:</span>
                  <span>deshpharma@gmail.com</span>
                </div>

                <div className="flex gap-1 justify-center items-center">
                  <FaAddressBook />
                  <span className="font-semibold">Address:</span>
                   <span>Mirpur, Dhaka, Bangladesh</span>
                </div>

                <div className="flex gap-1 mr-4 justify-center items-center">
                  <FaLinkedin />
                  <span className="font-semibold">Linkdin:</span>
                   dehspharma-544s72fg
                </div>
              </div>
              <div>
                <iframe
                  className="lg:w-[40rem] mx-auto lg:max-w-[40rem] max-w-[20rem] min-w-[18rem] shadow-md lg:h-[25rem] h-80 mt-6 rounded-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d543.0108002183805!2d90.49199253858728!3d23.714312110328734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7a02d0447ab%3A0xa8bf5aa33e56204a!2zU3RhZmYgUXVhcnRlciAo4Ka44KeN4Kaf4Ka-4KarIOCmleCni-Cnn-CmvuCmsOCnjeCmn-CmvuCmsCk!5e0!3m2!1sen!2sbd!4v1709567045858!5m2!1sen!2sbd"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div>
              <div className="lg:flex flex-col justify-center items-center justify-items-center">
                <div className="ml-[8.9rem] flex lg:justify-start justify-center items-center justify-items-center lg:w-full w-40">
                  <iframe
                    className="lg:w-[14rem] w-40 lg:mb-0 mb-4 mt-10 mr-14 lg:h-[16rem] md:w-[30rem] md:h-[13rem]"
                    src="https://lottie.host/embed/26d15aff-3756-4333-a44f-ee00eb9002b8/VBPuH5Qfjv.json"
                  ></iframe>
                </div>

                <form className="lg:w-[25rem] w-[90%] mx-auto" >
                  <div className="flex gap-4">
                    <div className="">
                      <div className="relative lg:w-full  h-10">
                        <input
                        
                          name="first_name"
                          type="name"
                          required
                          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                          placeholder=" "
                        />
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                          First Name
                        </label>
                      </div>
                    </div>

                    <div>
                      <div className="relative lg:w-full  h-10">
                        <input
                       
                          type="name"
                          required
                          name="last_name"
                          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                          placeholder=" "
                        />
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                          Last Name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="relative lg:w-full  h-10">
                      <input
                     
                        required
                        type="email"
                        name="email"
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                      />
                      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Email
                      </label>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="relative lg:w-full">
                      <textarea
                    
                        name="message"
                        className="peer h-full min-h-[150px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      ></textarea>
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Message
                      </label>
                    </div>

                   <div className='flex justify-center'>
                   <button className="bg-[#00a89d] mt-6 text-white rounded-md py-2 px-10 gap-2 justify-center flex items-center text-center">Send
                 <IoMdSend className="text-lg"></IoMdSend>
                </button>
                   </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Contact;