import React from "react";

const style = {
  navContainer: `w-auto rounded-lg flex p-2 m-2 bg-gray-600`,
  navRight: `flex p-2 w-auto`,
  navLeft: `flex p-2 w-full items-center`,
  navButtons: `rounded-lg w-1/2 p-2 m-2 bg-slate-800`,
};

function NavBar() {
  return (
    <>
      <div className={style.navContainer}>
        <div className={style.navLeft}>
          <div>Marvel Comics Query</div>
        </div>
        <div className={style.navRight}>
          <button className={style.navButtons}>Search Comics</button>
          <button className={style.navButtons}>Login</button>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default NavBar;
