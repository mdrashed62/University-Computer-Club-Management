import banner from "../../assets/images/bannerBG.jpg";
import sidePhoto from "../../assets/images/images.png";
import { FaCalendar, FaMapMarkerAlt, FaStopwatch } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full"
    >
      <div className="max-w-7xl w-full px-4 md:px-6 lg:px-0 mx-auto flex flex-col lg:p-24 min-h-[70vh] lg:min-h-[600px] lg:flex-row justify-between items-center gap-8 space-y-4 lg:py-16 relative">
        <div className="lg:w-1/2 space-y-5 flex flex-col lg:flex-none">
          <h1 className="font-bold lg:text-7xl text-3xl text-white">
            City University Computer Club
          </h1>
          <p className="lg:text-xl text-white">
            A community for tech enthusiasts from City University, where we
            explore the latest advancements in computer science and technology.
          </p>
          <div className="space-x-3">
            <button className="bg-[#C3E92D] font-semibold lg:py-3 lg:px-4 py-2 px-3 hover:bg-black hover:text-white text-black rounded-sm">
              Join The Club
            </button>
            <button className="text-[#127CC1] font-semibold bg-white lg:py-3 lg:px-4 py-2 px-3 rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-black/70 shadow-2xl lg:w-96 rounded-lg overflow-hidden flex flex-col items-center mx-auto">
          <div className="bg-[#C3E92D] rounded-t-lg p-3 w-full">
            <h1 className="font-semibold text-black text-center">NEW EVENT</h1>
          </div>
          <figure className="relative">
            <img
              className="w-full h-48 object-cover"
              src={sidePhoto}
              alt="Event"
            />
          </figure>
          <div className="text-white p-4 space-y-2">
            <h1 className="lg:text-2xl text-xl font-medium">
              Computer Programming
            </h1>
            <p className="flex items-center lg:font-medium gap-2">
              <FaCalendar className="text-[#C3E92D]" /> OCT 20, 2024
            </p>
            <p className="flex items-center lg:font-medium gap-2">
              <FaStopwatch className="text-[#C3E92D]" /> START 6:00 AM - UNTIL
              FINISH
            </p>
            <p className="flex items-center lg:font-medium gap-2">
              <FaMapMarkerAlt className="text-[#C3E92D]" /> LOCATION DETAILS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
