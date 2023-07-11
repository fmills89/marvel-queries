import { useState, useEffect } from "react";
import { getSavedComicIds } from "@/utils/localStorage";

export default function UserComics() {
  const [comicData, setComicData] = useState([]);

  useEffect(() => {
    setComicData(getSavedComicIds());
  }, []);

  console.log(comicData);

  return (
    <div>
      {comicData.map((comic) => {
        return (
          <div key={comic.comicId}>
            <div>{comic.title}</div>
            <img src={comic.image} alt={comic.title} />
          </div>
        );
      })}
    </div>
  );
}
