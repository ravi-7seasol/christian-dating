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
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import Slider from "react-slick";

const Inbox = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const [openGift, setOpenGift] = useState(false);
  const [selectedID, setSelectedID] = useState("");
  const [tog, setTog] = useState(false);
  const [selectedData, setSelectedData] = useState<any>();
  const [chatList, setChatList] = useState<any>();
  const [chatData, setChatData] = useState<any>();
  const [currentUser, setCurrentUser] = useState<any>();
  const [gif, setGif] = useState<any>();
  const [gifTog, setGifTog] = useState(false);
  const [clearText, setClearText] = useState<any>(false);
  const [selectedImage, setSelectedImage] = useState<any>();
  const [imgTog, setImgTog] = useState(false);
  const [displayData, setDisplayData] = useState(false);
  const [displayStaticMessage, setDisplayStaticMessage] = useState<any>(false);

  const dispatch = useDispatch();
  const message_ID = useSelector(
    (state: RootStateOrAny) => state.message_Id.message_Id
  );

  const message_Data = useSelector((state: RootStateOrAny) => state.message_Data)


  const gotoBottom = (id: any) => {
    var element: any = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }


  const MINUTE_MS = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      getChatList()
      // messageOpen(selectedData)
      if (selectedData) {
        messageOpen(selectedData, "")
      }
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  })

  const getChatList = () => {
    const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);

    const token = {
      token: tokenID,
    };

    const body = xwwwFormUrlencoded(token);

    ApiPost("getchatlist", body)
      .then((res: any) => {
        if (res.status === "false") {
          setChatList(null)
        } else {
          console.log("res.matches", res.matches)
          setChatList(res);
          if (message_ID) {
            let displayID = res.matches.find((data: any) => message_ID === data.id)
            if (displayID.id) {
              setDisplayStaticMessage(true);
              console.log("displayID", displayID.id)
            }

          }
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }



  useEffect(() => {
    getChatList()
    if (message_ID) {
      setTog(true);
      setSelectedID(message_ID);
      setDisplayData(true);

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

          }
        })
        .catch((error) => {
          console.log(error);
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

  const staticMsg = [
    {
      msg: "Hello"
    },
    {
      msg: "Hii"
    },
    {
      msg: "How are you?"
    },
    {
      msg: "I am fine"
    },
    {
      msg: "What about you?"
    },
    {
      msg: "Hello"
    },
    {
      msg: "Hii"
    },
    {
      msg: "How are you?"
    },
    {
      msg: "I am fine"
    },
    {
      msg: "What about you?"
    }
  ]

  const getChat = () => {
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
        gotoBottom("chatBox")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getChat()
  }, [selectedID]);

  const messageOpen = (item: any, flag: string) => {
    setDisplayData(false)
    let activeChat
    let activeMatchChat
    if (chatList.current_user !== item.receiver_id) {
      activeChat = chatList.chat.findIndex((data: any) => data.receiver_id === item.receiver_id)
    } else if (chatList.current_user === item.receiver_id) {
      activeChat = chatList.chat.findIndex((data: any) => data.sender_id === item.sender_id)
    }
    else if (chatList.current_user !== item.id) {
      activeMatchChat = chatList.starter.findIndex((data: any) => data.id === item.id)
    }
    const selectedChatId = chatList.current_user !== item.receiver_id ? item.receiver_id : item.sender_id

    if (flag === "chat") {
      setSelectedID(selectedChatId);
      setTog(true);
      setSelectedData(item);
    } else if (flag === "starter") {
      setSelectedID(item.id);
      setTog(true);
      setSelectedData(item);
    }


    // if (activeChat) {
    //   chatList.chat[activeChat].total_unread_messages = "0"
    // }



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
        gotoBottom("chatBox")
      })
      .catch((error) => {
        console.log(error);
        gotoBottom("chatBox")
      });
  };

  const [sendMsg, setSendMsg] = useState("");

  const onHandaleChangeData = (message: string) => {
    setSendMsg(message);
  };

  const sendMsgByOnClick = () => {
    getMessageData(sendMsg)
    //   if (sendMsg !== "" && selectedID) {
    //     const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);
    //     const sendMessage = {
    //       token: tokenID,
    //       participant_id: parseInt(selectedID),
    //       message: sendMsg,
    //     };
    //     const body = xwwwFormUrlencoded(sendMessage);
    //     ApiPost("sendmessage", body)
    //       .then((res: any) => {
    //         setSendMsg("");
    //         setClearText(true)
    //         getChat();
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
  }
  const sendStaticMsg = (message: string) => {
    getMessageData(message)
  }
  const getMessageData = (message: string) => {
    if (message !== "" && selectedID) {
      const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);
      const sendMessage = {
        token: tokenID,
        participant_id: parseInt(selectedID),
        message: message.replace(/\p{Emoji}/ug, (m: any, idx) =>
          `&#${m.codePointAt().toString()};`
        )
      };
      const body = xwwwFormUrlencoded(sendMessage);
      ApiPost("sendmessage", body)
        .then((res: any) => {
          getChat();
          setSendMsg("");
          setClearText(true)
          getChatList();
        })
        .catch((error) => {
          console.log(error);
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

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    swipeToSlide: true,
    // slidesToShow: 5,
    slidesToScroll: 3,
    variableWidth: true,
    // initialSlide: 0,
  }

  return (
    <>
      <div className="inbox-main px-3">
         <div className="top-baloons"></div>
        <Container>
          <Row>
            <Col md={5} className="p-0">
              <div className="inbox-profile-img mt-3">
                <div className="profile-content" style={{ textAlign: "center" }}>
                  <img src={chatList?.liked_by[0]?.profile_picture ? chatList?.liked_by[0]?.profile_picture : "./assets/img/nonprofileImg.png"}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = "./assets/img/nonprofileImg.png";
                    }} />
                  {chatList?.liked_by.length > 0 && <h6>likes you</h6>}
                </div>
                <div className="profile-content" style={{ textAlign: "center" }}>
                  <img src={chatList?.likes[0]?.profile_picture ? chatList.likes[0].profile_picture : "./assets/img/nonprofileImg.png"}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = "./assets/img/nonprofileImg.png";
                    }} />
                  {chatList?.likes.length > 0 && <h6>you like</h6>}
                </div>
                <div className="profile-content" style={{ textAlign: "center" }}>
                  <img src={chatList?.matches ? chatList.matches[chatList.matches.length - 1].profile_picture : "./assets/img/nonprofileImg.png"}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = "./assets/img/nonprofileImg.png";
                    }} />
                  {chatList?.matches.length > 0 && <h6>match</h6>}
                </div>
                <div className="profile-content">
                  <div className="like-counter">{chatList && chatList.viewed}</div>
                  {chatList?.viewed.length > 0 && <h6 className="like-counter-content">profile views</h6>}
                </div>
              </div>
              <div className="border-content"></div>
              <div style={{ textAlign: "center" }}>
                <h3 className="Messages-text">Messages</h3>
              </div>
              <div className="handle-chat-scroll">
                <div className="messages">
                  {/* <div className="messages-content">
                    <img src="./assets/img/messenger.png" />

                    <div className={chatList?.total_unseen_messages.length ? "messages-notification" : ""}>{chatList?.total_unseen_messages}</div>
                  </div> */}

                </div>
                {chatList && chatList?.chat.length ? (
                  <>
                    {chatList?.chat.map((data: any, i: number) =>
                      chatList.current_user !== data.receiver_id ?
                        <div
                          className={`${selectedID === data.receiver_id && "messages-focus"
                            } messages cursor-pointer`}
                          key={i}
                          onClick={() => {
                            messageOpen(data, "chat");

                          }}
                        >
                          <div className="chat-profile-img-main">
                            <img
                              src={
                                data.receiver_participant_image
                                  ? data.receiver_participant_image
                                  : "./assets/img/nonprofileImg.png"
                              }
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = "./assets/img/nonprofileImg.png";
                              }}
                              className="chat-profile"
                            />
                            {data.if_online === "1" && <div className="online"></div>}
                          </div>
                          <div
                            className={`${selectedID === data.receiver_id &&
                              "chat-messages-click"
                              } chat-messages`}
                          >
                            <h4>{data.receiver_name}</h4>
                            <p>{data.last_message}</p>
                          </div>
                          <div
                            className={`${selectedID === data.receiver_id &&
                              "messages-time-click"
                              } messages-time`}
                          >
                            <h6>{moment(data.last_message_time).format("LT")}</h6>

                            {data.total_unread_messages !== "0" &&
                              <div
                                className={
                                  data.total_unread_messages
                                    ? "messages-counts"
                                    : ""
                                }
                              >
                                {data.total_unread_messages}
                              </div>
                            }
                          </div>
                        </div>
                        :
                        <div
                          className={`${selectedID === data.sender_id && "messages-focus"
                            } messages cursor-pointer`}
                          key={i}
                          onClick={() => {
                            messageOpen(data, "chat");
                          }}
                        >
                          <div className="chat-profile-img-main">
                            <img
                              src={
                                data.sender_participant_image
                                  ? data.sender_participant_image
                                  : "./assets/img/nonprofileImg.png"
                              }
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = "./assets/img/nonprofileImg.png";
                              }}
                              className="chat-profile"
                            />
                            {data.if_online === "1" && <div className="online"></div>}
                          </div>
                          <div
                            className={`${selectedID === data.sender_id &&
                              "chat-messages-click"
                              } chat-messages`}
                          >
                            <h4>{data.sender_name}</h4>
                            <p>{data.last_message}</p>
                          </div>
                          <div
                            className={`${selectedID === data.sender_id &&
                              "messages-time-click"
                              } messages-time`}
                          >
                            <h6>{moment(data.last_message_time).format("LT")}</h6>

                            {data.total_unread_messages !== "0" &&
                              <div
                                className={
                                  data.total_unread_messages
                                    ? "messages-counts"
                                    : ""
                                }
                              >
                                {data.total_unread_messages}
                              </div>
                            }
                          </div>
                        </div>

                    )}

                  </>
                ) : (
                  // <h3 style={{ textAlign: "center" }}> No Massege Found </h3>
                  <></>
                )}

                {
                  chatList && chatList.starter.length ? (
                    <>
                      {chatList.starter.map((data: any, i: number) =>
                        <div
                          className={`${selectedID === data.id && "messages-focus"
                            } messages cursor-pointer`}
                          key={i}
                          onClick={() => {
                            messageOpen(data, "starter");
                          }}
                        >
                          <div className="chat-profile-img-main">
                            <img
                              src={
                                data.profile_picture
                                  ? data.profile_picture
                                  : "./assets/img/nonprofileImg.png"
                              }
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = "./assets/img/nonprofileImg.png";
                              }}
                              className="chat-profile"
                            />
                            {data.if_online === "1" && <div className="online"></div>}
                          </div>
                          <div
                            className={`${selectedID === data.id &&
                              "chat-messages-click"
                              } chat-messages`}
                          >
                            <h4>{data.name}</h4>
                            <p>{data.message}</p>
                          </div>
                          <div
                            className={`${selectedID === data.id &&
                              "messages-time-click"
                              } messages-time`}
                          >
                            <h6>MATCH {(data.matched_by_interest === "yes" || data.dob_matched === "yes") ? "by " : ""}
                              {(data.matched_by_interest === "yes" || data.dob_matched === "no") ? "Interest"
                                : (data.matched_by_interest === "no" || data.dob_matched === "yes") ? "Age"
                                  : (data.matched_by_interest === "Yes" || data.dob_matched === "yes") && "Interest & Age"
                              }
                            </h6>

                          </div>
                        </div>
                      )
                      }
                    </>
                  )
                    : ""
                }

                {!chatList &&
                  <div>
                    <h3 className="no-chat-found"> No Chat Found </h3>
                  </div>
                }
              </div>
            </Col>
            {chatList && <div className="divider-div"></div>}
            {tog ? (
              <Col md={7} className="px-0 ">
                <div className="ps-0 Conversation-starters-scroll">
                  <div className="Conversation-starters">

                    <div className="bg-white chat-top-header">
                      {width > 767 ? (
                        chatList?.current_user !== selectedData?.receiver_id ?
                          <div className="messages">
                            <div className="chat-profile-img-main">
                              <img
                                src={displayData ? message_Data.profile_picture : selectedData?.receiver_participant_image ? selectedData?.receiver_participant_image : selectedData?.profile_picture ? selectedData?.profile_picture : "./assets/img/nonprofileImg.png"}
                                className="chat-profile"
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null;
                                  currentTarget.src = "./assets/img/nonprofileImg.png";
                                }}
                              />
                              {selectedData?.if_online === "1" && <div className="online"></div>}
                            </div>
                            <div className="chat-messages">
                              <h4>{displayData ? message_Data.name : selectedData?.receiver_name ? selectedData?.receiver_name : selectedData?.name}</h4>
                              <h6 className="messages-time">
                                {moment(selectedData?.last_message_time).format(
                                  "LT"
                                )}
                              </h6>
                            </div>
                          </div>

                          :
                          <div className="messages">
                            <div className="chat-profile-img-main">
                              <img
                                src={selectedData?.sender_participant_image ? selectedData?.sender_participant_image : "./assets/img/nonprofileImg.png"}
                                className="chat-profile"
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null;
                                  currentTarget.src = "./assets/img/nonprofileImg.png";
                                }}
                              />
                              {selectedData?.if_online === "1" && <div className="online"></div>}
                            </div>
                            <div className="chat-messages">
                              <h4>{selectedData?.sender_name}</h4>
                              <h6 className="messages-time">
                                {moment(selectedData?.last_message_time).format(
                                  "LT"
                                )}
                              </h6>
                            </div>
                          </div>
                      )
                        :
                        <>
                        </>
                      }
                    </div>

                    {/* <div className="border-content"></div> */}
                    {width < 767 && <h5 className="now-chatting-with" >Now Chatting with {displayData ? message_Data.name : selectedData?.receiver_name ? selectedData?.receiver_name : selectedData?.name ? selectedData?.name : selectedData?.sender_name}</h5>}
                    <div className="scrool px-3" id="chatBox">
                      <div className="text-grid">
                        {chatData?.chat?.length ? (
                          <>
                            {chatData?.chat?.map(
                              (data: any, i: number) =>

                                chatList?.current_user !== data?.receiver_id ?
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
                                        {ReactHtmlParser(data.message)}
                                      </h3>
                                      <p>
                                        {moment(data.date_time).format("HH:mm")}
                                      </p>
                                    </div>
                                  )
                                  :
                                  data.sender_id === selectedID && (
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
                                        {ReactHtmlParser(data.message)}
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
                                <img src={gif} className="gifbig img-fluid"></img>

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
                                <img src={URL.createObjectURL(selectedImage)} className="img-fluid" />
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

                    <div className="conversation-started">

                    </div>
                    <div className="d-flex  justify-content-around">
                      <Slider {...settings} > {
                        staticMsg.map((data: any, i: number) => (
                          <span className="staticmsg-span cursor-pointer" onClick={() => sendStaticMsg(data.msg)}>{data.msg}<br /></span>
                        ))
                      } </Slider>
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
                      <div className="community-input-chat w-100">
                        <InpEmoji
                          getMData={getMessageData}
                          onHandaleChangeData={onHandaleChangeData}
                          clearText={clearText}
                          afterClear={setClearText}
                        />
                        <div className="inbox-send-msg-btn position-absolute right-1">
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
        <div className="content-footer-baloon">
             <div className="bottom-baloons"></div>
          </div>
      </div>
    </>
  );
};

export default Inbox;
