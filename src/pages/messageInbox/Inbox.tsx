import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InputField from "../../components/Inputfield";
import InpEmoji from "../../components/InputEmoji";
import "./inbox.css";
import STORAGEKEY from "../../config/APP/app.config";
import AuthStorage from "../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../helper/utils";
import { ApiPost } from "../../helper/API/ApiData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { setIsLoading } from "../../redux/actions/loadingAction";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import moment from "moment";

const Inbox = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const [openGift, setOpenGift] = useState(false);
  const [selectedID, setSelectedID] = useState("");
  const [tog, setTog] = useState(false);
  const [selectedData, setSelectedData] = useState<any>();
  const [messageData, setMessageData] = useState<any>("");
  const [chatList, setChatList] = useState<any>();
  const [chatData, setChatData] = useState<any>();
  const [currentUser, setCurrentUser] = useState<any>();
  const [gif, setGif] = useState<any>();
  const [gifTog, setGifTog] = useState(false);
  const [clearText, setClearText] = useState<any>(false);
  const [selectedImage, setSelectedImage] = useState<any>();
  const [imgTog, setImgTog] = useState(false);

  const dispatch = useDispatch();
  const message_ID = useSelector(
    (state: RootStateOrAny) => state.message_Id.message_Id
  );

  useEffect(() => {
    dispatch(setIsLoading(true));
    const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);

    const token = {
      token: tokenID,
    };

    const body = xwwwFormUrlencoded(token);

    ApiPost("getchatlist", body)
      .then((res: any) => {
        setChatList(res);
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setIsLoading(false));
      });
  }, [chatData]);

  useEffect(() => {
    // console.log("message_ID", message_ID);
    if (message_ID) {
      setTog(true);
      setSelectedID(message_ID);
      // setSelectedData(item);

      const getChatData = {
        token: AuthStorage.getStorageData(STORAGEKEY.token),
        participant_id: message_ID,
      };

      const body = xwwwFormUrlencoded(getChatData);

      ApiPost("getchat", body)
        .then((res: any) => {
          if (res.status === "false") {
            return;
          } else {
            setChatData(res);
            setCurrentUser(res?.current_user);
            dispatch(setIsLoading(false));
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch(setIsLoading(false));
        });
    }
  }, []);

  const gifList = {
    gif: [
      {
        id: 1,
        src: "https://tenor.com/view/tu-samjha-nhi-tu-nhi-smajha-akshay-kumar-akshay-kumar-in-car-gif-23496568.gif",
      },
      {
        id: 2,
        src: "https://tenor.com/view/sunda-ko-aa-mast-naha-dho-ke-aa-paresh-rawal-baburao-hera-pheri-gif-21333158.gif",
      },
      {
        id: 3,
        src: "https://tenor.com/view/sabbir31x-khopdi-tod-sale-ka-hera-pheri-khopdi-tod-sale-ka-gif-15736102.gif",
      },
      {
        id: 4,
        src: "https://tenor.com/view/akshay-kumar-50rupaya-kat-overacting-hera-pheri-baburao-bollywood-gif-15503267.gif",
      },
      {
        id: 5,
        src: "https://tenor.com/view/has-re-halkat-has-hera-pheri-lol-laugh-akshay-kumar-gif-17189201.gif",
      },
    ],
  };

  const getChat = () => {
    dispatch(setIsLoading(true));
    const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);

    const getChatData = {
      token: tokenID,
      participant_id: selectedID,
    };

    const body = xwwwFormUrlencoded(getChatData);

    ApiPost("getchat", body)
      .then((res: any) => {
        setChatData(res);
        setCurrentUser(res.current_user);
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setIsLoading(false));
      });
  };

  const messageOpen = (item: any) => {
    dispatch(setIsLoading(true));
    setSelectedID(item.receiver_id);
    setTog(true);
    setSelectedData(item);
    const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);

    const getChatData = {
      token: tokenID,
      participant_id: item.receiver_id,
    };

    const body = xwwwFormUrlencoded(getChatData);

    ApiPost("getchat", body)
      .then((res: any) => {
        setChatData(res);
        setCurrentUser(res.current_user);
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setIsLoading(false));
      });
  };

  const [sendMsg, setSendMsg] = useState("");

  const onHandaleChangeData = (message: string) => {
    setSendMsg(message);
  };

  const sendMsgByOnClick = () => {
    if (sendMsg !== "" && selectedID) {
      // dispatch(setIsLoading(true));
      // setMessageData(sendMsg);
      const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);
      const sendMessage = {
        token: tokenID,
        participant_id: parseInt(selectedID),
        message: sendMsg,
      };
      const body = xwwwFormUrlencoded(sendMessage);
      ApiPost("sendmessage", body)
        .then((res: any) => {
          console.log("res", res);
          setSendMsg("");
          setClearText(true)
          getChat();
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          console.log(error);
          dispatch(setIsLoading(false));
        });
    }
  };
  const getMessageData = (message: string) => {
    if (message !== "" && selectedID) {
      // dispatch(setIsLoading(true));
      // setMessageData(message);
      const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);
      const sendMessage = {
        token: tokenID,
        participant_id: parseInt(selectedID),
        message: message,
      };
      const body = xwwwFormUrlencoded(sendMessage);
      ApiPost("sendmessage", body)
        .then((res: any) => {
          getChat();
          setSendMsg("");
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          console.log(error);
          dispatch(setIsLoading(false));
        });
    }
  };
  const openGif = (item: any) => {
    setGif(item);
    setOpenGift(false);
    setGifTog(true);
    setImgTog(false);
  };
  const closeGif = () => {
    setGifTog(false);
  };

  const selectImg = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setImgTog(true);
      setGifTog(false);
    }
  };
  const closeImg = () => {
    setImgTog(false);
    setSelectedImage(undefined);
  };

  return (
    <>
      <div className="inbox-main px-3">
        <Container>
          <Row>
            <Col md={5}>
              {/* <div className="inbox-profile-img">
                <div className="profile-content">
                  <img src="./assets/img/profile-picture.png" />
                  <h6>likes you</h6>
                </div>
                <div className="profile-content">
                  <img src="./assets/img/profile-picture.png" />
                  <h6>you like</h6>
                </div>
                <div className="profile-content">
                  <img src="./assets/img/profile-picture.png" />
                  <h6>match</h6>
                </div>
                <div className="profile-content">
                  <div className="like-counter">2.1K</div>
                  <h6 className="like-counter-content">profile views</h6>
                </div>
              </div> */}
              {/* <div className="border-content"></div> */}
              <div className="handle-chat-scroll">
                <div className="messages">
                  {/* <div className="messages-content">
                    <img src="./assets/img/messenger.png" />

                    <div className={chatList?.total_unseen_messages.length ? "messages-notification" : ""}>{chatList?.total_unseen_messages}</div>
                  </div> */}
                  <div>
                    <h3 className="Messages-text">Messages</h3>
                  </div>
                </div>
                {chatList?.chat.length ? (
                  <>
                    {chatList?.chat.map((data: any, i: number) => (
                      <div
                        className={`${
                          selectedID === data.receiver_id && "messages-focus"
                        } messages`}
                        key={i}
                        onClick={() => {
                          messageOpen(data);
                        }}
                      >
                        <div className="chat-profile-img-main">
                          <img
                            src={
                              data.sender_participant_image
                                ? data.sender_participant_image
                                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            }
                            className="chat-profile"
                          />
                          <div className="online"></div>
                        </div>
                        <div
                          className={`${
                            selectedID === data.receiver_id &&
                            "chat-messages-click"
                          } chat-messages`}
                        >
                          <h4>{data.receiver_name}</h4>
                          <p>{data.last_message}</p>
                        </div>
                        <div
                          className={`${
                            selectedID === data.receiver_id &&
                            "messages-time-click"
                          } messages-time`}
                        >
                          <h6>{moment(data.last_message_time).format("LT")}</h6>
                          <div
                            className={
                              data.total_unread_messages.length
                                ? "messages-counts"
                                : ""
                            }
                          >
                            {data.total_unread_messages}
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <h3 style={{ textAlign: "center" }}> No Massege Found </h3>
                )}
              </div>
            </Col>
            {tog ? (
              <Col md={7} className="px-0 ">
                <div className="ps-0 Conversation-starters-scroll">
                  <div className="Conversation-starters">
                    <div className="bg-white chat-top-header">
                      {width > 767 && (
                        <div className="messages">
                          <div className="chat-profile-img-main">
                            <img
                              src={selectedData?.sender_participant_image}
                              className="chat-profile"
                            />
                            <div className="online"></div>
                          </div>
                          <div className="chat-messages">
                            <h4>{selectedData?.receiver_name}</h4>
                            <h6 className="messages-time">
                              {moment(selectedData?.last_message_time).format(
                                "LT"
                              )}
                            </h6>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* <div className="border-content"></div> */}
                    <div className="scrool px-3">
                      <div className="text-grid">
                        {chatData?.chat?.length ? (
                          <>
                            {chatData?.chat.map(
                              (data: any, i: number) =>
                                data.receiver_id === selectedID && (
                                  <div
                                    key={i}
                                    className={
                                      data.sender_id !== currentUser
                                        ? "incoming-massage-and-time"
                                        : "massage-and-time"
                                    }
                                  >
                                    <h3
                                      className={
                                        data.sender_id !== currentUser
                                          ? "first-text"
                                          : "first-text-replay"
                                      }
                                      key={i}
                                    >
                                      {data.message}
                                    </h3>
                                    <p>
                                      {moment(data.date_time).format("HH:mm")}
                                    </p>
                                  </div>
                                )
                            )}

                            {gifTog && (
                              <div className="gif-container">
                                <div className="icon">
                                  <FontAwesomeIcon
                                    icon={faTimesCircle}
                                    onClick={() => closeGif()}
                                  />
                                </div>
                                <img src={gif} className="gifbig"></img>

                                <button className="submit">
                                  <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                              </div>
                            )}
                            {imgTog && (
                              <div className="gif-container">
                                <div className="icon">
                                  <FontAwesomeIcon
                                    icon={faTimesCircle}
                                    onClick={() => closeImg()}
                                  />
                                </div>
                                <img src={URL.createObjectURL(selectedImage)} />
                                <button className="submit">
                                  <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                              </div>
                            )}
                          </>
                        ) : (
                          <div style={{ textAlign: "center" }}>
                            <h5>No chat data</h5>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="input-area">
                      <div>
                        <div className="choose-picture">
                          <label htmlFor="imgSelect">
                            <img src="./assets/img/picture-one (1).png" />
                            <input
                              type="file"
                              onChange={(e) => selectImg(e)}
                              onClick={(e: any) => {
                                e.target.value = "";
                              }}
                              accept="image/*"
                              className="d-none"
                              id="imgSelect"
                            />
                          </label>
                        </div>
                      </div>
                      <div>
                        <div className="send-gift">
                          <img
                            src="./assets/img/gift (1).png"
                            onClick={() => setOpenGift(!openGift)}
                          />
                          {openGift && (
                            <div className="gifts">
                              {gifList.gif.map((data: any, i: number) => (
                                <img
                                  src={data.src}
                                  key={i}
                                  onClick={() => {
                                    openGif(data.src);
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="input-chat">
                        <InpEmoji
                          getMData={getMessageData}
                          onHandaleChangeData={onHandaleChangeData}
                          clearText={clearText}
                          afterClear={setClearText}
                        />
                        <div className="inbox-send-msg-btn">
                          <img
                            src="./assets/img/right-arrow (2).png"
                            style={{ zIndex: 999 }}
                            onClick={() => sendMsgByOnClick()}
                            width="15px"
                            height="15px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ) : (
              <></>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Inbox;
