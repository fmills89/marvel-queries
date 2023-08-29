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

export const removeComicId = (comicId) => {
  const savedComicIds = localStorage.getItem("saved_comics")
    ? JSON.parse(localStorage.getItem("saved_comics"))
    : null;

  if (!savedComicIds) {
    return;
  }

  for (let i = 0; i < savedComicIds.length; i++) {
    console.log(savedComicIds[i].comicId);
    if (savedComicIds[i].comicId === comicId) {
      // need to remove comicId from savedComicIds array
      savedComicIds.splice(i, 1); // Remove 1 element at index i
      localStorage.setItem("saved_comics", JSON.stringify(savedComicIds));
      window.location.reload();
      break;
    }
  }
};
