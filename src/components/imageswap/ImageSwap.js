import React, { useEffect, useState } from "react";
import "./style.css";
// import * as Hammer from "hammerjs";
import TinderCard from "react-tinder-card";
import { ApiPost } from "../../helper/API/ApiData";
import AuthStorage from "../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../helper/utils";
import { useNavigate } from "react-router";

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
  const [getProfileMatch, setGetProfileMatch] = useState([]);

  useEffect(() => {
    if(getProfileMatch.length > 0) {
      let userId = getProfileMatch[getProfileMatch.length - 1].id
      props.Id(userId)
    }
  }, [getProfileMatch]);

  useEffect(() => {
    let token = {
      token: AuthStorage.getToken(),
    };
    const body = xwwwFormUrlencoded(token);
    ApiPost("getprofilematches", body)
      .then((res) => {
        setGetProfileMatch(res.matches);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const [ids, setIds] = useState([]);

  const onSwipe = (dir, item) => {
    if (dir === "left") {
      ids.push(item.id);
      const a = [...ids];
      const filterd = getProfileMatch.filter((x) => !a.includes(x));
      setGetProfileMatch(filterd);
    } else if (dir === "right") {
      ids.push(item.id);
      const a = [...ids];
      const filterd = getProfileMatch.filter((x) => !a.includes(x));
      setGetProfileMatch(filterd);
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
        user_ids: id,
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
    navigate(`/show-profile?profileid=${id}`);
  }

  return (
    <div className="cards-container">
      {getProfileMatch.length > 0 &&
        getProfileMatch.map((item, i, row) => {
          return (
            <TinderCard
              onSwipe={(dir) => onSwipe(dir, item)}
              // onCardLeftScreen={(item) => onCardLeftScreen(item)}
              preventSwipe={["up", "down"]}
              key={i}
              className={`${
                row.length - 1 === i
                  ? "normal-translate"
                  : row.length - 2 === i
                  ? "normal-translate-1"
                  : row.length - 3 === i && " normal-translate-2"
              } swap-card`}
            >
              <div className={`card-inner`}>
                <img src={item.img} />
 
                <div className="details">
                  <div className="">
                    <p>
                      {/* {item.address} */}
                      {/* <span> {item.addressspan} </span> */}
                    </p>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        {" "}
                        <h5 className="name-age">{item.firstname}</h5>
                        {/* <img
                          src={item.genderimg}
                          alt=""
                          height="8%"
                          width="8%"
                          className="ml-3"
                        /> */}
                      </div>
                      <button onClick={() => ViewProfile(item.id)}>View profile</button>
                    </div>
                  </div>
                </div>
                {/* )} */}
              </div>
            </TinderCard>
          );
        })}
    </div>
  );
};

export default ImageSwap;
