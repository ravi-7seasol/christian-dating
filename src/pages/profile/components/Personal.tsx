import React, { useState } from "react";
import InputField from "../../../components/Inputfield";
import ReactSelect from "../../../components/ReactSelect";


const Personal = () => {
  const [genderActive,setGenderActive]=useState("male")
  const options = [
    { value: "Assembly of God", label: "Assembly of God" },
    { value: "Church of Christ", label: "Church of Christ" },
    { value: "Baptist", label: "Baptist" },
    { value: "Catholic", label: "Catholic" },
    { value: "Evangelical", label: "Evangelical" },
    { value: "Jewish", label: "Jewish" },
  ];
  const handleGenderActive =(e:any, text :any)=>{
    e.preventDefault()
    setGenderActive(text)
  }
  return (
    <>
      <p className="header-text">Let’s set everything up.</p>
      <div className="login">
        <form>
          <InputField
            name=""
            maxLength={undefined}
            value={""}
            lablestyleClass="login-label"
            InputstyleClass="login-input"
            onChange={() => {
              ("");
            }}
            disabled={false}
            label="Let’s start with your name"
            placeholder="Jhon"
            type="text"
            fromrowStyleclass=""
          />
          <div>
            <label className="login-label birth-date">When were you born?</label>
            <input
              type="date"
              value="2013-01-08"
              className="login-input w-100"
            />
          </div>
          <InputField
            name=""
            maxLength={undefined}
            value={""}
            lablestyleClass="login-label"
            InputstyleClass="login-input"
            onChange={() => {
              ("");
            }}
            disabled={false}
            label="Where do you live?"
            placeholder="Town name, city"
            type="text"
            fromrowStyleclass=""
          />
          <div className="gender">
            <label className="login-label">Gender</label>
            <br />
            <button className={`gender-btn male ${ genderActive ==="male"&& "active"}`} onClick={(e)=>handleGenderActive(e, "male")}>
              <img src="./assets/img/male.png" alt="male" />
            </button>
            <button className={`gender-btn female ${ genderActive ==="female"&& "active"}`} onClick={(e)=>handleGenderActive(e, "female")}>
              <img src="./assets/img/female.png" alt="female" />
            </button>
          </div>
          <div className="slector">
            <label className="login-label">Denomination</label>

            <div className="reactSelector mt-3">
              <ReactSelect placeholder="Choose denomination" options={options}/>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Personal;
