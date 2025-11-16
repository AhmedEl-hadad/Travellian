import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SectionHeader = ({
  display,
  title,
  subtitle,
  swiper,
}: {
  display: string;
  title: string;
  subtitle: string;
  swiper: number;
}) => {
  return (
    <div className="w-full">
      <main
        className={`flex justify-between items-center ${
          display === "reverse" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <aside className="flex flex-col gap-8">
          <h1 className="text-[40px] md:text-[54px] lg:text-[64px]">
            {title}
            <hr className="text-primary max-w-[227px] md:max-w-[365px] mt-5 h-[3px] bg-primary" />
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#767E86] rubik">
            {subtitle}
          </p>
        </aside>
        <aside className="hidden lg:flex gap-10">
          <button
            className={`bg-secondary hover:bg-primary p-5 rounded-2xl cursor-pointer text-white duration-300 swiper-arrow-prev-${swiper}`}
          >
            <FaChevronLeft />
          </button>
          <button
            className={`bg-secondary hover:bg-primary p-5 rounded-2xl cursor-pointer text-white duration-300 swiper-arrow-next-${swiper}`}
          >
            <FaChevronRight />
          </button>
        </aside>
      </main>
    </div>
  );
};

export default SectionHeader;
