import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleLeft, faArrowLeft, faArrowsAlt, faCompressArrowsAlt, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import Buttons from "../../../components/Buttons";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthStorage from "../../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../../helper/utils";
import { ApiGet, ApiPost } from "../../../helper/API/ApiData";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../../redux/actions/loadingAction";
import { getProfileImage } from "../../../redux/actions/getProfileImage";
import STORAGEKEY from "../../../config/APP/app.config";
import { useLocation } from "react-router";

const ShowProfile = () => {
  const [getProfileData, setGetProfileData] = useState<any>({
    name: "",
    dob: "",
    address: "",
    gender: "",
    denomination: 0,
    your_story: "",
    short_bio: "",
    relationship_status: "",
    intrusted_in_meating: "",
    relationship_want_to_build: "",
    your_intenet: "",
    how_often_church: "",
    read_bible: "",
    workout: "",
    consume_alcohol: "",
    smoke: "",
    religion: "",
    body_type: "",
    career: "",
    children: "",
    city: "",
    code: null,
    country: "",
    education: "",
    email: "",
    funfacts: "",
    id: "",
    image: null,
    is_active: "",
    is_verify: "",
    language: "",
    mobile_no: "",
    pets: "",
    profile_picture: "",
    state: "",
    token: "",
    personality: "",
    aboutme: "",
    lifestyle: "",
  });
  const params = new URLSearchParams(window.location.search);
  const profileid = params.get("profileid");

  const dispatch = useDispatch();

  const [id, setId] = useState<any>(0);
  const [isVerify, setIsVerify] = useState<any>({});

  const handleid = (i: any) => {
    if (id === i) {
      setId(undefined);
    } else {
      setId(i);
    }
  };

  useEffect(() => {
    dispatch(setIsLoading(true));
    console.log("profileid", profileid);

    let pid: String;
    if (profileid) {
      pid = profileid;
    } else {
      pid = AuthStorage.getStorageJsonData(STORAGEKEY.userData).user_id;
    }
    const id = {
      id: pid,
    };
    console.log("id", id);

    const body = xwwwFormUrlencoded(id);

    ApiPost(`getsingleuser`, body)
      .then((res: any) => {
        setGetProfileData({
          ...getProfileData,
          name: res.user[0].name,
          dob: res.user[0].dob,
          address: res.user[0].address,
          gender: res.user[0].gender,
          denomination: res.user[0].denomination,
          your_story: res.user[0].your_story,
          short_bio: res.user[0].short_bio,
          relationship_status: res.user[0].relationship_status,
          intrusted_in_meating: res.user[0].intrusted_in_meating,
          relationship_want_to_build: res.user[0].relationship_want_to_build,
          your_intenet: res.user[0].your_intenet,
          how_often_church: res.user[0].how_often_church,
          read_bible: res.user[0].read_bible,
          workout: res.user[0].workout,
          consume_alcohol: res.user[0].consume_alcohol,
          smoke: res.user[0].smoke,
          religion: res.user[0].religion,
          body_type: res.user[0].body_type,
          career: res.user[0].career,
          children: res.user[0].children,
          city: res.user[0].city,
          code: res.user[0].code,
          country: res.user[0].country,
          education: res.user[0].education,
          email: res.user[0].email,
          funfacts: res.user[0].funfacts,
          id: res.user[0].id,
          image: res.user[0].image,
          is_active: res.user[0].is_active,
          is_verify: res.user[0].is_verify,
          language: res.user[0].language,
          mobile_no: res.user[0].mobile_no,
          pets: res.user[0].pets,
          profile_picture: res.user[0].profile_picture,
          state: res.user[0].state,
          token: res.user[0].token,
          aboutme: res.user[0].aboutme,
          lifestyle: res.user[0].lifestyle,
          personality: res.user[0].personality,
        });
        console.log("SingleUser", res);
        dispatch(getProfileImage(res.user.image));
        dispatch(setIsLoading(false));
      })
      .catch((error: any) => {
        console.log(error);
        dispatch(setIsLoading(false));
      });
  }, []);

  useEffect(() => {
    const id = {
      id: AuthStorage.getStorageJsonData(STORAGEKEY.userData).user_id,
    };
    const body = xwwwFormUrlencoded(id);
    ApiPost("checkimageverificaion", body)
      .then((res) => {
        console.log("res", res);
        setIsVerify(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const accordion = [
    {
      Header: "About me",
      Body: [
        {
          label: "Short Bio:",
          value: getProfileData.short_bio,
        },
        //   {
        //     label: "Date Of Birth:",
        //     value: getProfileData.dob,
        //   },
        //   {
        //     label: "Address:",
        //     value: getProfileData.address,
        //   },
        //   {
        //     label: "Gender:",
        //     value: getProfileData.gender,
        //   },
        //   {
        //     label: "Denomination:",
        //     value: getProfileData.denomination,
        //   },
      ],
    },
    {
      Header: "Lifestyle",
      Body: [
        {
          label: "How Often Church:",
          value: getProfileData.how_often_church,
        },
        {
          label: "Read Bible:",
          value: getProfileData.read_bible,
        },
        {
          label: "Workout:",
          value: getProfileData.workout,
        },
        {
          label: "Consume Alcohol:",
          value: getProfileData.consume_alcohol,
        },
        {
          label: "Smoke:",
          value: getProfileData.smoke,
        },
      ],
    },
    {
      Header: "Personality",
      Body: [
        // {
        //   label: "Your Story:",
        //   value: getProfileData.your_story,
        // },
        // {
        //   label: "Relationship Status:",
        //   value: getProfileData.relationship_status,
        // },
        // {
        //   label: "Interested in Meeting:",
        //   value: getProfileData.intrusted_in_meating,
        // },
        // {
        //   label: "Relationship want to Build:",
        //   value: getProfileData.relationship_want_to_build,
        // },
        // {
        //   label: "Your Interest:",
        //   value: getProfileData.your_intenet,
        // },
        {
          label: "Your Personality:",
          value: getProfileData.personality,
        },
      ],
    },
  ];

  const personal = [
    // {
    //   label: "I’m looking for:",
    //   detail: getProfileData.your_intenet,
    // },
    {
      label: "Body type:",
      detail: getProfileData.body_type,
    },
    {
      label: "Children: ",
      detail: getProfileData.children,
    },
    {
      label: "Pets:",
      detail: getProfileData.pets,
    },
    {
      label: "Language:",
      detail: getProfileData.language,
    },
    {
      label: "Education: ",
      detail: getProfileData.education,
    },
    {
      label: "Career:",
      detail: getProfileData.career,
    },
    {
      label: "Interested in Meeting:",
      detail: getProfileData.intrusted_in_meating,
    },
    {
      label: "Relationship want to Build:",
      detail: getProfileData.relationship_want_to_build,
    },
    {
      label: "Your Interest:",
      detail: getProfileData.your_intenet,
    },
  ];
  return (
    <>
      <div
        className="profilr-bg"
        style={{
          background: `url(${getProfileData?.image
            ? getProfileData?.image
            : "./assets/img/nonprofileImg.png"
            })`,
        }}
      >
        <Container>
          <div className="set-backbtn-singlebtn">
            <div className="back-btn">
              <Link to="/match_or_message">
                <img
                  src="./assets/img/next.png"
                  alt=""
                  width="10px"
                  height="15px"
                />
              </Link>
            </div>
            <Buttons
              ButtonStyle=" single-btn"
              onClick={() => { }}
              children={getProfileData.relationship_status}
            />
          </div>
          <div className="over-img-div-991">
            <Row>
              <Col md={3}>
                <div className="profile-pic set-profile-img">
                  {/* <img src="./assets/img/taylor-8Vt2haq8NSQ-unsplash.png" alt="" /> */}
                  <img
                    src={
                      getProfileData?.image
                        ? getProfileData?.image
                        : "./assets/img/nonprofileImg.png"
                    }
                    alt=""
                    className=""
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = "./assets/img/nonprofileImg.png";
                    }}
                  />
                  <div className="verified-picture">
                    {isVerify && isVerify.user?.is_profile_image_verified === "1" ? (
                      <>
                        <img src="./assets/img/poltgon-group.png" alt="" />
                        <p>Verified picture</p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Col>
              <Col md={9}>
                <div className="over-img-popup">
                  <div className="d-flex align-items-center mb-3">
                    <h5 className="name-age">
                      {getProfileData.name} ,{" "}
                      {moment().diff(
                        moment(getProfileData.dob, "YYYY-MM-DD"),
                        "years"
                      )}
                    </h5>
                    {getProfileData.gender === "male" ? (
                      <img
                        src="./assets/img/male.png"
                        alt=""
                        className="ml-3"
                      />
                    ) : (
                      <img
                        src="./assets/img/female.png"
                        alt=""
                        className="ml-3"
                      />
                    )}
                  </div>
                  <p>
                    {getProfileData.address}| Denomination:{" "}
                    {getProfileData.denomination}
                  </p>
                  {/* <p className="about-mi">{getProfileData.short_bio}</p> */}
                  <p className="mb-0">
                    <b>My story (How you came to Christ)</b>
                  </p>
                  <p className="about-mi">{getProfileData.your_story}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        <div className="over-img-div">
          <div className="verified-picture">
            {isVerify && isVerify.user?.is_profile_image_verified === "1" ? (
              <>
                <img src="./assets/img/poltgon-group.png" alt="" />
                <p>Verified picture</p>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="over-img-popup">
            <p>
              {getProfileData.address} | Religion: {getProfileData.denomination}
            </p>
            <div className="d-flex align-items-center mb-3">
              <h5 className="name-age">
                {getProfileData.name},{" "}
                {moment().diff(
                  moment(getProfileData.dob, "YYYY-MM-DD"),
                  "years"
                )}
              </h5>
              <img src="./assets/img/male.png" alt="" className="ml-3" />
            </div>
            {/* <p className="about-mi">{getProfileData.short_bio}</p> */}
            {/* <p className="about-mi"></p> */}
            <p className="mb-0">
              <b>My story (How you came to Christ)</b>
            </p>
            <p className="about-mi">{getProfileData.your_story}</p>
          </div>
        </div>
      </Container>
      <Container>
        <div className="profile-accordion">
          <Accordion defaultActiveKey="0">
            <div className="personal-details">
              {accordion.map((item, i) => (
                <Accordion.Item eventKey={i.toString()}>
                  <Accordion.Header onClick={() => handleid(i)}>
                    {item.Header}
                    <img
                      src="./assets/img/down-arrow.png"
                      alt=""
                      width="20px"
                      className={`${id === i && "rotate-img"}`}
                    />
                  </Accordion.Header>
                  <Accordion.Body>
                    {item.Body.map((data: any, i: number) => (
                      <div
                        className="row mt-2 text-left flex-nowrap align-items-center"
                        key={i}
                      >
                        <div className="col-lg-4 col-md-4 col-sm-5">
                          <p>{data.label}</p>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-7">
                          {item.Header === "Personality" ?
                            <span>{data.value.replaceAll(",",", ")}</span>
                            :
                            <span>{data.value}</span>
                          }
                        </div>
                      </div>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </div>
          </Accordion>
          <div className="personal-details">
            <h2>Personal</h2>
            {personal.map((item, i) => {
              if (item) {
                return (
                  <div className="row mt-3 align-items-center" key={i}>
                    <div className="col-4 ">
                      <p className="personal-details-text">{item.label}</p>
                    </div>
                    <div className="col-8 text-left pl-2">
                      <span className="">{item.detail}</span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="fun-facts">
            <h2>Fun facts</h2>
            {getProfileData.funfacts &&
              getProfileData.funfacts
                .split(",")
                .map((item: any) => <p className="fun-facts-items">{item}</p>)}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShowProfile;
