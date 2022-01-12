import { useEffect, useState } from "react";
import Select from "react-select";
import ReactSelect from "../../../components/ReactSelect";

const Lifestyle = (props:any) => {

  const [lifeStyle, setLifeStyle] = useState({
    how_often_church:'',
    read_bible:'',
    workout:'', 
    consume_alcohol:'',
    smoke:'',
  })

  useEffect(() => {
    props.lifeStyleData(lifeStyle)
  }, [lifeStyle])

  const selectValue = (type:string, value:string) => {
    if(type === 'how_often_church'){
      return attendChurch.find((data:any)=>data.value === value)
    }
    else if(type === 'read_bible'){
      return readbibal.find((data:any)=>data.value === value)
    }
    else if(type === 'workout'){
      return workout.find((data:any)=>data.value === value)
    }
    else if(type === 'consume_alcohol'){
      return alcohol.find((data:any)=>data.value === value)
    }
    else if(type === 'smoke'){
      return smoke.find((data:any)=>data.value === value)
    }
  }

  const attendChurch = [
    { value: "Habitually", label: "Habitually" },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const readbibal = [
    { value: "Sometimes", label: "Sometimes" },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const workout = [
    { value: "Sometimes", label: "Sometimes" },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
   
  ];
  const alcohol = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
   
  ];
  const smoke = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
   
  ];
  return (
    <>
      <p className="header-text">Lifestyle</p>
      <div className="login">
        <form>
          <div className="slector">
            <label className="login-label">How often do you attend church?</label>
            <div className="reactSelector mt-3">
              <ReactSelect
                placeholder="Choose an option "
                options={attendChurch}
                onChange={(e:any)=> setLifeStyle({...lifeStyle, how_often_church:e.value})}
                value={selectValue(lifeStyle.how_often_church, 'how_often_church')}
              />
            </div>
          </div>
          <div className="slector">
            <label className="login-label">
            How often do you read the Bible?
            </label>
            <div className="reactSelector mt-3">
              <ReactSelect
                placeholder="Choose an option "
                options={readbibal}
                onChange={(e:any)=> setLifeStyle({...lifeStyle, read_bible:e.value})}
                value={selectValue(lifeStyle.read_bible, 'read_bible')}
              />
            </div>
          </div>
          <div className="slector">
            <label className="login-label">
            How often do you workout?
            </label>
            <div className="reactSelector mt-3">
              <ReactSelect
                placeholder="Choose an option"
                options={workout}
                onChange={(e:any)=> setLifeStyle({...lifeStyle, workout:e.value})}
                value={selectValue(lifeStyle.workout, 'workout')}
              />
            </div>
          </div>
          <div className="slector">
            <label className="login-label">
            Do you drink alcohol?
            </label>
            <div className="reactSelector mt-3">
              <ReactSelect
                placeholder="Choose an option"
                options={alcohol}
                onChange={(e:any)=> setLifeStyle({...lifeStyle, consume_alcohol:e.value})}
                value={selectValue(lifeStyle.consume_alcohol, 'consume_alcohol')}
              />
            </div>
          </div>
          <div className="slector">
            <label className="login-label">
            Do you smoke?
            </label>
            <div className="reactSelector mt-3">
              <ReactSelect
                placeholder="Choose an option"
                options={smoke}
                onChange={(e:any)=> setLifeStyle({...lifeStyle, smoke:e.value})}
                value={selectValue(lifeStyle.smoke, 'smoke')}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Lifestyle;
