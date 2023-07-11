import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";

import searchByCharacter from "./api/api";
import {
  getItem,
  setItem,
  saveComicIds,
  getSavedComicIds,
} from "../utils/localStorage";

const inter = Inter({
  subsets: ["latin"],
});

const style = {
  formContainer: ` rounded-lg p-20 w-full text-center bg-red-800`,
  title: `text-3xl mb-6`,
  input: `rounded-lg p-4 mb-4 text-black`,
  button: `p-2 m-2 border rounded-lg bg-red-600`,
  comicGrid: `p-2 m-4 flex flex-wrap justify-center`,
  comicImageDiv: `border p-2 m-2 text-center rounded-lg bg-red-800/75`,
  comicTitle: `border-b-4 inline pb-2 border-b-slate-800`,
  comicImage: `border p-2 rounded-lg scale-75 bg-slate-800/75 hover:bg-slate-800`,
  comicButton: `border m-2 p-2 rounded-lg bg-slate-800`,
  comicButtons: `flex flex-col w-full items-center`,
};

export default function Home() {
  const [searchedCharacter, setSearchedCharacter] = useState([]);
  const [savedComicsIds, setSavedComicsIds] = useState(getSavedComicIds());
  const [searchInput, setSearchInput] = useState("");

  // console.log(savedComicsIds);

  useEffect(() => {
    saveComicIds(savedComicsIds);
  }, [savedComicsIds]);
  console.log(savedComicsIds);

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
        url: comic.urls[0],
      }));
      console.log(comicData);
      setSearchedCharacter(comicData);
      setSearchInput("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveComic = async (comicId) => {
    const comicToSave = searchedCharacter.find(
      (comic) => comic.comicId === comicId
    );
    console.log(comicToSave);

    try {
      setSavedComicsIds([...savedComicsIds, comicToSave]);
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
              <div className={style.comicTitle}> {character.title}</div>
              <img
                className={style.comicImage}
                src={character.image}
                alt={character.title}
              />
              <div className={style.comicButtons}>
                <button className={style.comicButton}>
                  <a
                    href={character.url.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Details
                  </a>
                </button>
                <button
                  onClick={() => handleSaveComic(character.comicId)}
                  className={style.comicButton}
                >
                  Save comic to favorites
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
