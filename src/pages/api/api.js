require("dotenv").config();

let date = new Date();
console.log(date.getTime());

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const ts = process.env.NEXT_PUBLIC_TS;
const hashVal = process.env.NEXT_PUBLIC_HASH;

const searchByCharacter = async (characterName) => {
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters?name=${encodeURIComponent(
      characterName
    )}&ts=${ts}&apikey=${API_KEY}&hash=${hashVal}`
  );

  if (!response.ok) {
    throw new Error("Character search failed");
  }

  const { data } = await response.json();

  if (data.results.length === 0) {
    throw new Error("Character not found");
  }

  const characterId = data.results[0].id;

  const apiUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=${ts}&apikey=${API_KEY}&hash=${hashVal}`;

  return fetch(apiUrl);
};

export default searchByCharacter;
