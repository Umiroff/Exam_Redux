import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getStore from "../utilis/get";
import './Register.css'



export default function Register() {
  const [user, setUser] = useState(getStore("user"));
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <div className="form_register">
      <div>
        <h1>Raqamingizni kiriting</h1>
        <input
          type="phone"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="+998 () ___--__"
          name=""
          id=""
        />
        <br />
        {user.length === 9  ?  (
          <button className="btn btn-success btn-sign"
            onClick={() => {
              location = "/";
            }}
          >
            Kirish
          </button>
        ) : (
          <button className="disabled_btn-reg">Kirish</button>
        )}
        <p>
          This site is protected by reCAPTCHA and the <br /> Google
          <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
}