import { useState, useEffect } from "react";
import { getSavedComicIds } from "@/utils/localStorage";

const style = {
  container: `flex flex-wrap border m-2`,
  comic: `m-2 p-2 w-80 flex flex-col items-center text-center`,
  img: `rounded-lg scale-75`,
  button: `rounded-lg bg-red-800 p-2 m-2`,
};

export default function UserComics() {
  const [comicData, setComicData] = useState([]);

  useEffect(() => {
    setComicData(getSavedComicIds());
  }, []);

  console.log(comicData);

  return (
    <>
      <h1>Saved Comics</h1>
      <div className={style.container}>
        {comicData.map((comic) => {
          return (
            <div className={style.comic} key={comic.comicId}>
              <div>{comic.title}</div>
              <img className={style.img} src={comic.image} alt={comic.title} />
              <button className={style.button}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
