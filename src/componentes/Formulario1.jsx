import React, { useState } from "react";

const Formulario1 = ({ filter, setFilter }) => {
  function handleChange(event) {
    setFilter(event.target.value);
  }
  return <input value={filter} onChange={handleChange} />;
};

export default Formulario1;
