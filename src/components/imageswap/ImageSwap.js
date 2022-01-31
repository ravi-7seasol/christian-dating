import React, { useEffect, useState } from "react";
import "./style.css";
// import * as Hammer from "hammerjs";
import TinderCard from "react-tinder-card";
import { ApiPost } from "../../helper/API/ApiData";
import AuthStorage from "../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../helper/utils";
import { useNavigate } from "react-router";
import { setIsLoading } from "../../redux/actions/loadingAction";
import { useDispatch } from "react-redux";

const ImageSwap = (props) => {
  const allData = [
    {
      id: 0,
      img: "https://placeimg.com/600/300/people",
      name: "Demo",
      text: "This is a demo for Tinder like swipe cards",
      address: "USA, San Francisco Bay Area | Religion: ",
      addressspan: "Catholic",
      firstname: "John doe 1, 36",
      genderimg: "./assets/img/male.png",
    },
    {
      id: 1,
      img: "https://placeimg.com/600/300/animals",
      name: "Demo",
      text: "This is a demo for Tinder like swipe cards",
      address: "USA, San Francisco Bay Area | Religion: ",
      addressspan: "Catholic",
      firstname: "John doe 2, 36",
      genderimg: "./assets/img/male.png",
    },
    {
      id: 2,
      img: "https://placeimg.com/600/300/nature",
      name: "Demo",
      text: "This is a demo for Tinder like swipe cards",
      address: "USA, San Francisco Bay Area | Religion: ",
      addressspan: "Catholic",
      firstname: "John doe 3, 36",
      genderimg: "./assets/img/male.png",
    },
    {
      id: 3,
      img: "https://placeimg.com/600/300/tech",
      name: "Demo",
      text: "This is a demo for Tinder like swipe cards",
      address: "USA, San Francisco Bay Area | Religion: ",
      addressspan: "Catholic",
      firstname: "John doe 4, 36",
      genderimg: "./assets/img/male.png",
    },
    {
      id: 4,
      img: "https://placeimg.com/600/300/arch",
      name: "Demo",
      text: "This is a demo for Tinder like swipe cards",
      address: "USA, San Francisco Bay Area | Religion: ",
      addressspan: "Catholic",
      firstname: "John doe 5, 36",
      genderimg: "./assets/img/male.png",
    },
  ];
  const [data, setData] = useState(allData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getProfileMatch, setGetProfileMatch] = useState([]);
  const [profileMatches, setProfileMatches] = useState([]);
  const [swapedProfile, setSwapedProfile] = useState([]);

  useEffect(() => {
    if (getProfileMatch.length > 0) {
      console.log("getProfileMatch",getProfileMatch);
      let userId = getProfileMatch[getProfileMatch.length - 1].id;
      props.Id(userId);
      let data ={
        name:getProfileMatch[getProfileMatch.length - 1].name,
        profile_picture:getProfileMatch[getProfileMatch.length - 1].profile_picture,
      }
      props.Data(data)
    }
  }, [getProfileMatch]);

  useEffect(() => {
    let token = {
      token: AuthStorage.getToken(),
    };
    const body = xwwwFormUrlencoded(token);
    dispatch(setIsLoading(true));
    ApiPost("getprofilematches", body)
      .then((res) => {
        console.log("res.matches", res.matches);
        setGetProfileMatch(Object.values(res.matches).map((item) => item));
        setProfileMatches(Object.values(res.matches).map((item) => item));
        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        dispatch(setIsLoading(false));
        console.log("err", err);
      });
  }, []);

  const [ids, setIds] = useState([]);

  const onSwipe = (dir, item) => {
    if (dir === "left") {
      ids.push(item.id);
      const a = [...ids];
      const filterd = getProfileMatch.filter((x) => !a.includes(x.id));
      setSwapedProfile(filterd);
      setGetProfileMatch(filterd)
    } else if (dir === "right") {
      ids.push(item.id);
      const a = [...ids];
      const filterd = getProfileMatch.filter((x) => !a.includes(x.id));
      setSwapedProfile(filterd);
      setGetProfileMatch(filterd)

      // setGetProfileMatch(filterd);
    }
  };

  useEffect(() => {
    if (props.isRewind === true) {
      onRewind();
    }
    if (props.isSkip === true) {
      onSkip();
    }
  }, [props]);

  useEffect(() => {
    console.log("swapedProfile", swapedProfile);
  }, [swapedProfile]);

  const onRewind = () => {
    setIds([]);
    setGetProfileMatch(profileMatches);
    setSwapedProfile(profileMatches);
    props.changeRewind();
    props.changeSkip();
  };

  const onSkip = () => {
    if (getProfileMatch.length > 0) {
      let userId = getProfileMatch[getProfileMatch.length - 1].id;
      ids.push(userId);
      const a = [...ids];
      const filterd = getProfileMatch.filter((x) => !a.includes(x.id));
      setGetProfileMatch(filterd);
      props.changeSkip();
      props.changeRewind();
    }
  };

  useEffect(() => {
    const idData = getProfileMatch.filter((item) => !ids.includes(item));
    setGetProfileMatch(idData);
  }, [ids]);

  useEffect(() => {
    return () => {
      let id = ids.map((data) => data).join(",");
      let token = {
        token: AuthStorage.getToken(),
        // user_ids: id,
      };
      const body = xwwwFormUrlencoded(token);
      ApiPost("postswapids", body)
        .then((res) => {
          console.log("RESPONSE", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
  }, []);

  const ViewProfile = (id) => {
    console.log("clicked");
    // navigate(`/show-profile?profileid=${id}`);
  };

  useEffect(() => {
    console.log("getProfileMatch", getProfileMatch);
  }, [getProfileMatch]);

  useEffect(() => {
    const test = document.getElementById("test");
    console.log("test", test);
    if (test) {
      test.addEventListener("click", () => {
        // alert("hi")
        console.log("clicked");
      });
    }
  });

  return (
    <div className="cards-container">
      {getProfileMatch.length ? (
        <>
          {getProfileMatch.map((item, i, row) => {
            return (
              <TinderCard
                onSwipe={(dir) => onSwipe(dir, item)}
                // onCardLeftScreen={(item) => onCardLeftScreen(item)}
                preventSwipe={["up", "down"]}
                key={i}
                className={`swap-card ${row.length - 1 === i && 'card-box-shadow'}`}
                // ${row.length - 1 === i
                //   ? "normal-translate"
                //   : row.length - 2 === i
                //     ? "normal-translate-1"
                //     : row.length - 3 === i && " normal-translate-2"
                //   }
              >
                <div className={`card-inner`}>
                  <img
                    src={
                      item.profile_picture
                        ? item.profile_picture
                        : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                  />
                  <div className="tinder-verified">
                    <img src="./assets/img/poltgon-group.png"/>
                    <p>Verified picture</p>
                  </div>

                  <div className="details">
                    <div className="">
                      <p>
                        {!item.address &&
                          "USA, San Francisco Bay Area | Religion"}

                        <span> {!item.addressspan && " : Catholic"} </span>
                      </p>
                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="d-flex align-items-center">
                          <h5 className="name-age">{item.name}</h5>
                          {/* <img
                          src={item.genderimg}
                          alt=""
                          height="8%"
                          width="8%"
                          className="ml-3"
                        /> */}
                          {item?.gender === "male" ? (
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
                        {/* <button onClick={() => ViewProfile(item.id)} id="test">
                          View profile
                        </button> */}
                      </div>
                    </div>
                  </div>
                  {/* )}  */}
                </div>
              </TinderCard>
            );
          })}
        </>
      ) : (
        <div className="no-matches-error">
          <div className="no-matches-text mb-3">
            <p className="mb-0">
              <b>We couldn't find the matches for you.</b>
            </p>
            <p className="mb-0">
              <b>Please try later or upadte your profile.</b>
            </p>
          </div>
          <button
            className="no-matches-button btn btn-primary"
            onClick={() => {
              navigate("/edit-profile");
            }}
          >
            {" "}
            update Profile{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageSwap;
