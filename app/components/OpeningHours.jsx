import Image from "next/image";
import Badge from "./Badge";

const OpeningHours = () => {
  return (
    <section className="flex bg-primary h-[60vh] xl:h-[80vh]">
      <div className="hidden relative xl:flex flex-1 justify-center items-center">
        <div className="w-full h-full absolute z-40 top-0 bg-black/60" />
        <Image
          src="/assets/opening-hours/img.png"
          fill
          quality={100}
          priority
          className="object-cover"
        />
        <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
      </div>
      <div
        className={`flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center 
        relative`}
      >
        <div className="w-full h-full absolute z-10 top-0 bg-black/[0.85]" />
        <div className="z-20">
          <h2 className="h2 text-white mb-4">Opening Hours</h2>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
