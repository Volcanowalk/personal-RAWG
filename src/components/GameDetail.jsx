import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

let GAME_DATA = {
  released: null,
  img: null,
  rating: null,
  metacritic: null,
  name: null,
  description: null,
  website: null,
  platforms: null,
  developers: null,
  publishers: null,
  genres: null,
};
export default function GameDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${id}?key=0468e185f85e4442ad140aab01750fe6`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((data) => {
        GAME_DATA.description = data.description_raw;
        GAME_DATA.img = data.background_image;
        GAME_DATA.name = data.name;
        GAME_DATA.released = data.released;
        GAME_DATA.metacritic = data.metacritic;
        GAME_DATA.rating = `${data.rating} / 5`;
        GAME_DATA.website = data.website;

        //List of Genres
        let genreList = "";
        data.genres.forEach((genre, index) => {
          if (index === data.genres.length - 1) {
            genreList += genre.name;
          } else {
            genreList += `${genre.name}, `;
          }
        });
        GAME_DATA.genres = genreList;

        //Developers
        let developerList = "";
        data.developers.forEach((developer, index) => {
          if (index === data.developers.length - 1) {
            developerList += developer.name;
          } else {
            developerList += `${developer.name}, `;
          }
        });
        GAME_DATA.developers = developerList;

        //Publishers
        let publisherList = "";
        data.publishers.forEach((publisher, index) => {
          if (index === data.publishers.length - 1) {
            publisherList += publisher.name;
          } else {
            publisherList += `${publisher.name}, `;
          }
        });
        GAME_DATA.publishers = publisherList;

        //Platforms
        let platformList = "";
        data.platforms.forEach((platform, index) => {
          if (index === data.platforms.length - 1) {
            platformList += platform.platform.name;
          } else {
            platformList += `${platform.platform.name}, `;
          }
        });
        GAME_DATA.platforms = platformList;
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  function handleBack() {
    navigate(-1);
  }

  if (isLoading) {
    return (
      <h1 className="text-slate-50 text-6xl mx-7 my-3 text-center">
        Loading...
      </h1>
    );
  }

  return (
    <>
      <button
        className="text-slate-50 flex items-center text-xl px-2 py-2 rounded-lg 
      hover:bg-slate-700"
        onClick={handleBack}
      >
        <IoMdArrowRoundBack />
        Back
      </button>
      <h1 className="text-slate-50 text-4xl sm:text-6xl text-center">
        {GAME_DATA.name}
      </h1>
      <main className="w-full my-7 flex flex-col md:flex-row justify-center items-center">
        <img
          src={GAME_DATA.img}
          alt={`Image for ${GAME_DATA.name}`}
          className="border border-white h-auto w-3/4 md:w-2/3 
          lg:w-1/2 object-contain"
        />
        <div
          className="mx-3 my-3 px-3 py-3 md:mx-8 md:my-3 md:px-10 md:py-10 
        rounded-lg bg-slate-600 text-slate-50 max-w-[500px]"
        >
          Website:
          <a href={GAME_DATA.website} target="_blank" rel="noopener noreferrer">
            {GAME_DATA.website}
          </a>
          <br />
          Released: {GAME_DATA.released} <br />
          Metacritic Rating: {GAME_DATA.metacritic} <br />
          Overall Rating: {GAME_DATA.rating} <br />
          Genres: {GAME_DATA.genres} <br />
          Platforms: {GAME_DATA.platforms} <br />
          Developers: {GAME_DATA.developers} <br />
          Publishers: {GAME_DATA.publishers}
        </div>
      </main>
      <p className="text-slate-50 text-3xl sm:text-4xl px-2 py-3">
        Description
      </p>
      <div className="text-slate-50 px-10 py-3">{GAME_DATA.description}</div>
    </>
  );
}
