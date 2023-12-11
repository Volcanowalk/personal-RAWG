import {
  FaStar,
  FaFire,
  FaTrophy,
  FaCrown,
  FaChartLine,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaChess,
} from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaGun } from "react-icons/fa6";
import { GiSteeringWheel, GiSwordman, GiCrossedSwords } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export default function Sidebar({ toggleMenu, setToggleMenu }) {
  const h3Style = "font-bold text-2xl";
  const h4Style = "text-xl";
  const sectionStyle = "flex flex-col items-start w-full my-2";
  const linkStyle =
    "my-2 flex items-center gap-2 hover:bg-zinc-800 px-1 py-1" +
    " rounded-lg hover:cursor-pointer w-full";
  let sidebarStyle =
    "text-slate-50 md:col-span-1 md:block row-span-6 h-full" +
    " md:items-center md:bg-transparent py-3 px-6 md:static md:max-w-[250px]" +
    " overflow-y-scroll sidebar";

  if (toggleMenu) {
    sidebarStyle += " bg-black top-0 left-0 fixed rounded-r-xl slideIn";
  } else {
    sidebarStyle += " hidden";
  }

  function handleClose() {
    setToggleMenu((prev) => !prev);
  }

  return (
    <aside className={sidebarStyle}>
      <button
        className="text-slate-50 md:hidden text-3xl"
        onClick={handleClose}
      >
        <IoMdClose />
      </button>
      <div className={sectionStyle}>
        <h3 className={h3Style}>New Releases</h3>
        <Link to="last30days" className={linkStyle}>
          <FaStar />
          <h4 className={h4Style}>Last 30 days</h4>
        </Link>
        <Link to="thisweek" className={linkStyle}>
          <FaFire />
          <h4 className={h4Style}>This Week</h4>
        </Link>
        <Link to="nextweek" className={linkStyle}>
          <GrLinkNext />
          <h4 className={h4Style}>Next Week</h4>
        </Link>
      </div>
      <div className={sectionStyle}>
        <h3 className={h3Style}>Top</h3>
        <Link to="goty" className={linkStyle}>
          <FaTrophy />
          <h4 className={h4Style}>GOTY</h4>
        </Link>
        <Link to="popular" className={linkStyle}>
          <FaChartLine />
          <h4 className={h4Style}>Popular</h4>
        </Link>
        <Link to="alltimebest" className={linkStyle}>
          <FaCrown />
          <h4 className={h4Style}>All time best</h4>
        </Link>
      </div>
      <div className={sectionStyle}>
        <h3 className={h3Style}>Platforms</h3>
        <Link to="pc" className={linkStyle}>
          <FaWindows />
          <h4 className={h4Style}>PC</h4>
        </Link>
        <Link to="playstation" className={linkStyle}>
          <FaPlaystation />
          <h4 className={h4Style}>PlayStation</h4>
        </Link>
        <Link to="xbox" className={linkStyle}>
          <FaXbox />
          <h4 className={h4Style}>Xbox</h4>
        </Link>
        <Link to="nintendo" className={linkStyle}>
          <BsNintendoSwitch />
          <h4 className={h4Style}>Nintendo</h4>
        </Link>
      </div>
      <div className={sectionStyle}>
        <h3 className={h3Style}>Genres</h3>
        <Link to="action" className={linkStyle}>
          <GiCrossedSwords />
          <h4 className={h4Style}>Action</h4>
        </Link>
        <Link to="strategy" className={linkStyle}>
          <FaChess />
          <h4 className={h4Style}>Strategy</h4>
        </Link>
        <Link to="rpg" className={linkStyle}>
          <GiSwordman />
          <h4 className={h4Style}>RPG</h4>
        </Link>
        <Link to="shooter" className={linkStyle}>
          <FaGun />
          <h4 className={h4Style}>Shooter</h4>
        </Link>
        <Link to="racing" className={linkStyle}>
          <GiSteeringWheel />
          <h4 className={h4Style}>Racing</h4>
        </Link>
        <Link to="sports" className={linkStyle}>
          <FaPlaystation />
          <h4 className={h4Style}>Sports</h4>
        </Link>
      </div>
    </aside>
  );
}
