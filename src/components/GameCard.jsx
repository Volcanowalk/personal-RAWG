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
import { useNavigate, useOutletContext } from "react-router-dom";

export default function GameCard({ img, title, platforms, id, tabIndex }) {
  const platformList = [];
  const platformTypes = [
    "Web",
    "PC",
    "PlayStation",
    "Xbox",
    "Nintendo",
    "macOS",
    "Linux",
    "Android",
    "iOS",
  ];
  const [cart, setCart] = useOutletContext();

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

  function handleAdd() {
    if (!alreadyAdded()) {
      setCart((prevCart) => {
        return [...prevCart, { id: id, image: img, name: title }];
      });
    }
  }

  function alreadyAdded() {
    let isAdded = false;
    cart.forEach((item) => {
      if (item.name === title) {
        isAdded = true;
      }
    });
    return isAdded;
  }

  function onEnterPressed(e) {
    if (e.key === "Enter") {
      handleCardClick();
    }
  }

  return (
    <div
      className="w-[300px] h-[350px] rounded-lg gamecard"
      tabIndex={tabIndex + 1}
      onKeyUp={(e) => onEnterPressed(e)}
    >
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
            if (platform.includes("PC") || platform.includes("Web")) {
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
          onClick={handleAdd}
          className="text-zinc-500 bg-zinc-800 hover:bg-zinc-700 
        px-2 rounded-lg"
        >
          +Add to wishlist
        </button>
      </div>
    </div>
  );
}
