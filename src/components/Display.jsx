import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { getAPIURL } from "../API.js";
import { useSearchParams } from "react-router-dom";

let games = [];

export default function Display({ title }) {
  const [isLoading, setIsLoading] = useState(true);
  const [noResult, setNoResult] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    setNoResult(false);
    if (games.length > 0) {
      games = [];
    }
    fetch(getAPIURL(title, searchParams.get("q")), { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        //If there is no result, set noResult to true
        if (data.results.length <= 0) {
          setNoResult(true);
        }
        data.results.forEach((game) => {
          const platforms = [];

          game.platforms.forEach((platform) => {
            platforms.push({
              id: platform.platform.id,
              name: platform.platform.name,
            });
          });

          games.push({
            id: game.id,
            image: game.background_image,
            name: game.name,
            rating: game.rating,
            released: game.released,
            platforms: platforms,
          });
        });
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [title, searchParams.get("q")]);

  if (isLoading) {
    return (
      <main className="flex justify-center items-center h-full">
        <div className="loader"></div>
      </main>
    );
  }

  if (noResult) {
    return (
      <h1 className="text-slate-50 text-4xl md:text-6xl md:mx-7 my-3 text-center">
        No Results
      </h1>
    );
  }

  return (
    <>
      <h1 className="text-slate-50 text-4xl md:text-6xl md:mx-7 my-3 text-center">
        {title}
      </h1>
      <div className="mx-7 my-7 flex gap-10 flex-wrap justify-center">
        {games.map((game) => {
          return (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.name}
              platforms={game.platforms}
              rating={game.rating}
              img={game.image}
            />
          );
        })}
      </div>
    </>
  );
}
