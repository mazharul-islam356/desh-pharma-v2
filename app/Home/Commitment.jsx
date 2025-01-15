import Image from "next/image";
import pharmacy from '../../public/assets/images/pharmecyDokan.jpg'


const Commitment = () => {
    return (
        <div className="w-10/12 mx-auto mt-20">

           <div className="lg:flex mb-6 lg:h-[85vh] justify-around gap-5 items-center">

            {/* img */}
             <div>
                <Image className="shadow-sm border lg:mt-5 rounded-xl" alt="commitment" width={500} height={600} src={pharmacy}></Image>
              </div>

              <div className="lg:mt-0 mt-6">
              <span className=" text-blue-700 tracking-wider uppercase mb-4  lg:mt-0">About Desh Pharma</span>
              <h1 className="font-semibold text-3xl lg:text-5xl mt-2">
              Why Desh Pharma?
              </h1>

              <p className="lg:w-[39rem] text-justify lg:mt-5 mt-2 text-md">
              Desh Model Pharma has been serving the community since 2025. Being a community staple, we have proudly taken on the role of improving people's health care by providing fast and personalized service. We strive to make every experience you have with us a great one. At our pharmacy, your family is our family. Our friendly pharmacists are dedicated to ensuring that you receive expert care on every visit. Stop by today and let AKS Pharmacy become part of your family.
              </p>
             

            

              
              </div>

             </div>


        </div>
    );
};

export default Commitment;