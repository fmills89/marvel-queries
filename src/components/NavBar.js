import React, { useState } from "react";
import Modal from "react-modal";

const style = {
  navContainer: `w-auto rounded-lg flex p-2 m-2 bg-gray-600`,
  navRight: `flex p-2 w-auto`,
  navLeft: `flex p-2 w-full items-center`,
  navButtons: `rounded-lg w-1/2 p-2 m-2 bg-slate-800`,
  modal: ``,
  modalForm: `flex flex-col items-center place-content-center border bg-red-800 h-1/2 `,
  modalInputFields: `border p-2 m-2 text-black`,
};

function NavBar() {
  const openModal = () => {
    setIsModalOpen(true);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className={style.navContainer}>
        <div className={style.navLeft}>
          <div>Marvel Comics Query</div>
        </div>
        <div className={style.navRight}>
          <button className={style.navButtons}>Search Comics</button>
          <button className={style.navButtons} onClick={openModal}>
            Login
          </button>
        </div>
      </div>
      <Modal
        className={style.modal}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <form className={style.modalForm}>
          <input
            className={style.modalInputFields}
            placeholder="Enter username"
          />
          <input
            className={style.modalInputFields}
            placeholder="Enter password"
          />
        </form>
      </Modal>
    </>
  );
}

export default NavBar;
