import React, { useEffect, useState } from "react";
import "./style.css";
// import * as Hammer from "hammerjs";
import TinderCard from "react-tinder-card";
import { ApiPost } from "../../helper/API/ApiData";
import AuthStorage from "../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../helper/utils";


const ImageSwap = () => {
  const [data, setData] = useState([
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
  ]);

  const [getProfileMatch, setGetProfileMatch] = useState([])

  useEffect(() => {
    let token = {
      token: AuthStorage.getToken()
    }
    const body = xwwwFormUrlencoded(token)
    ApiPost('/getprofilematches', body)
      .then(res => {
        console.log("res", res);
        // setGetProfileMatch(res.matches)
      })
      .catch(err => {
        console.log("err", err);
      })
  }, [])

  useEffect(() => {
    console.log("getProfileMatch",getProfileMatch);
  }, [getProfileMatch])

  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);

  const onSwipe = (direction, item) => {
    console.log(item, direction);
    // res = arr1.filter(item => !arr2.includes(item));

    if (direction === "left") {
      setLeft([...left, item]);
      console.log("left");
    } else if (direction === "right") {
      setRight([...right, item]);
    }
  };
  useEffect(() => {
    const lefts = data.filter((item) => !left.includes(item));
    setData(lefts);
    console.log("left", left);
  }, [left]);

  useEffect(() => {
    const rights = data.filter((item) => !right.includes(item));
    setData(rights);
    console.log("right", right);
  }, [right]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  // const onCardLeftScreen = (myIdentifier) => {
  //   console.log(myIdentifier);
  // };



  return (
    <div className="cards-container">
      {data.length>0 && data.map((item, i, row) => {
        console.log("row", row.length - 1 );
        return(
          <TinderCard
            onSwipe={(dir) => onSwipe(dir, item)}
            // onCardLeftScreen={(item) => onCardLeftScreen(item)}
            preventSwipe={["up", "down"]}
            key={i}
            className={`swap-card`}
          >
            <div className="card-inner" style={{transform:i===0 && "translateY(-10px)" }}>
              <img src={item.img} />
              {/* {row.length - 1 &&  ( */}
              <div className="details">
                <div className="">
                  <p>
                    {item.address}
                    <span> {item.addressspan} </span>
                  </p>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      {" "}
                      <h5 className="name-age">{item.name}</h5>
                      <img
                        src={item.genderimg}
                        alt=""
                        height="8%"
                        width="8%"
                        className="ml-3"
                      />

                    </div>
                    <button>View profile</button>
                  </div>
                </div>
              </div>
              {/* )} */}
            </div>
          </TinderCard>
        )
      }
      )}
    </div>
  );
};

export default ImageSwap;
