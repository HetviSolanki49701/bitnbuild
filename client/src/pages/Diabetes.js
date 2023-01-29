import React, { useEffect, useState } from "react";
import axios from "axios";

const Diabetes = () => {
  const [pregnancies, setPregnancies] = useState();
  const [glucose, setGlucose] = useState();
  const [bp, setBp] = useState();
  const [skin, setSkin] = useState();
  const [insulin, setInsulin] = useState();
  const [bmi, setBmi] = useState();
  const [pedigree, setPedigree] = useState();
  const [age, setAge] = useState();
  const [outcome, setOutcome] = useState(null);

  useEffect(() => {}, [outcome]);

  function changePreg(e) {
    setPregnancies(e.target.value);
  }
  function changeGlu(e) {
    setGlucose(e.target.value);
  }
  function changeBp(e) {
    setBp(e.target.value);
  }
  function changeSkin(e) {
    setSkin(e.target.value);
  }
  function changeInsu(e) {
    setInsulin(e.target.value);
  }
  function changeBmi(e) {
    setBmi(e.target.value);
  }
  function changePedigree(e) {
    setPedigree(e.target.value);
  }
  function changeAge(e) {
    setAge(e.target.value);
  }

  const url = "http://localhost:7000";

  async function predict(e) {
    e.preventDefault();

    const data = {
      pregnancies,
      glucose,
      bp,
      skin,
      insulin,
      bmi,
      pedigree,
      age,
    };
    try {
      const response = await axios.post(
        `${url}/predict`,
        {},
        {
          headers: data,
        }
      );
      console.log(response.data);
      setOutcome(response.data.prediction);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  return (
    <div className="w-40 m-10">
      <input
        type="number"
        placeholder="No. Of Pregnancies"
        value={pregnancies}
        onChange={changePreg}
      />
      <input
        type="number"
        placeholder="Glucose Level"
        value={glucose}
        onChange={changeGlu}
      />
      <input
        type="number"
        placeholder="Blood Pressure"
        value={bp}
        onChange={changeBp}
      />
      <input
        type="number"
        placeholder="Skin Thickness"
        value={skin}
        onChange={changeSkin}
      />
      <input
        type="number"
        placeholder="Insulin Level"
        value={insulin}
        onChange={changeInsu}
      />
      <input type="number" placeholder="BMI" value={bmi} onChange={changeBmi} />
      <input
        type="number"
        placeholder="Diabetes Pedigree Function"
        value={pedigree}
        onChange={changePedigree}
      />
      <input type="number" placeholder="Age" value={age} onChange={changeAge} />
      <button
        className="mt-2 border-2 bg-slate-400"
        onClick={predict}
        type="submit"
      >
        Submit
      </button>
      {outcome && (
        <p>{outcome === 1 ? "You have Diabetes" : "You don't have Diabetes"}</p>
      )}
    </div>
  );
};

export default Diabetes;
