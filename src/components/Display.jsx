import { useEffect, useState } from "react";
import GameCard from "./GameCard";

export default function Display({ title }) {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rawg.io/api/games?key=API_KEY&dates=2023-11-05,2023-12-05" +
        "&ordering=-rating",
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        data.results.forEach((game) => {
          const platforms = [];
          const genres = [];
          let esrb_rating = "Not rated";

          game.platforms.forEach((platform) => {
            platforms.push(platform.name);
          });

          game.genres.forEach((genre) => {
            genres.push(genre.name);
          });

          if (game.esrb_rating) {
            esrb_rating = game.esrb_rating.name;
          }

          setGames([
            ...games,
            {
              image: game.background_image,
              name: game.name,
              rating: game.rating,
              released: game.released,
              platforms: platforms,
              genres: genres,
              esrb: esrb_rating,
            },
          ]);
        });
      })
      .catch((error) => console.error(error))
      .finally(setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <h1 className="text-slate-50 text-6xl mx-7 my-3 text-center">
        Loading...
      </h1>
    );
  } else {
    console.log(games);
  }

  return (
    <>
      <h1 className="text-slate-50 text-6xl mx-7 my-3 text-center">{title}</h1>
      <div className="mx-7 my-7 flex gap-10 flex-wrap justify-center">
        {games.map((game) => {
          <GameCard
            key={game.name}
            title={game.name}
            platforms={game.platforms}
            rating={game.rating}
            img={game.image}
          />;
        })}
      </div>
    </>
  );
}
