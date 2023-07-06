// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
// 'use strict';

let date = new Date();
console.log(date.getTime());

const searchByCharacter = async (characterName) => {
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters?name=${encodeURIComponent(
      characterName
    )}&ts=${ts}&apikey=${MARVEL_API_KEY}&hash=${hashVal}`
  );

  if (!response.ok) {
    throw new Error("Character search failed");
  }

  const { data } = await response.json();

  if (data.results.length === 0) {
    throw new Error("Character not found");
  }

  const characterId = data.results[0].id;

  const apiUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=${ts}&apikey=${MARVEL_API_KEY}&hash=${hashVal}`;

  return fetch(apiUrl);
};

export default searchByCharacter;
