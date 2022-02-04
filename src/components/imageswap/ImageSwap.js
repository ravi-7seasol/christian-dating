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
        rate:getProfileMatch[getProfileMatch.length - 1].rate,
      }
      props.Data(data)
      props.rateTogChange(false)
    }
  }, [getProfileMatch]);

  useEffect(() => {
    if(props.rateChange){
      // setGetProfileMatch({...getProfileMatch, rate : !getProfileMatch[getProfileMatch.length - 1].rate})
      let test = getProfileMatch[getProfileMatch.length - 1].rate === null ? "Like" : getProfileMatch[getProfileMatch.length - 1].rate === "dislike" ? "Like" : "dislike"
      let newData = [...getProfileMatch]
      newData[newData.length-1].rate = test
      setGetProfileMatch(newData)
    }
  }, [props.rateChange]);    

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

  useEffect(() => {
    const test = document.getElementById("test");
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
                        : "./assets/img/nonprofileImg.png"
                    }
                    onError={({ currentTarget }) => {
                    currentTarget.onerror = null; 
                    currentTarget.src = "./assets/img/nonprofileImg.png";
                  }}
                  />
                  <div className="tinder-verified">
                    <img src="./assets/img/poltgon-group.png"/>
                    <p>Verified picture</p>
                  </div>

                  <div className={`details ${row.length - 1 === i && 'card-box-shadow'}`}>
                    <div className="">
                    <p>{item.address && `${item.address} Bay Area`} {item.address && item.denomination && "|" } {item.denomination && `Religion`} {item.denomination && <span> {item.denomination} </span>} </p> 
          
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
            className="no-matches-button btn btn-primary animation"
            onClick={() => {
              navigate("/edit-profile");
            }}
          >
            update Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageSwap;
