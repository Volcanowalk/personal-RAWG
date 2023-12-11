export function getAPIURL(title, keyword) {
  let API_KEY = "0468e185f85e4442ad140aab01750fe6";

  //0468e185f85e4442ad140aab01750fe6
  let api_url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=30`;
  if (title === "Last 30 Days") {
    api_url += `&dates=2023-11-05,2023-12-05&ordering=-added`;
  } else if (title === "This Week") {
    api_url += `&dates=2023-11-30,2023-12-07&ordering=-added`;
  } else if (title === "Next Week") {
    api_url += `&dates=2023-12-08,2023-12-15&ordering=-added`;
  } else if (title === "Game of the Year") {
    api_url += `&dates=2023-01-01,2023-12-31&ordering=-added`;
  } else if (title === "Popular in 2022") {
    api_url += `&dates=2022-01-01,2022-12-31&ordering=-added`;
  } else if (title === "All Time Best") {
    api_url += `&ordering=-added`;
  } else if (title === "PC") {
    api_url += "&platforms=4&ordering=-added";
  } else if (title === "Xbox") {
    api_url += "&platforms=1,186&ordering=-added";
  } else if (title === "PlayStation") {
    api_url += "&platforms=18,187&ordering=-added";
  } else if (title === "Nintendo") {
    api_url += "&platforms=7&ordering=-added";
  } else if (title === "Action") {
    api_url += "&genres=action&ordering=-added";
  } else if (title === "Strategy") {
    api_url += "&genres=strategy&ordering=-added";
  } else if (title === "RPG") {
    api_url += "&genres=role-playing-games-rpg&ordering=-added";
  } else if (title === "Shooter") {
    api_url += "&genres=shooter&ordering=-added";
  } else if (title === "Racing") {
    api_url += "&genres=racing&ordering=-added";
  } else if (title === "Sports") {
    api_url += "&genres=sports&ordering=-added";
  } else if (title === "Search Results") {
    api_url += `&search=${keyword}`;
  }

  return api_url;
}
