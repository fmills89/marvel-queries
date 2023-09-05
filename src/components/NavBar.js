import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Modal from "react-modal";
import { RiCloseFill } from "react-icons/ri";
import LoginForm from "./LoginForm";
import Link from "next/link";
import logo from "../utils/logo/logo.png";

const style = {
  navContainer: `rounded-lg flex w-auto h-28`,
  navRight: `flex p-2 m-2`,
  logo: ` h-28 w-36 rounded-lg `,
  navLeft: `flex p-2 w-full items-center`,
  navButtons: `rounded-lg p-2 m-2 bg-slate-800/75 text-center`,
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
        <Link href="/">
          <Image src={logo} alt="retro marvel logo" className={style.logo} />
        </Link>
        <div className={style.navLeft}></div>
        <div className={style.navRight}>
          <Link href="/" className={style.navButtons}>
            Search Comics
          </Link>
          <Link href="/usercomics" className={style.navButtons}>
            Saved Comics
          </Link>
          {/* <button className={style.navButtons} onClick={openModal}>
            Login
          </button> */}
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
