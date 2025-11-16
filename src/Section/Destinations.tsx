import DesCard from "../components/DesCard";
import SectionHeader from "../components/SectionHeader";

const Destinations = () => {
  return (
    <section
      id="explore"
      className="py-[140px] w-full max-w-[1550px] px-4 mx-auto min-h-screen flex flex-col gap-3"
    >
      <SectionHeader
        display=""
        swiper={2}
        title="Popular Destinations"
        subtitle="Most popular destinations around the world, from historical places to natural wonders."
      />
      <DesCard />
    </section>
  );
};

export default Destinations;
