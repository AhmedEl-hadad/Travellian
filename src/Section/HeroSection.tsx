import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { getHeroData } from "../Utils/hero";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Hero from "../components/Hero";

interface HeroData {
  id: number;
  image: string;
}

const HeroSection = () => {
  const [heroData, setHeroData] = useState<HeroData[]>([]);

  useEffect(() => {
    getHeroData().then((data) => {
      if (data) setHeroData(data);
    });
  }, []);

  if (heroData.length === 0) return <p>Loading...</p>;

  return (
    <section className="hero relative w-full h-[200vh] md:h-screen">
      <Swiper
        navigation={{
          nextEl: ".swiper-arrow-next",
          prevEl: ".swiper-arrow-prev",
        }}
        pagination={{
          el: ".swiper-pagination-custom", // 👈 custom pagination container
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        loop={true}
        direction="vertical"
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        className="mySwiper w-full h-full"
      >
        {heroData.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={`Hero ${item.id}`}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
        {/* Controls */}
        <div className="absolute hidden top-1/2 -translate-y-1/2 right-5 md:flex items-center justify-center flex-col z-10 gap-3">
          <div className="swiper-pagination-custom flex items-center flex-col gap-3"></div>
          <div className="flex flex-col gap-3">
            <button className="swiper-arrow-prev text-white hover:text-primary cursor-pointer">
              <FaChevronUp />
            </button>
            <button className="swiper-arrow-next text-white hover:text-primary cursor-pointer">
              <FaChevronDown />
            </button>
          </div>
        </div>
      </Swiper>
      {/* Components */}
      <Hero />
    </section>
  );
};

export default HeroSection;
