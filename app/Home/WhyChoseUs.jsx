
const WhyChoseUs = () => {
  return (
    <div>
       <div className="flex flex-col md:flex-row items-center bg-gray-100 lg:py-20 py-10 px-4 md:px-12 mt-10 lg:mt-14">
      {/* Left Section */}
      <div className="bg-blue-800 text-white flex-1 flex flex-col justify-center items-center p-6 py-16 rounded-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          GET VERIFIED MEDICINES
        </h2>
        <p className="text-sm md:text-base text-center lg:text-start">
          Genuine medicines and essentials at your convenience!
        </p>
        <div className="text-3xl font-semibold mt-4">DESH MODEL PHARMA</div>
      </div>

      {/* Right Section */}
      <div className="flex-1 text-gray-800 lg:mt-6 md:mt-0 items-center md:ml-8 text-center lg:text-start mt-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          Bangladesh's Most trusted retail chain
        </h2>
        <div className="flex items-center justify-center lg:justify-start mt-4">
          <div className="text-green-600 text-4xl mr-4">
            <i className="fas fa-store"></i>
          </div>
          <div>
            <p className="text-lg font-bold">1+ Outlets</p>
            <p className="text-sm text-gray-500">Locate Your Store</p>
          </div>
        </div>
  
      </div>
    </div>
    </div>
  );
};

export default WhyChoseUs;
