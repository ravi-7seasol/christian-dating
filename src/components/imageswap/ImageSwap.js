import React, { useEffect, useState } from "react";
import "./style.css";
import * as Hammer from "hammerjs";

const ImageSwap = () => {
  const [left, setLeft] = useState([]);
  const [rigth, setRigth] = useState([]);
  const [imagesData, setimagesData] = useState([
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

  const removeItem = (id, events) => {
    if (events === "panleft") {
      setLeft([...left, imagesData.find((elem) => elem.id === parseInt(id))]);
    } else if (events === "panright") {
      setRigth([...rigth, imagesData.find((elem) => elem.id === parseInt(id))]);
      // setimagesData(imagesData.filter((elem) => elem.id !== parseInt(id)));
    }
  };
  useEffect(() => {
    // console.log("itemInd",itemInd);
    var tinderContainer = document.querySelector(".tinder");
    var allCards = document.querySelectorAll(".tinder--card");
    var nope = document.getElementById("nope");
    var love = document.getElementById("love");

    function initCards(card, index) {
      var newCards = document.querySelectorAll(".tinder--card:not(.removed)");

      newCards.forEach(function (card, index) {
        // console.log("card",index);
        card.style.zIndex = allCards.length - index;
        card.style.transform =
          "scale(" + (20 - index) / 20 + ") translateY(-" + 30 * index + "px)";
        card.style.opacity = (10 - index) / 10;
      });

      tinderContainer.classList.add("loaded");
    }

    initCards();

    allCards.forEach(function (el, ind) {
      var hammertime = new Hammer(el);

      hammertime.on("pan", function (event) {
        el.classList.add("moving");
      });

      hammertime.on("pan", function (event) {
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        tinderContainer.classList.toggle("tinder_love", event.deltaX > 0);
        tinderContainer.classList.toggle("tinder_nope", event.deltaX < 0);

        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform =
          "translate(" +
          event.deltaX +
          "px, " +
          event.deltaY +
          "px) rotate(" +
          rotate +
          "deg)";
      });

      hammertime.on("panend", function (event) {
        // console.log("event",event);
        el.classList.remove("moving");
        tinderContainer.classList.remove("tinder_love");
        tinderContainer.classList.remove("tinder_nope");

        var moveOutWidth = document.body.clientWidth;
        var keep =
          Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

        event.target.classList.toggle("removed", !keep);

        if (keep) {
          event.target.style.transform = "";
        } else {
          var endX = Math.max(
            Math.abs(event.velocityX) * moveOutWidth,
            moveOutWidth
          );
          var toX = event.deltaX > 0 ? endX : -endX;
          var endY = Math.abs(event.velocityY) * moveOutWidth;
          var toY = event.deltaY > 0 ? endY : -endY;
          var xMulti = event.deltaX * 0.03;
          var yMulti = event.deltaY / 80;
          var rotate = xMulti * yMulti;

          event.target.style.transform =
            "translate(" +
            toX +
            "px, " +
            (toY + event.deltaY) +
            "px) rotate(" +
            rotate +
            "deg)";
          initCards();
          removeItem(event.target.id, event.additionalEvent);
        }
      });
    });

    function createButtonListener(love) {
      return function (event) {
        var cards = document.querySelectorAll(".tinder--card:not(.removed)");
        console.log("cards", cards);
        var moveOutWidth = document.body.clientWidth * 1.5;

        if (!cards.length) return false;

        var card = cards[0];

        card.classList.add("removed");

        if (love) {
          card.style.transform =
            "translate(" + moveOutWidth + "px, -100px) rotate(-30deg)";
        } else {
          card.style.transform =
            "translate(-" + moveOutWidth + "px, -100px) rotate(30deg)";
        }

        initCards();

        event.preventDefault();
      };
    }

    var nopeListener = createButtonListener(false);
    var loveListener = createButtonListener(true);

    // nope.addEventListener('click', nopeListener);
    // love.addEventListener('click', loveListener);
  }, [left, rigth, imagesData]);

  return (
    <>
      <div className="tinder">
        <div className="tinder--status">
          <i className="fa fa-remove"></i>
          <i className="fa fa-heart"></i>
        </div>

        <div className="tinder--cards">
          {imagesData.length > 0 &&
            imagesData.map((item, i) => (
              <div className="tinder--card" id={item.id} key={i}>
                <img src={item.img} />
                <div className="card-details">
                  {/* <h3>
                    {" "}
                    {item.name} {i + 1}{" "}
                  </h3>
                  <p> {item.text} </p> */}
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
              </div>
            ))}
        </div>

        {/* <div className="tinder--buttons">
    <button id="nope"><i className="fa fa-remove"></i></button>
    <button id="love"><i className="fa fa-heart"></i></button>
  </div> */}
      </div>
    </>
  );
};

export default ImageSwap;
