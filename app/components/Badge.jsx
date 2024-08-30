import Image from "next/image";

const Badge = ({ containerStyles }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src="/assets/badge.svg" fill className="object-contain" alt="" />
    </div>
  );
};

export default Badge;
