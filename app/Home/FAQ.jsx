import React from "react";
import Image from "next/image";

import medicine from "../../public/assets/images/pharmecyDokan.jpg";
import fruits from "../../public/assets/images//fruits.jpg";
import personalCare from "../../public/assets/images/personalCare.jpg";
import health from "../../public/assets/images/groceryShop.jpg";


const FAQ = () => {
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
    <hr className="mb-8"/>
      <div className="w-10/12 mx-auto flex flex-col justify-between mt-1">
      <div className="lg:flex mb-6 lg:h-[85vh] justify-between gap-5 items-center">
     

        <div  className="grid lg:grid-cols-2 gap-4 gap-x-6 justify-center lg:justify-normal">

          <div>
          <div className="relative lg:bottom-12 group bg-cover w-72">
        <Image className="rounded-xl" alt="img" height={100} width={300} src={fruits} />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center opacity-100 transition-opacity">
            <h2 className="text-white text-xl font-bold">Health & Nutrition</h2>
          </div>
        </div> 
          </div>

          <div>
          <div className="relative group bg-cover w-72">
        <Image className="rounded-xl" alt="img" height={100} width={300} src={health} />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center opacity-100 transition-opacity">
            <h2 className="text-white text-xl font-bold">Home Essentials</h2>
          </div>
        </div> 
          </div>

          <div>
          <div className="relative lg:bottom-10 group bg-cover w-72">
        <Image className="rounded-xl" alt="img" height={100} width={300} src={personalCare} />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center opacity-100 transition-opacity">
            <h2 className="text-white text-xl font-bold">Personal Care</h2>
          </div>
        </div> 
          </div>

          <div>
          <div className="relative group bg-cover w-72">
        <Image className="rounded-xl" alt="img" height={100} width={300} src={medicine} />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center opacity-100 transition-opacity">
            <h2 className="text-white text-xl font-bold">Medical</h2>
          </div>
        </div> 

          </div>

        </div>

        <div className="lg:w-5/12 mx-auto mt-10 lg:mt-0">
          <span className=" text-blue-700 tracking-wider uppercase mb-4">
            Our product
          </span>
          <h1 className="font-semibold text-3xl lg:text-5xl mt-2">What Do We Offer?</h1>

          <p className="lg:w-[39rem] text-justify lg:mt-5 mt-2 text-md">
            We supply a wide range of products such as medicine, baby care,
            sanitary, birth control, hygiene, diabetic kits & accessories,
            dental care and surgical items, etc.
          </p>

          <div className="mt-4 text-gray-800">
            <ul className="lg:space-y-2 space-y-1">
              <li>
                ✔️ Medicines include prescription, over-the-counter, and
                complementary medicines (herbal and vitamins)
              </li>
              <li>
                ✔️ Your trusted friendly vitamins and supplement store with
                products that are 100% authentic
              </li>
              <li>
                ✔️ Discover the best personal care products for all types of
                skin that are also safe to apply on skin
              </li>
              <li>
                ✔️ Essential things to buy that will make your life easier and
                help you maintain a healthy lifestyle
              </li>
            </ul>
          </div>


        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;


 
