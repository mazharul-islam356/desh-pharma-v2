import { FaQuoteLeft } from "react-icons/fa";
import clintImg from '../../public/assets/images/clint.jpg'
import Image from "next/image";


const ClintTestmonial = () => {
    return (
        <div>
             <div className="mt-20 w-10/12 flex flex-col justify-items-center justify-center items-center h-[90vh] mx-auto">
            <h1 className="text-4xl font-semibold text-center">Clint Testmonial</h1>
           
        
        {/* clint 01 */}
        <div className="lg:mt-28 md:mt-20 mt-16">
       <div className="flex justify-center">
       <FaQuoteLeft className="text-6xl mb-5 text-center" />
       </div>
        <h5 className="w-4/6 mx-auto text-center text-2xl">When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play, and I’ve got 25 testimonial examples showing how customers can build hype for your business.</h5>

        <div className="flex items-center justify-center gap-2 mt-5">
           <Image src={clintImg} className="w-14 rounded-full" alt="clint_image" />

           <div>
           <h4 className="font-semibold text-lg">Fahim Montasir</h4>
           <span>Founder & CEO, Bd jobs</span>
           </div>
        </div>
        </div>

        {/* <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}


        </div>
        </div>
    );
};

export default ClintTestmonial;