import React, { useState } from "react";
import Modal from "react-modal";
import { RiCloseFill } from "react-icons/ri";

const style = {
  navContainer: `w-auto rounded-lg flex p-2 m-2 bg-gray-600`,
  navRight: `flex p-2 w-auto`,
  navLeft: `flex p-2 w-full items-center`,
  navButtons: `rounded-lg w-1/2 p-2 m-2 bg-slate-800`,
  modal: `m-2 border h-full flex flex-col items-center place-content-center w-auto`,
  exit: `w-96 text-black flex justify-end`,
  exitIcon: `rounded-lg h-8 w-8 bg-red-800`,
  modalForm: `flex flex-col items-center place-content-center bg-red-800 w-80 h-48 p-2 m-2 rounded-lg`,
  modalInputFields: `rounded-md p-2 m-2 text-black`,
};

function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen();
  };

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
        ariaHideApp={false}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <button className={style.exit} onClick={closeModal}>
          <RiCloseFill className={style.exitIcon} size={25} />
        </button>
        <form className={style.modalForm}>
          <input
            className={style.modalInputFields}
            placeholder="Enter username"
          />
          <input
            className={style.modalInputFields}
            placeholder="Enter password"
          />
          <button>Login</button>
        </form>
        <form className={style.modalForm}>
          <input
            className={style.modalInputFields}
            placeholder="Enter username"
          />
          <input
            className={style.modalInputFields}
            placeholder="Enter password"
          />
          <button>Signup</button>
        </form>
      </Modal>
    </>
  );
}

export default NavBar;
