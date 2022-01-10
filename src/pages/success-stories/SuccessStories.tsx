import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";
import PostSuccessStories from "../../components/models/PostSuccessStories";
import "./success-stories.css";

const SuccessStories = () => {
  const [tog, setTog] = useState(false);
  const [pop, setPop] = useState(false);
  const [second, setSecond] = useState(false);
  const [postData, setPostData] = useState(false)
  return (
    <>
      <div className="successStories-main">
        <div className="top-img">
          <img src="./assets/img/Group28.png" className="bg-img" />
          <Link to="/match_or_message">
            <img src="./assets/img/Group 16.png" className="back-img" />
          </Link>
        </div>
        {/* <Container> */}
        <div className={tog || pop || second ? "after-over " : "card-position"}>
          <div className={tog || pop || second ? "overlay" : ""}></div>
          <div
            className={tog ? "pop-over" : "card-main"}
            onClick={() => setTog(!tog)}
          >
            <div className="d-flex">
              <div>
                <img src="./assets/img/Ellipse 22.png" />
              </div>
              <div className="person-name">
                <h5>James Marcus</h5>
                <p>Town, ST</p>
              </div>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
          <div
            className={pop ? "pop-over " : "card-main"}
            onClick={() => setPop(!pop)}
          >
            <div className="d-flex">
              <div>
                <img src="./assets/img/Ellipse 23.png" />
              </div>
              <div className="person-name">
                <h5>Frank G.</h5>
                <p>Town, ST</p>
              </div>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
          <div
            className={second ? "pop-over" : "card-main"}
            onClick={() => setSecond(!second)}
          >
            <div className="d-flex">
              <div>
                <img src="./assets/img/Ellipse 23.png" />
              </div>
              <div className="person-name">
                <h5>Frank Gg.</h5>
                <p>Town, ST</p>
              </div>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
          <div className="card-main">
            <div className="d-flex">
              <div>
                <img src="./assets/img/Ellipse 23.png" />
              </div>
              <div className="person-name">
                <h5>Frank Ggg.</h5>
                <p>Town, ST</p>
              </div>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
          <div className="card-main">
            <div className="d-flex">
              <div>
                <img src="./assets/img/Ellipse 23.png" />
              </div>
              <div className="person-name">
                <h5>Frank Ggg.</h5>
                <p>Town, ST</p>
              </div>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
          <div className="card-main">
            <div className="d-flex">
              <div>
                <img src="./assets/img/Ellipse 23.png" />
              </div>
              <div className="person-name">
                <h5>Frank Ggg.</h5>
                <p>Town, ST</p>
              </div>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
          <div className="card-main">
            <div className="d-flex">
              <div>
                <img src="./assets/img/Ellipse 23.png" />
              </div>
              <div className="person-name">
                <h5>Frank Ggg.</h5>
                <p>Town, ST</p>
              </div>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
          <div className="card-main">
            <div className="d-flex">
              <div>
                <img src="./assets/img/Ellipse 23.png" />
              </div>
              <div className="person-name">
                <h5>Frank Ggg.</h5>
                <p>Town, ST</p>
              </div>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
          <div className="card-main">
            <div className="d-flex">
              <div>
                <img src="./assets/img/Ellipse 23.png" />
              </div>
              <div className="person-name">
                <h5>Frank Ggg.</h5>
                <p>Town, ST</p>
              </div>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
            <Buttons onClick={() => {setPostData(true)}} ButtonStyle="post-btn">
              +
            </Buttons>
        </div>
        {/* </Container> */}
      </div>

      <PostSuccessStories show={postData} onhide={()=>setPostData(false)}/>
    </>
  );
};

export default SuccessStories;
