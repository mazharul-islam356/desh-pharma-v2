import React from 'react';
import team from '../../public/assets/images/team.png'
import Footer from './Footer';
import Image from 'next/image';

const Contact = () => {
    return (
        <section id="aboutUs">

        <div className='bg-blue-800 text-white lg:mt-10 mt-32'>

          <div className='w-10/12 mx-auto rounded-md bg-gray-300 lg:h-64 justify-between items-center lg:flex lg:px-10 lg:py-12 py-6 flex lg:flex-row flex-col-reverse  relative bottom-28'>

           <div>
           <div className='flex lg:flex-col flex-col justify-center lg:items-start items-center space-y-2'>
           <span className='text-blue-700'>Need Help</span>
            <h2 className='lg:text-4xl text-2xl text-black font-semibold'>We are here to help</h2>
            <span className='text-black text-center lg:text-start lg:text-lg text-sm'>Your health should not have to break the bank</span>
           </div>
            <div className='lg:flex-row flex justify-center lg:justify-normal lg:mt-4 mt-4'>
            <button className='bg-blue-800 lg:py-3 lg:px-3 px-3 py-2 rounded-md text-sm'>Contact Us Now</button>
            </div>
           </div>

           <div>
            <Image alt='help' className='lg:w-52 w-32' width={200} height={200} src={team}></Image>
           </div>


          </div>



        <h4 className='mb-8 lg:ml-24 text-center lg:text-start'>About us</h4>
      <div className='mb-10 w-9/12 mx-auto'>

        <div className='lg:flex gap-10 items-center lg:gap-9 '>
          <p className='lg:w-8/12 leading-7 text-justify'>
          Desh Pharmacy, the retail chain of AKS Khan Pharmaceuticals Ltd., is a new spin out venture from the Chairman of Bangladesh premier business conglomerates, A.K. Khan & Company Ltd.  with 70 years financial history, and a track record of successful investing, scaling and joint venturing. We work with industry leaders to source quality products for our esteemed and highly valued clients.</p>
          <p className='lg:w-8/12 leading-7 text-justify mt-10 lg:mt-0'>
          A vertically integrated entity, which maintains quality control starting from importing finished and semi-finished drugs, to assembly and retail. With retail operations with stores located in heavy traffic areas to serve the customers 24 hours. With a pharmacist on site, customers can receive consultation around the clock.</p>
        </div>
      </div>
        <hr className='mb-16 w-11/12 mx-auto' />
      <Footer></Footer>
        </div>

      
    </section>
    );
};

export default Contact;