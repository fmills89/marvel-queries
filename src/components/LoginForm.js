import React, { useState } from "react";

const style = {
  modalForm: `flex flex-col items-center place-content-center bg-red-800 w-80 h-48 p-2 m-2 rounded-lg`,
  modalInputFields: `rounded-md p-2 m-2 text-black`,
};

function LoginForm() {
  return (
    <form className={style.modalForm}>
      <input className={style.modalInputFields} placeholder="Enter username" />
      <input className={style.modalInputFields} placeholder="Enter password" />
      <button>Login</button>
    </form>
  );
}

export default LoginForm;
