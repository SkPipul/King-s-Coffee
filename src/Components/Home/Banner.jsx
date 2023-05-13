import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { BiRadioCircleMarked } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <section>
      {/* banner */}
      <div className="px-5 bg-[#d1bcb4]">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="md:mx-16 sm:mx-10">
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div className="mt-16">
                <h2 className="lg:text-5xl text-4xl font-extrabold mb-7">
                  Organic Coffee <br />
                  For You
                </h2>
                <p>
                  The coffee is brewed by pure organic green coffee beans over
                  hot coals in a brazier. given an opportunity to sample.
                </p>
                <button className="btn bg-[#6F4E37] mt-7 border-none">
                  Explore More
                </button>
              </div>
              <img
                className="w-[90%] mx-auto"
                src="https://kaffen.bslthemes.com/wp-content/uploads/2022/03/about_img.png"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div className="mt-16">
                <h2 className="lg:text-5xl text-4xl font-extrabold mb-7">
                  Roasted Coffee
                  <br />
                  For You
                </h2>
                <p>
                  The coffee is brewed by first roasting the green coffee beans
                  over hot coals in a brazier. given an opportunity to sample.
                </p>
                <button className="btn bg-[#6F4E37] mt-7 border-none">
                  Explore More
                </button>
              </div>
              <img
                className="w-[65%] mx-auto"
                src="https://xpressrow.com/html/cafena/demo_assets/images/banner/img_01.png"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          {/* <ScrollTrigger> */}
          <div className="grid lg:grid-cols-3 grid-cols-2 border-t-2 border-[#6F4E37] my-16">
            <p className="mt-10 mx-auto">
              <span className="lg:text-4xl text-2xl font-extrabold flex items-center">
                <BiRadioCircleMarked className="text-[#6F4E37]" />
                <CountUp start={0} end={1000} delay={1} duration={5} />+<br />
              </span>
              Customer using this App & its free
            </p>
            <p className="mt-10 mx-auto">
              <span className="lg:text-4xl text-2xl font-extrabold flex items-center">
                <BiRadioCircleMarked className="text-[#6F4E37]" />
                <CountUp start={0} end={50} delay={1} duration={6} />+ <br />
              </span>
              Unique Coffee's Available
            </p>
            <p className="mt-10 mx-auto">
              <span className="lg:text-4xl text-2xl font-extrabold flex items-center">
                <BiRadioCircleMarked className="text-[#6F4E37]" />
                <CountUp start={0} end={95} delay={1} duration={6} />% <br />
              </span>
              Better and Authentic Taste
            </p>
          </div>
          {/* </ScrollTrigger> */}
        </Swiper>
        <BsArrowDown className="mx-auto text-3xl animate-bounce" />
        <p className="text-center pb-4 font-bold">
          S{""} C{""} R{""} O{""} L{""} L
        </p>
      </div>
    </section>
  );
};

export default Banner;
