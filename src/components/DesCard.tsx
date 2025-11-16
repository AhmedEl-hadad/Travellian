import { useEffect, useState } from "react";
import { getDestinationData } from "../Utils/destination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface DesData {
  id: number;
  destination: string;
  location: string;
  image: string;
}

const DesCard = () => {
  const [desData, setdesData] = useState<DesData[]>([]);

  useEffect(() => {
    getDestinationData().then((data) => {
      if (data) setdesData(data);
    });
  }, []);
  return (
    <>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".swiper-arrow-next-2",
            prevEl: ".swiper-arrow-prev-2",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {desData.map((item) => (
            <SwiperSlide>
              <p>{item.id}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DesCard;
