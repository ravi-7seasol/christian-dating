import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ImageSwap from "../../components/imageswap/ImageSwap";
import STORAGEKEY from "../../config/APP/app.config";
import { ApiPost } from "../../helper/API/ApiData";
import AuthStorage from "../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../helper/utils";
import { getProfileImage } from "../../redux/actions/getProfileImage";
import { setIsLoading } from "../../redux/actions/loadingAction";
import { messageId } from "../../redux/actions/messageIdAction";
import { Store } from "react-notifications-component";
import { cssTransition, toast, ToastContainer } from "react-toastify";
import { messageData } from '../../redux/actions/messageDataAction';
import { useNavigate } from "react-router-dom";
const MatchOrMessage = () => {
  const navigate = useNavigate();
  // const [like, setLike] = useState(false);
  const [id, setId] = useState("");
  const [viewProfileImg, setViewProfileImg] = useState("");
  const [isRewind, setIsRewind] = useState(false);
  const [isSkip, setIsSkip] = useState(false);
  const [rate, setRate] = useState('')

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('rate', rate);
  }, [rate]);

  // useEffect(() => {
  //   setLike(false)
  // }, [id]);

  const likehandleChange = () => {
    let data = {
      id: id,
      // id: AuthStorage.getStorageJsonData(STORAGEKEY.userData).user_id,
      rate: rate === "Like" ? "dislike" : "Like",
      token: AuthStorage.getToken(),
    };
    const body = xwwwFormUrlencoded(data);
    ApiPost("rateprofile", body)
      .then((res: any) => {
        console.log("res", res);
        // { res.status === "true" && setLike(!like) }
        showAlert("Liked");
      })
      .catch((err) => {
        console.log("err", err);
      });
    // setLike(!like);
  };

  const msgChange = () => {
    dispatch(messageId(id));
  };
  const ViewProfile = (id: any) => {
    // console.log("clicked");
    navigate(`/show-profile?profileid=${id}`);
  };

  const inboxData = (msgData: any) => {
    console.log('msgData', msgData);
    setRate(msgData.rate)
    setViewProfileImg(msgData.profile_picture)
    dispatch(messageData(msgData))
  }

  const rewind = () => {
    setIsRewind(true);
    showAlert("Rewind");
  };

  const skip = () => {
    setIsSkip(true);
    showAlert("Skiped");
  };

  const showAlert = (value: any) => {
    toast.success(value, {
      transition: cssTransition({
        enter: "animate__animated animate__bounceIn",
        exit: "animate__animated animate__bounceOut",
      }),
    });
  };

  return (
    <>
      <Container>
        <div className="match-or-message mt-3 mb-3">
          <p>Profiles based on preference settings</p>
        </div>
      </Container>
      {/* <div className="slider pt-5"> */}
      {/* <Slider {...settings}>
                    {slider.map((item) => (
                        <div className='slider-card'>
                            <img src={item.img} width="100%" />
                            <div className="slid-verified-picture">
                                <img src={item.verifiedpic} alt="" />
                                <p>{item.verifiedtext}</p>
                            </div>
                            <div className="slid-img-popup">
                                <p>{item.address}<span> {item.addressspan} </span></p>
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className='name-age'>{item.name}</h5>
                                    <img src={item.genderimg} alt="" height="8%" width="8%" className='ml-3' />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider> */}
      {/* </div> */}
      <ImageSwap
        Id={setId}
        Data={inboxData}
        isSkip={isSkip}
        isRewind={isRewind}
        changeRewind={() => setIsRewind(false)}
        changeSkip={() => setIsSkip(false)}
      />
      <Container>
        <div className="activity-main">
          <div className="" onClick={rewind}>
            <div className="rewind animation">
              {/* <Link to="/community"> */}
              <img src="./assets/img/Group 17.png" />
              {/* </Link> */}
            </div>
            <p className="text">Rewind</p>
          </div>
          <div onClick={skip}>
            <div className="skip-content animation">
              {/* <Link to="/success_stories"> */}
              <img src="./assets/img/Group 18.png" />
              {/* </Link> */}
            </div>
            <p className="text">Skip</p>
          </div>
          {rate === "Like" ? <div>
            <div className="like-content-second-img">
              <img
                src="./assets/img/dislike heart.png"
                onClick={() => likehandleChange()}
              />
            </div>
            <p className="text">Dislike</p>
          </div>
            : <div>
              <div className="like-content animation">
                <img
                  src="./assets/img/Group 19.png"
                  onClick={() => likehandleChange()}
                />
              </div>
              <p className="text">Like</p>
            </div>}
          <div>
            <div className="message-content animation">
              <Link to="/inbox">
                <img
                  src="./assets/img/Group 20.png"
                  onClick={() => msgChange()}
                />
              </Link>
            </div>
            <p className="text">Message</p>
          </div>
          <div>
            <div className="profile-pic animation">
              <img
                src={viewProfileImg ? viewProfileImg : "./assets/img/nonprofileImg.png"}
                onClick={() => ViewProfile(id)}
              />
            </div>
            <p className="text">View profile</p>
          </div>
        </div>
        <div className="message-bottom-popup mb-2">
          <div className="message-bottom-popup-header">
            <img src="./assets/img/notification-ball.png" alt="" />
            <img src="./assets/img/wrong.png" alt="" />
          </div>
          <div className="message-bottom-popup-body">
            <p className="message-bottom-popup-body-text">
              Could she be the one? you both have a match rating of{" "}
              <span> 89%</span>! Try sending her a message to make the first
              step.
            </p>
          </div>
        </div>
      </Container>
      <div className="subscription-main">
        <h1>SUBSCRIBE TO CONNECT WITH YOUR MATCHES</h1>
        <Container>
          <Row className="">
            <Col md={6} className="mb-5">
              <div className="subscription-card">
                <h1> 1 MONTH</h1>
                <p>Unlimited Match</p>
                <p>Unlimited Message</p>
                <p>Community Chat</p>
                <Button>BUY AT $19.99</Button>
              </div>
            </Col>
            <Col md={6} className="">
              <div className="subscription-card-2">
                <div className="subscription-header">
                  <h1>MOST POPULAR</h1>
                </div>
                <div className="subscription-body">

                  <h1> 3 MONTH</h1>
                  <p>Unlimited Match</p>
                  <p>Unlimited Message</p>
                  <p>Community Chat</p>
                  <Button>BUY AT $39.99</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MatchOrMessage;
