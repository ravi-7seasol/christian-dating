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
    sort: "asc"
  });
  const [storiesData, setStoriesData] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsLoading(true))
    const body = xwwwFormUrlencoded(storySort);
    ApiPost('stories', body)
      .then((res: any) => {
        setStoriesData(res.story);
        dispatch(setIsLoading(false))
      }).catch((error) => {
        console.log(error);
        dispatch(setIsLoading(false))
      })
  }, [])

  const openCard = (item: any) => {
    if (selectedID === item.id) {
      setSelectedID("")
    } else {
      setSelectedID(item.id)
    }
  }

  const dt= 
   [{
      id: 1,
      name: "bhargav",
      story_desc: "Sab ka malik ak",
      city: "surat",
      country: "india"

    }, {
      id: 2,
      name: "kemil",
      story_desc: "ab ki bar modi srakar",
      city: "surat",
      country: "india"
    }, {
      id: 3,
      name: "piyush",
      story_desc: "modi he to munkin he",
      city: "surat",
      country: "india"
    }, {
      id: 4,
      name: "jenis",
      story_desc: "Sab ka malik atm to bade hevy driver ho, bhai",
      city: "surat",
      country: "india"
    }, {
      id: 5,
      name: "mitesh",
      story_desc: "moj kar di mabete vah",
      city: "surat",
      country: "india"
    }]
  

  return (
    <>
    <div className={selectedID ? "overlay" : ""}></div>
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
            {
              dt?.map((data: any, i) => (
                  <div key={i}
                    className={selectedID === data.id ? "pop-over" : "card-main"}
                    onClick={() => openCard(data)}
                  >
                    <div className="d-flex">
                      <div>
                        <img src="./assets/img/Ellipse 22.png" />
                      </div>
                      <div className="person-name">
                        <h5>{data.name}</h5>
                        <p>{data?.city}, {data?.country}</p>
                      </div>
                    </div>
                    <div className="card-content">
                      <p>
                        {data.story_desc}
                      </p>
                    </div>
                </div>
              ))
            }
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
            <Buttons onClick={() => { setPostData(true) }} ButtonStyle="post-btn">
              +
            </Buttons>
          </div>
        {/* </Container> */}
      </div>

      <PostSuccessStories show={postData} onhide={() => setPostData(false)} />
    </>
  );
};

export default SuccessStories;
