import { useState, useEffect } from "react";
import { getSavedComicIds } from "@/utils/localStorage";

export default function UserComics() {
  const [comicData, setComicData] = useState([]);

  useEffect(() => {
    setComicData(getSavedComicIds());
  }, []);

  console.log(comicData);
  return <div>{}</div>;
}
