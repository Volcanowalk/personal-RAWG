import {
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaAndroid,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function GameCard({ img, title, platforms, id }) {
  const platformList = [];
  const platformTypes = [
    "PlayStation",
    "Xbox",
    "Nintendo",
    "macOS",
    "Linux",
    "Android",
    "iOS",
  ];

  platforms.forEach((platform) => {
    platformTypes.forEach((platformType) => {
      if (
        platform.name.includes(platformType) &&
        !platformList.includes(platformType)
      ) {
        platformList.push(platformType);
      }
    });
  });

  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="w-[300px] h-[350px] rounded-lg gamecard">
      <img
        src={img}
        alt={title}
        className="w-[300px] h-[200px] rounded-lg"
        onClick={handleCardClick}
      />
      <div className="mx-3 my-3">
        <h3
          className="text-slate-50 text-xl font-semibold"
          onClick={handleCardClick}
        >
          {title}
        </h3>
        <div className="text-slate-50 flex flex-wrap gap-3 my-1 items-center">
          {platformList.map((platform) => {
            if (platform.includes("PC")) {
              return <FaWindows key={platform} />;
            } else if (platform.includes("PlayStation")) {
              return <FaPlaystation key={platform} />;
            } else if (platform.includes("Xbox")) {
              return <FaXbox key={platform} />;
            } else if (platform.includes("Nintendo")) {
              return <BsNintendoSwitch key={platform} />;
            } else if (platform.includes("macOS")) {
              return <FaApple key={platform} />;
            } else if (platform.includes("Linux")) {
              return <FaLinux key={platform} />;
            } else if (platform.includes("iOS")) {
              return <IoLogoAppleAppstore key={platform} />;
            } else if (platform.includes("Android")) {
              return <FaAndroid key={platform} />;
            }
          })}
        </div>
        <button
          className="text-zinc-500 bg-zinc-800 hover:bg-zinc-700 
        px-2 rounded-lg"
        >
          +Add to wishlist
        </button>
      </div>
    </div>
  );
}
