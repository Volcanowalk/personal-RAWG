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

export default function Sidebar() {
  const h3Style = "font-bold text-2xl";
  const h4Style = "text-xl";
  const sectionStyle = "flex flex-col items-start w-full my-2";
  const divStyle =
    "my-2 flex items-center gap-2 hover:bg-zinc-800 px-1 py-1" +
    " rounded-lg hover:cursor-pointer";

  return (
    <div
      className="text-slate-50 xl:col-span-1 
  hidden md:flex md:flex-col row-span-6 md:items-center py-3 px-6 
  overflow-y-scroll"
    >
      <div className={sectionStyle}>
        <h3 className={h3Style}>New Releases</h3>
        <div className={divStyle}>
          <FaStar />
          <h4 className={h4Style}>Last 30 days</h4>
        </div>
        <div className={divStyle}>
          <FaFire />
          <h4 className={h4Style}>This Week</h4>
        </div>
        <div className={divStyle}>
          <GrLinkNext />
          <h4 className={h4Style}>Next Week</h4>
        </div>
      </div>
      <div className={sectionStyle}>
        <h3 className={h3Style}>Top</h3>
        <div className={divStyle}>
          <FaTrophy />
          <h4 className={h4Style}>GOTY</h4>
        </div>
        <div className={divStyle}>
          <FaChartLine />
          <h4 className={h4Style}>Popular</h4>
        </div>
        <div className={divStyle}>
          <FaCrown />
          <h4 className={h4Style}>All time best</h4>
        </div>
      </div>
      <div className={sectionStyle}>
        <h3 className={h3Style}>Platforms</h3>
        <div className={divStyle}>
          <FaWindows />
          <h4 className={h4Style}>PC</h4>
        </div>
        <div className={divStyle}>
          <FaPlaystation />
          <h4 className={h4Style}>PlayStation</h4>
        </div>
        <div className={divStyle}>
          <FaXbox />
          <h4 className={h4Style}>Xbox</h4>
        </div>
        <div className={divStyle}>
          <BsNintendoSwitch />
          <h4 className={h4Style}>Nintendo</h4>
        </div>
      </div>
      <div className={sectionStyle}>
        <h3 className={h3Style}>Genres</h3>
        <div className={divStyle}>
          <GiCrossedSwords />
          <h4 className={h4Style}>Action</h4>
        </div>
        <div className={divStyle}>
          <FaChess />
          <h4 className={h4Style}>Strategy</h4>
        </div>
        <div className={divStyle}>
          <GiSwordman />
          <h4 className={h4Style}>RPG</h4>
        </div>
        <div className={divStyle}>
          <FaGun />
          <h4 className={h4Style}>Shooter</h4>
        </div>
        <div className={divStyle}>
          <GiSteeringWheel />
          <h4 className={h4Style}>Racing</h4>
        </div>
        <div className={divStyle}>
          <FaPlaystation />
          <h4 className={h4Style}>Sports</h4>
        </div>
      </div>
    </div>
  );
}
