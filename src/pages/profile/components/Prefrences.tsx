import React from "react";
import ReactSelect from "../../../components/ReactSelect";

const Prefrences = () => {
  const relationStatus = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
  ];
  const meetingIntrest = [
    { value: "Men", label: "Men" },
    { value: "Women", label: "Women" },
  ];
  const relationbuild = [
    { value: "Dating", label: "Dating" },
    { value: "No dating", label: "No dating" },
   
  ];
  const intent = [
    { value: "I want to build a friendship", label: "I want to build a friendship" },
    { value: "I want to date with intent to marry", label: "I want to date with intent to marry" },
   
  ];
 
  return (
    <>
      <p className="header-text">You, and what you prefer.</p>
      <div className="login">
        <form>
          <div className="textarea">
            <label className="login-label">
              Your story (How you came to christ)
            </label>
            <textarea
              rows={3}
              value={
                "Hi I’m John, I’m a single father of 3 and I love camping, being outdoors and overall nature. I also have 2 dogs!"
              }
            ></textarea>
          </div>
          <div className="textarea">
            <label className="login-label">Short Bio</label>
            <textarea
              rows={5}
              value={
                "“I own my own Software Development company. I love jazz and go watch my favorite bands as often as possible. To get out of my head, I go rock climbing. I grew up in a very political family and I carry on that tradition by being active in the local campaigns. I find a lot of peace by attending church on Sunday mornings and by being a part of that community."
              }
            ></textarea>
          </div>

          <div className="slector">
            <label className="login-label">Relationship status</label>
            <div className="reactSelector mt-3">
              <ReactSelect
                placeholder="Choose an option "
                options={relationStatus}
              />
            </div>
          </div>
          <div className="slector">
            <label className="login-label">
              Who are you interested in meeting?
            </label>
            <div className="reactSelector mt-3">
              <ReactSelect
                placeholder="Choose an option "
                options={meetingIntrest}
              />
            </div>
          </div>
          <div className="slector">
            <label className="login-label">
            What kind of relationship do you want To build?
            </label>
            <div className="reactSelector mt-3">
              <ReactSelect
                placeholder="Choose an option"
                options={relationbuild}
              />
            </div>
          </div>
          <div className="slector">
            <label className="login-label">
            What is your intent?
            </label>
            <div className="reactSelector mt-3">
              <ReactSelect
                placeholder="Choose intent"
                options={intent}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Prefrences;
