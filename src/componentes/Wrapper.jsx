import React, { useState } from "react";

import Formulario1 from "./Formulario1";
import Formulario2 from "./Formulario2";
import styles from "./Wrapper.module.css";

const Wrapper = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");

  return (
    <div>
      <p>
        <div className={styles.FormularioArr}>
          First Name :
          <Formulario1 filter={firstName} setFilter={setFirstName} />
        </div>
        <div className={styles.FormularioArr}>
          Last Name : <Formulario1 filter={lastName} setFilter={setLastName} />
        </div>
        <div className={styles.FormularioArr}>
          Email :
          <Formulario1 filter={email} setFilter={setEmail} />
        </div>
        <div className={styles.FormularioArr}>
          Password : <Formulario1 filter={password} setFilter={setPassword} />
        </div>
        <div className={styles.FormularioArr}>
          Confirm password :
          <Formulario1 filter={confPassword} setFilter={setconfPassword} />
        </div>
      </p>
      <p>
        <h3>Your Form Data</h3>
        <div className={styles.FormularioAba}>
          First Name :<Formulario2 filter={firstName} />
        </div>
        <div className={styles.FormularioAba}>
          Last Name :<Formulario2 filter={lastName} />
        </div>

        <div className={styles.FormularioAba}>
          Email :<Formulario2 filter={email} />
        </div>
        <div className={styles.FormularioAba}>
          Password :<Formulario2 filter={password} />
        </div>
        <div className={styles.FormularioAba}>
          Confirm password :<Formulario2 filter={confPassword} />
        </div>
      </p>
                           
    </div>
  );
};

export default Wrapper;
