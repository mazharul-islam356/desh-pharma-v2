import { FaQuoteLeft } from "react-icons/fa";
import clintImg from "../../public/assets/images/clint.jpg";
import clintImg02 from "../../public/assets/images/clint-image02.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ClintTestmonial = () => {
  return (
    <div>
      <div className="mt-20 w-10/12 flex flex-col justify-items-center justify-center items-center h-[90vh] mx-auto">
        <h1 className="text-4xl font-semibold text-center">Clint Testmonial</h1>

        <Swiper
         navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full "
        >
          <SwiperSlide>
            {/* clint 01 */}
            <div className="lg:mt-28 md:mt-20 mt-16 cursor-grab">
              <div className="flex justify-center">
                <FaQuoteLeft className="text-6xl mb-5 text-center" />
              </div>
              <h5 className="w-4/6 mx-auto text-center text-2xl">
                When I research companies online, I don’t just want to hear the
                company’s pitch. I want to hear from its customers. That’s where
                customer testimonials come into play, and I’ve got 25
                testimonial examples showing how customers can build hype for
                your business.
              </h5>

              <div className="flex items-center justify-center gap-2 mt-5 mb-10">
                <Image
                  src={clintImg}
                  className="w-14 h-14 rounded-full"
                  alt="clint_image"
                />

                <div>
                  <h4 className="font-semibold text-lg">Fahim Montasir</h4>
                  <span>Founder & CEO, Bd jobs</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* clint 02 */}
            <div className="lg:mt-28 md:mt-20 mt-16 cursor-grab">
              <div className="flex justify-center">
                <FaQuoteLeft className="text-6xl mb-5 text-center" />
              </div>
              <h5 className="w-4/6 mx-auto text-center text-2xl">
                Squad Innovators exceeded expectations with proactive suggestions,
                responsiveness, and dedication. From co-founders to team,
                working with them was a delight!{" "}
              </h5>

              <div className="flex items-center justify-center gap-2 mt-5">
                <Image
                  src={clintImg02}
                  className="w-14 h-14 rounded-full"
                  alt="clint_image"
                />

                <div>
                  <h4 className="font-semibold text-lg">Henric Enhebeld</h4>
                  <span>CEO, Klikit</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

       
      </div>
    </div>
  );
};

export default ClintTestmonial;
