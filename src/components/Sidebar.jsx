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

export default function Sidebar() {
  const h3Style = "font-bold text-2xl";
  const h4Style = "text-xl";
  const sectionStyle = "flex flex-col items-start w-full my-2";
  const linkStyle =
    "my-2 flex items-center gap-2 hover:bg-zinc-800 px-1 py-1" +
    " rounded-lg hover:cursor-pointer w-full";

  return (
    <div
      className="text-slate-50 sm:col-span-1 
  hidden sm:flex sm:flex-col row-span-6 sm:items-center py-3 px-6 
  overflow-y-scroll sidebar"
    >
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
    </div>
  );
}
