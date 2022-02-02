import React, { useEffect, useState } from "react";
import ReactSelect from "../../../components/ReactSelect";

const Prefrences = (props: any) => {

  const [prefrences, setPrefrences] = useState({
    your_story: '',
    short_bio: '',
    relationship_status: 'Single',
    intrusted_in_meating: '',
    relationship_want_to_build: '',
    your_intenet: '',
    personality: ''
  })
  const [personality, setPersonality] = useState([]);

  useEffect(() => {
    let data = personality.map((item: any) => item.value).join();
    setPrefrences({ ...prefrences, personality: data })
}, [personality]);

  useEffect(() => {
    console.log('prefrences', prefrences);
    props.prefrencesData(prefrences)
  }, [prefrences])

  const handleChange = (e: any) => {
    setPrefrences({ ...prefrences, [e.target.name]: e.target.value })
  }

  const selectValue = (value: string, type: string) => {
    if (type === "relationship_want_to_build") {
      return relationStatus.find((data: any) => data.value === value)
    }
    else if (type === "intrusted_in_meating") {
      return meetingIntrest.find((data: any) => data.value === value)
    }
    else if (type === "relationship_status") {
      return relationbuild.find((data: any) => data.value === value)
    }
    else if (type === "your_intenet") {
      return intent.find((data: any) => data.value === value)
    }
    else if (type === "personality") {
      return personalityOptions.find((data: any) => data.value === value)
    }
  }
  const personalityOptions = [
    { value: "Active", label: "Active" },
        { value: "Adventurous", label: "Adventurous" },
        { value: "Athletic", label: "Athletic" },
        { value: "Calm", label: "Calm" },
        { value: "Caring", label: "Caring" },
        { value: "Agreeable", label: "Agreeable" },
        { value: "Charismatic", label: "Charismatic" },
        { value: "Cheerful", label: "Cheerful" },
        { value: "Compassionate", label: "Compassionate" },
        { value: "Confident", label: "Confident" },
        { value: "Competitive", label: "Competitive" },
        { value: "Curious", label: "Curious" },
        { value: "Dramatic", label: "Dramatic" },
        { value: "Disciplined", label: "Disciplined" },
        { value: "Empathetic", label: "Empathetic" },
        { value: "Enthusiastic", label: "Enthusiastic" },
        { value: "Friendly", label: "Friendly" },
        { value: "Flexible", label: "Flexible" },
        { value: "Freethinking", label: "Freethinking" },
        { value: "Generous", label: "Generous" },
        { value: "Gentle", label: "Gentle" },
        { value: "Gracious", label: "Gracious" },
        { value: "Hardworking", label: "Hardworking" },
        { value: "Healthy", label: "Healthy" },
        { value: "Loyal", label: "Loyal" },
        { value: "Observant", label: "Observant" },
        { value: "Organized", label: "Organized" },
        { value: "Passionate", label: "Passionate" },
        { value: "Perfectionist", label: "Perfectionist" },
        { value: "Playful", label: "Playful" },
        { value: "Prudent", label: "Prudent" },
        { value: "Relaxed", label: "Relaxed" },
        { value: "Reliable", label: "Reliable" },
        { value: "Selfless", label: "Selfless" },
        { value: "Sensitive", label: "Sensitive" },
        { value: "Serious", label: "Serious" },
        { value: "Tidy", label: "Tidy" },
        { value: "Trusting", label: "Trusting" },
        { value: "Upright", label: "Upright" },
        { value: "Warm", label: "Warm" },
        { value: "Witty", label: "Witty" },
  ]

  const relationStatus = [
    { value: "Single", label: "Single"},
    { value: "Widowed", label: "Widowed" },
    { value: "Divorced", label: "Divorced" },
  ];
  const meetingIntrest = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
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
              value={prefrences.your_story}
              onChange={(e) => handleChange(e)}
              name='your_story'
            ></textarea>
          </div>
          <div className="textarea">
            <label className="login-label">Short Bio</label>
            <textarea
              rows={5}
              value={prefrences.short_bio}
              onChange={(e) => handleChange(e)}
              maxLength={100}
              name='short_bio'
            ></textarea>
            <span style={{ color: "black" }}>{prefrences.short_bio.length}/100</span>
          </div>
          <div className="slector">
            <label className="login-label">Relationship status</label>
            <div className="reactSelector mt-3">
              <ReactSelect
                placeholder="Choose an option "
                options={relationStatus}
                onChange={(e: any) => setPrefrences({ ...prefrences, relationship_status: e.value })}
                value={selectValue(prefrences.relationship_status, 'relationship_status')}
                isMulti={false}
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
                onChange={(e: any) => setPrefrences({ ...prefrences, intrusted_in_meating: e.value })}
                value={selectValue(prefrences.intrusted_in_meating, 'intrusted_in_meating')}
                isMulti={false}
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
                onChange={(e: any) => setPrefrences({ ...prefrences, relationship_want_to_build: e.value })}
                value={selectValue(prefrences.relationship_want_to_build, 'relationship_want_to_build')}
                isMulti={false}
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
                onChange={(e: any) => setPrefrences({ ...prefrences, your_intenet: e.value })}
                value={selectValue(prefrences.your_intenet, 'your_intenet')}
                isMulti={false}
              />
            </div>
          </div>
          <div className="slector">
            <label className="login-label">
              Your Personality
            </label>
            <div className="reactSelector mt-3">
              <ReactSelect
                placeholder="Select Your Personality"
                options={personalityOptions}
                onChange={(e: any) => setPersonality(e)}
                value={personality}
                isMulti={true}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Prefrences;
