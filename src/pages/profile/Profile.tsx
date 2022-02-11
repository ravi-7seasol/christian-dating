import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Buttons from "../../components/Buttons";
import { ApiPost } from "../../helper/API/ApiData";
import AuthStorage from "../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../helper/utils";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import { setIsLoading } from "../../redux/actions/loadingAction";
import Lifestyle from "./components/Lifestyle";
import Personal from "./components/Personal";
import Prefrences from "./components/Prefrences";
import SetProfileImage from "./components/SetProfileImage";

const Profile = (props: any) => {
  const [profile, setProfile] = useState({
    token: AuthStorage.getToken(),
    name: '',
    dob: '',
    address: '',
    gender: '',
    denomination: 0,
    body_type: '',
    children: '',
    pets: '',
    language: '',
    education: '',
    career: '',
    your_story: '',
    short_bio: '',
    relationship_status: '',
    intrusted_in_meating: '',
    relationship_want_to_build: '',
    your_intenet: '',
    how_often_church: '',
    read_bible: '',
    workout: '',
    consume_alcohol: '',
    smoke: '',
    personality:'',

  })

  const [stepDone, setStepDone] = useState(1);
  const [images, setImages] = useState<any>();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleNext = () => {
    
    dispatch(setIsLoading(true))
    if (stepDone < 5) {
      if(stepDone == 4 && images > 2){
        setStepDone(stepDone + 1);
        dispatch(setIsLoading(false))
      }else if(stepDone == 1 || stepDone == 2 || stepDone == 3){
        setStepDone(stepDone + 1);
        dispatch(setIsLoading(false))
      }else{
        // alert(`You have not take minimum 3 pictures`)
        alert(images === undefined ? 'you have not taken any pictures' : `you have taken only ${images} pictures `)
        setStepDone(stepDone)
        dispatch(setIsLoading(false))
      }

    } else if(stepDone == 5) {
      const body = xwwwFormUrlencoded(profile);

      ApiPost('updateprofile', body)
        .then((res: any) => {
          console.log("res", res);
          dispatch(setIsLoading(false))
          if (res.status === "true") {
            navigate("/show-profile");
          }
          else {
            dispatch(setIsLoading(false))
            alert(`${res.msg}`)
          }
        }).catch((error: any) => {
          console.log(error);
          dispatch(setIsLoading(false))
        })
    }
  };

  const personal = (data: any) => {
    setProfile({
      ...profile, name: data.name, dob: data.dob, address: data.address, gender: data.gender, denomination: data.denomination, body_type: data.body_type,
      children: data.children,
      pets: data.pets,
      language: data.language,
      education: data.education,
      career: data.career
    })
  }

  const prefrences = (data: any) => {
    setProfile({ ...profile, your_story: data.your_story, short_bio: data.short_bio, relationship_status: data.relationship_status, intrusted_in_meating: data.intrusted_in_meating, relationship_want_to_build: data.relationship_want_to_build, your_intenet: data.your_intenet, personality: data.personality })
  }

  const lifeStyle = (data: any) => {
    setProfile({ ...profile, how_often_church: data.how_often_church, read_bible: data.read_bible, workout: data.workout, consume_alcohol: data.consume_alcohol, smoke: data.smoke })
  }

  return (
    <div >
      <div className="profile-header-baloon" style={{ position: "fixed", width: "100vw", top: "0" }}>
        <Header />
      </div>
      <div className="container-width mx-auto" style={{ marginTop: "15vh" }}>
        <div className="header mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Profile</h1>
            <div className="steps">
              <div className={`step ${stepDone >= 1 && "done"}`}></div>
              <div className={`step ${stepDone >= 2 && "done"} `}></div>
              <div className={`step ${stepDone >= 3 && "done"} `}></div>
              <div className={`step ${stepDone >= 4 && "done"} `}></div>
            </div>
          </div>
        </div>
        {stepDone === 1 && <Personal personalData={personal} />}
        {stepDone === 2 && <Prefrences prefrencesData={prefrences} />}
        {stepDone === 3 && <Lifestyle lifeStyleData={lifeStyle} />}
        {stepDone >= 4 && <SetProfileImage stepDone={stepDone} images={setImages}/>}

        <div className="login">
          <div
            style={{
              marginTop: stepDone > 4 ? "8rem" : "4rem",
              marginBottom: "1rem",
            }}
          >
            <Buttons
              children={stepDone > 3 ? "See your profile!" : "Next"}
              onClick={() => handleNext()}
              ButtonStyle="login-btn animation onactive-btn"
              disabled={false}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
