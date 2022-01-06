import Select from "react-select";
import ReactSelect from "../../../components/ReactSelect";

const Lifestyle = () => {
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
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Lifestyle;
