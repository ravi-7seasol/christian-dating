import React, { useEffect, useState } from "react";
import "./style.css";
// import * as Hammer from "hammerjs";
import TinderCard from "react-tinder-card";

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
  const [data, setData] = useState(allData);

  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);

  const onSwipe = (dir, item) => {
    if (dir === "left") {
      left.push(item);
      const a = [...left, ...right];
      const filterd = allData.filter((x) => !a.includes(x));
      setData(filterd);
    } else if (dir === "right") {
      right.push(item);
      const a = [...left, ...right];
      const filterd = allData.filter((x) => !a.includes(x));
      setData(filterd);
    }
  };
  useEffect(()=>{
    console.log("data",data);
  },[data])

  return (
    <div className="cards-container">
      {data.length > 0 &&
        data.map((item, i, row) => {
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
          );
        })}
    </div>
  );
};

export default ImageSwap;
