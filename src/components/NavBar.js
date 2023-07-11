import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import { RiCloseFill } from "react-icons/ri";
import LoginForm from "./LoginForm";
import Link from "next/link";

const style = {
  navContainer: `w-auto rounded-lg flex p-2 m-2 bg-gray-600`,
  navRight: `flex p-2 w-auto`,
  navLeft: `flex p-2 w-full items-center`,
  navButtons: `rounded-lg w-1/2 p-2 m-2 bg-slate-800 text-center`,
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

  const router = useRouter();

  return (
    <>
      <div className={style.navContainer}>
        <div className={style.navLeft}>
          <Link href="/">Marvel Comics Query</Link>
        </div>
        <div className={style.navRight}>
          <Link href="/" className={style.navButtons}>
            Search Comics
          </Link>
          <Link href="/usercomics" className={style.navButtons}>
            Saved Comics
          </Link>
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
        <LoginForm />
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
