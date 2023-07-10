export function setItem(key, value) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
}

export function getItem(key) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
}

export const getSavedComicIds = () => {
  if (typeof window !== "undefined") {
    const savedComicIds = localStorage.getItem("saved_comics");
    return savedComicIds ? JSON.parse(savedComicIds) : [];
  }
};

export const saveComicIds = (comicIdArr) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("saved_comics", JSON.stringify(comicIdArr));
  } else {
    localStorage.removeItem("saved_comics");
  }
};
