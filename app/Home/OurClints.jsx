import Marquee from "react-fast-marquee";

const OurClints = () => {
    return (
        <div className="w-11/12 mx-auto mt-40">
        <div className="flex items-center gap-2">
      <h3 className="text-xl font-semibold border-r-2 h-10 border-black pr-2 flex items-center">Our Clints</h3>
      
     <div>
     <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
     </div>
    </div>
    </div>
    );
};

export default OurClints;