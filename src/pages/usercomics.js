import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import { getSavedComicIds, removeComicId } from "@/utils/localStorage";

const style = {
  container: `flex flex-wrap`,
  title: `w-full h-full`,
  comic: `m-2 p-2 w-80 flex flex-col items-center text-center`,
  img: `rounded-lg scale-75`,
  button: `rounded-lg bg-red-800 p-2 m-2 w-full`,
};

export default function UserComics() {
  const [comicData, setComicData] = useState([]);

  useEffect(() => {
    setComicData(getSavedComicIds());
  }, []);

  const handleDeleteComic = (comicId) => {
    removeComicId(comicId);
  };

  console.log(comicData);

  return (
    <>
      <NavBar />
      <h1>Saved Comics</h1>
      <div className={style.container}>
        {comicData.map((comic) => {
          return (
            <div className={style.comic} key={comic.comicId}>
              <div className={style.title}>{comic.title}</div>
              <img className={style.img} src={comic.image} alt={comic.title} />
              <div>
                <button className={style.button}>
                  {" "}
                  <a href={comic.url.url}>Details</a>
                </button>
                <button
                  className={style.button}
                  onClick={() => handleDeleteComic(comic.comicId)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
