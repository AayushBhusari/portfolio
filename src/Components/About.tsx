import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="px-6 py-12 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl text-center text-white font-bold mb-8">
        About Me...
      </h1>

      {/* Image and Description Section */}
      <div className="flex flex-col lg:flex-row items-center lg:gap-16 w-full max-w-6xl">
        {/* Event Image */}
        <Image
          src="/imgs/photo.png"
          alt="Event poster for Techotsav"
          height={800}
          width={800}
          className="rounded-lg shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[50%]"
        />

        {/* Description */}
        <div className="text-gray-300 mt-6 lg:mt-0 text-center sm:text-left max-w-xl leading-8 text-lg sm:text-xl lg:text-2xl">
          Beyond just working on cutting-edge projects, I thrive in leading
          teams, organizing workshops, and empowering others. Whether it’s
          managing an AI/ML research group, guiding students through robotics
          development, or organizing large-scale hackathons, my goal is always
          the same—to inspire and create impactful technology.
        </div>
      </div>
    </div>
  );
};

export default About;
