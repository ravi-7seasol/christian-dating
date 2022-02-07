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
    sort: "desc",
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
          <div className={selectedID ? "after-over " : "card-position"}>
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
                          : "./assets/img/nonprofileImg.png"
                      }
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "./assets/img/nonprofileImg.png";
                      }}
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

            <Buttons
              onClick={() => {
                setPostData(true);
              }}
              ButtonStyle="post-btn animation"
            >
              +
            </Buttons>
          </div>
        </div>
      <PostSuccessStories
        show={postData}
        onhide={() => setPostData(false)}
        refresh={refreshData}
      />
       <div className="content-footer-baloon">
             <div className="bottom-baloons"></div>
          </div>
    </>
  );
};

export default SuccessStories;
