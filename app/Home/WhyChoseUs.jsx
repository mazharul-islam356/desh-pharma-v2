
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import staff from '../../public/assets/images/staff.png'
import products from '../../public/assets/images/products.png'
import community from '../../public/assets/images/community-removebg-preview.png'

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const WhyChoseUs = () => {
  return (
    <div>
      <div className="mt-20 w-10/12 flex flex-col justify-items-center justify-center items-center h-[90vh] mx-auto">
        <h1 className="text-3xl font-semibold text-center">Why Choose Desh Pharam?</h1>

        <Swiper
         navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full "
        >
          <SwiperSlide>
            {/* slide 01 */}
            <div className="lg:mb-40 lg:mt-20 mt-16 flex justify-around items-center">
              
              <div>
                <Image width={300} alt="whyChooseUs01" src={staff}></Image>
              </div>

              <div>
                <h1 className="text-3xl font-semibold">Expert Staff</h1>
                <p className="w-[30rem] mx-auto mt-1">Our expert pharmacists and friendly staff are here to assist you.
                With their extensive knowledge, they are always ready to provide helpful advice and support.</p>
              </div>

             
            </div>
          </SwiperSlide>

          <SwiperSlide>
            
            {/* slide 01 */}
            <div className="lg:mb-40 lg:mt-20 mt-16 flex justify-around items-center">
              
              <div>
                <Image width={300} alt="whyChooseUs02" src={products}></Image>
              </div>

              <div>
                <h1 className="text-3xl font-semibold">Wide Range of Products</h1>
                <p className="w-[30rem] mx-auto mt-1">Your one-stop health solution.
Comprehensive range of medicines and health products.
For all your health needs.</p>
              </div>

             
            </div>

          </SwiperSlide>

          <SwiperSlide>
            
            {/* slide 01 */}
            <div className="lg:mb-40 lg:mt-20 mt-16 flex justify-around items-center">
              
              <div>
                <Image width={300} alt="whyChooseUs03" src={community}></Image>
              </div>

              <div>
                <h1 className="text-3xl font-semibold">Community Focused</h1>
                <p className="w-[30rem] mx-auto mt-1">We care about the health and well-being of our community. We strive to make a positive impact on the lives of those around us. Together, we can build a healthier and happier community.</p>
              </div>

             
            </div>

          </SwiperSlide>
        </Swiper>

       
      </div>
    </div>
  );
};

export default WhyChoseUs;
