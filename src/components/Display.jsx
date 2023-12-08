import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { getAPIURL } from "../API.js";

let games = [];

export default function Display({ title }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (games.length > 0) {
      games = [];
    }
    fetch(getAPIURL(title), { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
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
  }, [title]);

  if (isLoading) {
    return (
      <h1 className="text-slate-50 text-6xl mx-7 my-3 text-center">
        Loading...
      </h1>
    );
  }

  return (
    <>
      <h1 className="text-slate-50 text-6xl mx-7 my-3 text-center">{title}</h1>
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
