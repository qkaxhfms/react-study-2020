import React, { useState, useRef } from "react";

function Input2() {
  const [inputs, setInputs] = useState({
    phone: "",
    email: "",
  });
  const phoneInput = useRef();
  const { phone, email } = inputs;
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const reset = () => {
    setInputs({
      phone: "",
      email: "",
    });
    phoneInput.current.focus();
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="phone"
          placeholder="폰번호"
          onChange={change}
          value={phone}
          ref={phoneInput}
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          onChange={change}
          value={email}
        />
        <button type="button" onClick={reset}>
          초기화
        </button>
        <ul>
          <li>폰번호 : {phone}</li>
          <li>이메일 : {email}</li>
        </ul>
      </div>
    </>
  );
}

export default Input2;
