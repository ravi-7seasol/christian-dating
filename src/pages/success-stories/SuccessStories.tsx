import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";
import PostSuccessStories from "../../components/models/PostSuccessStories";
import { ApiPost } from "../../helper/API/ApiData";
import { xwwwFormUrlencoded } from "../../helper/utils";
import { setIsLoading } from "../../redux/actions/loadingAction";
import "./success-stories.css";

const SuccessStories = () => {
  const [tog, setTog] = useState(false);
  const [pop, setPop] = useState(false);
  const [second, setSecond] = useState(false);
  const [postData, setPostData] = useState(false);
  const [storySort, setStorysort] = useState({
    sort: "asc",
  });
  const [storiesData, setStoriesData] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    const body = xwwwFormUrlencoded(storySort);
    ApiPost("stories", body)
      .then((res: any) => {
        setStoriesData(res.story);
        refreshData();
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setIsLoading(false));
      });
  }, []);

  const openCard = (id: any) => {
    if (selectedID === id) {
      setSelectedID("");
    } else {
      setSelectedID(id);
    }
  };

  const refreshData = () => {
    dispatch(setIsLoading(true));
    const body = xwwwFormUrlencoded(storySort);
    ApiPost("stories", body)
      .then((res: any) => {
        setStoriesData(res.story);
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setIsLoading(false));
      });
  };

  // const dt=
  //  [{
  //     id: 1,
  //     name: "bhargav",
  //     story_desc: "Sab ka malik ak",
  //     city: "surat",
  //     country: "india"

  //   }, {
  //     id: 2,
  //     name: "kemil",
  //     story_desc: "ab ki bar modi srakar",
  //     city: "surat",
  //     country: "india"
  //   }, {
  //     id: 3,
  //     name: "piyush",
  //     story_desc: "modi he to munkin he",
  //     city: "surat",
  //     country: "india"
  //   }, {
  //     id: 4,
  //     name: "jenis",
  //     story_desc: "Sab ka malik atm to bade hevy driver ho, bhai",
  //     city: "surat",
  //     country: "india"
  //   }, {
  //     id: 5,
  //     name: "mitesh",
  //     story_desc: "moj kar di mabete vah",
  //     city: "surat",
  //     country: "india"
  //   }]

  return (
    <>
      <div
        className={selectedID ? "overlay" : ""}
        onClick={() => {
          setSelectedID("");
        }}
      ></div>
      <div className="successStories-main">
        <div className="top-img">
          <img src="./assets/img/Group28.png" className="bg-img" />
          <Link to="/match_or_message">
            <img src="./assets/img/Group 16.png" className="back-img" />
          </Link>
        </div>
        {/* <Container className="position-relative">  */}
        <div className={selectedID ? "after-over " : "card-position"}>
          {/* <div className="d-flex flex-wrap justify-content-center"> */}
          {storiesData?.map((data: any, i) => (
            <div
              key={i}
              className={selectedID === i.toString() ? "pop-over" : "card-main"}
              onClick={() => openCard(i.toString())}
            >
              <div className="d-flex">
                <div style={{ width: "70px", height: "70px" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={
                      data?.thumb_image
                        ? data?.thumb_image
                        : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                  />
                </div>
                <div className="person-name">
                  <h6>{data.name}</h6>
                  <p>
                    {data.city}, {data.state}
                  </p>
                </div>
                {selectedID === i.toString() && (
                  <img src="./assets/img/wrong.png" className="calcel-btn" />
                )}
              </div>
              <div className="card-content">
                <p>{data.story_desc}</p>
              </div>
            </div>
          ))}
          {/* </div> */}

          {/* <div
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
           </div> */}
          <Buttons
            onClick={() => {
              setPostData(true);
            }}
            ButtonStyle="post-btn"
          >
            +
          </Buttons>
        </div>
        {/* </Container> */}
      </div>

      <PostSuccessStories
        show={postData}
        onhide={() => setPostData(false)}
        refresh={refreshData}
      />
    </>
  );
};

export default SuccessStories;
