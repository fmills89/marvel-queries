import React, { useState } from "react";
import { Inter } from "next/font/google";

import searchByCharacter from "./api/api";

const inter = Inter({
  subsets: ["latin"],
});

const style = {
  formContainer: `border-2 rounded-lg p-20 w-full text-center bg-red-800`,
  title: `text-3xl mb-6 `,
  input: `rounded-lg p-4 mb-4 text-black`,
  button: `p-2 m-2 border rounded-lg bg-red-600`,
  comicGrid: `p-4 m-4 flex flex-wrap justify-center`,
  comicImageDiv: `border p-2 m-2 text-center rounded-lg bg-red-800/75`,
  comicImage: `m-4 p-4 border rounded-lg scale-75 bg-slate-800/75 hover:bg-slate-800`,
};

export default function Home() {
  const [searchedCharacter, setSearchedCharacter] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // console.log(searchedCharactersId);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await searchByCharacter(searchInput);
      // console.log(response.json());

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const { data } = await response.json();
      console.log(data);

      const comicData = data.results.map((comic) => ({
        comicId: comic.id,
        title: comic.title,
        characters: comic.characters.items,
        image: comic.thumbnail.path + "." + comic.thumbnail.extension,
      }));
      console.log(comicData);
      setSearchedCharacter(comicData);
      setSearchInput("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className={`flex flex-col items-center p-4 ${inter.className}`}>
        <div className={style.formContainer}>
          <h1 className={style.title}>Marvel Query</h1>
          <form onSubmit={handleFormSubmit}>
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={style.input}
              type="text"
              placeholder="Enter Marvel Character"
            />
            <button className={style.button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </main>
      <div className={style.comicGrid}>
        {searchedCharacter.map((character) => {
          return (
            <div className={style.comicImageDiv} key={character.comicId}>
              {character.title}
              <img
                className={style.comicImage}
                src={character.image}
                alt={character.title}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
