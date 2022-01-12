import React, { useEffect, useState } from "react";
import InputField from "../../../components/Inputfield";
import ReactSelect from "../../../components/ReactSelect";


const Personal = (props:any) => {

  const personalData = {
    name:'',
    dob:'',
    address:'',
    gender:'',
    denomination:'',
  }
  const [personal, setPersonal] = useState(personalData)

  useEffect(() => {
    setPersonal({...personal, name:props.editPersonalData.firstname, dob:props.editPersonalData.dob, address:props.editPersonalData.address, gender:props.editPersonalData.gender, denomination:props.editPersonalData.denomination})
  }, [props.editPersonalData])

  useEffect(() => {
    props.personalData(personal)
  }, [personal])

  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  const selectValue = (value: string, type: string) => {
    if(type === "denomination") {
      return options.find((data: any) => data.value === value)
    }
  } 

  const handleGenderActive =(e:any, text :any)=>{
    e.preventDefault()
    setPersonal({...personal, gender:text})
  }

  const handleChange =(e:any)=>{
    e.preventDefault()       
    setPersonal({...personal, [e.target.name] : e.target.value})
  }

  return (
    <>
      <p className="header-text">Let’s set everything up.</p>
      <div className="login">
        <form>
          <InputField
            name="name"
            maxLength={undefined}
            value={personal.name}
            lablestyleClass="login-label"
            InputstyleClass="login-input"
            onChange={(e) => handleChange(e)}
            disabled={false}
            label="Let’s start with your name"
            placeholder="John"
            type="text"
            fromrowStyleclass=""
          />
          <div>
            <label className="login-label birth-date">When were you born?</label>
            <input
              type="date"
              value={personal.dob}
              className="login-input w-100"
              name="dob"
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <InputField
            name="address"
            maxLength={undefined}
            value={personal.address}
            lablestyleClass="login-label"
            InputstyleClass="login-input"
            onChange={(e) => handleChange(e)}
            disabled={false}
            label="Where do you live?"
            placeholder="Town name, city"
            type="text"
            fromrowStyleclass=""
          />
          <div className="gender">
            <label className="login-label">Gender</label>
            <br />
            <button className={`gender-btn male ${ personal.gender ==="male"&& "gender-active"}`} onClick={(e)=>handleGenderActive(e, "male")}>
              <img src="./assets/img/male.png" alt="male" />
            </button>
            <button className={`gender-btn female ${ personal.gender ==="female"&& "gender-active"}`} onClick={(e)=>handleGenderActive(e, "female")}>
              <img src="./assets/img/female.png" alt="female" />
            </button>
          </div>
          <div className="slector">
            <label className="login-label">Denomination</label>

            <div className="reactSelector mt-3">
              <ReactSelect placeholder="Choose denomination" options={options} onChange={(e:any) => setPersonal({...personal, denomination:e.value})} value={selectValue(personal.denomination, "denomination")} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Personal;
