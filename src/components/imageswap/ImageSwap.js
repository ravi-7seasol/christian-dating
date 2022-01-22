import React, { useEffect, useState } from "react";
import "./style.css";
// import * as Hammer from "hammerjs";
import TinderCard from "react-tinder-card";
import { ApiPost } from "../../helper/API/ApiData";
import AuthStorage from "../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../helper/utils";

const ImageSwap = () => {
  const allData = [
    {
      id: 0,
      img: "https://placeimg.com/600/300/people",
      name: "Demo",
      text: "This is a demo for Tinder like swipe cards",
      address: "USA, San Francisco Bay Area | Religion: ",
      addressspan: "Catholic",
      name: "John doe, 36",
      genderimg: "./assets/img/male.png",
    },
    {
      id: 1,  
      img: "https://placeimg.com/600/300/animals",
      name: "Demo",
      text: "This is a demo for Tinder like swipe cards",
      address: "USA, San Francisco Bay Area | Religion: ",
      addressspan: "Catholic",
      name: "John doe, 36",
      genderimg: "./assets/img/male.png",
    },
    {
      id: 2,
      img: "https://placeimg.com/600/300/nature",
      name: "Demo",
      text: "This is a demo for Tinder like swipe cards",
      address: "USA, San Francisco Bay Area | Religion: ",
      addressspan: "Catholic",
      name: "John doe, 36",
      genderimg: "./assets/img/male.png",
    },
    {
      id: 3,
      img: "https://placeimg.com/600/300/tech",
      name: "Demo",
      text: "This is a demo for Tinder like swipe cards",
      address: "USA, San Francisco Bay Area | Religion: ",
      addressspan: "Catholic",
      name: "John doe, 36",
      genderimg: "./assets/img/male.png",
    },
    {
      id: 4,
      img: "https://placeimg.com/600/300/arch",
      name: "Demo",
      text: "This is a demo for Tinder like swipe cards",
      address: "USA, San Francisco Bay Area | Religion: ",
      addressspan: "Catholic",
      name: "John doe, 36",
      genderimg: "./assets/img/male.png",
    },
  ];
  // const [data, setData] = useState(allData);

  const [getProfileMatch, setGetProfileMatch] = useState([])

  useEffect(() => {
    let token = {
      token: AuthStorage.getToken()
    }
    const body = xwwwFormUrlencoded(token)
    ApiPost('getprofilematches', body)
      .then(res => {
        console.log("res", res);
        setGetProfileMatch(res.matches)
      })
      .catch(err => {
        console.log("err", err);
      })
  }, [])

  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);

  const onSwipe = (dir, item) => {
    if (dir === "left") {
      left.push(item);
      const a = [...left, ...right];
      const filterd = getProfileMatch.filter((x) => !a.includes(x));
      setGetProfileMatch(filterd);
    } else if (dir === "right") {
      right.push(item);
      const a = [...left, ...right];
      const filterd = getProfileMatch.filter((x) => !a.includes(x));
      setGetProfileMatch(filterd);
    }
  };

  useEffect(() => {
    const lefts = getProfileMatch.filter((item) => !left.includes(item));
    setGetProfileMatch(lefts);
  }, [left]);

  useEffect(() => {
    const rights = getProfileMatch.filter((item) => !right.includes(item));
    setGetProfileMatch(rights);
  }, [right]);

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
                <img src={item.profile_picture} />

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
                      <button>View profile</button>
                    </div>
                    <button>View profile</button>
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
