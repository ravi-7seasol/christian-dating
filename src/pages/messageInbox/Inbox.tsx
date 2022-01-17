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
  const [gifTog, setGifTog] = useState(false)


  useEffect(() => {
    const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);

    const token = {
      token: tokenID
    }

    const body = xwwwFormUrlencoded(token);

    ApiPost('getchatlist', body)
      .then((res: any) => {
        setChatList(res);

      }).catch((error) => {
        console.log(error);

      })
  }, [])

  const gifList = {
    gif: [{
      id: 1,
      src: "https://tenor.com/view/tu-samjha-nhi-tu-nhi-smajha-akshay-kumar-akshay-kumar-in-car-gif-23496568.gif"
    }, {
      id: 2,
      src: "https://tenor.com/view/sunda-ko-aa-mast-naha-dho-ke-aa-paresh-rawal-baburao-hera-pheri-gif-21333158.gif"
    }, {
      id: 3,
      src: "https://tenor.com/view/sabbir31x-khopdi-tod-sale-ka-hera-pheri-khopdi-tod-sale-ka-gif-15736102.gif"
    }, {
      id: 4,
      src: "https://tenor.com/view/akshay-kumar-50rupaya-kat-overacting-hera-pheri-baburao-bollywood-gif-15503267.gif"
    }, {
      id: 5,
      src: "https://tenor.com/view/has-re-halkat-has-hera-pheri-lol-laugh-akshay-kumar-gif-17189201.gif"
    }]
  }

  const getChat = () => {
    const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);

    const getChatData = {
      token: tokenID,
      participant_id: selectedID,
    }

    const body = xwwwFormUrlencoded(getChatData);

    ApiPost('getchat', body)
      .then((res: any) => {
        setChatData(res)
        setCurrentUser(res.current_user);
      }).catch((error) => {
        console.log(error);

      })
  }


  const messageOpen = (item: any) => {

    setSelectedID(item.receiver_id);
    setTog(true);
    setSelectedData(item);
    const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);

    const getChatData = {
      token: tokenID,
      participant_id: item.receiver_id,
    }

    const body = xwwwFormUrlencoded(getChatData);

    ApiPost('getchat', body)
      .then((res: any) => {
        setChatData(res)
        setCurrentUser(res.current_user);
      }).catch((error) => {
        console.log(error);

      })

  }
  const getMessageData = (message: string) => {
    if (message !== "") {
      setMessageData(message);
      const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);
      const sendMessage = {
        token: tokenID,
        participant_id: parseInt(selectedID),
        message: message
      }
      const body = xwwwFormUrlencoded(sendMessage);
      ApiPost('sendmessage', body)
        .then((res: any) => {
          getChat();
        }).catch((error) => {
          console.log(error);

        })
    }

  }
  const openGif = (item: any) => {
    setGif(item);
    setOpenGift(false);
    setGifTog(true);
  }
  const closeGif = () => {
    setGifTog(false);
  }



  return (
    <>
      <div className="inbox-main px-3">
        {/* <div style={{ height:"100vh", overflow:"hidden"}}> */}
        <Container>
        <Row>
          <Col md={4}>
            <div className="inbox-profile-img">
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
            </div>
            <div className="border-content"></div>
            <div className="handle-chat-scroll">
              <div className="messages">
                <div className="messages-content">
                  <img src="./assets/img/messenger.png" />
                  <div className="messages-notification">{chatList?.total_unread_message}</div>
                </div>
                <div>
                  <h3 className="Messages-text">Messages</h3>
                </div>
              </div>
              {
                chatList?.chat.map((data: any, i: number) => (
                  <div className="messages" key={i} onClick={() => { messageOpen(data) }}>
                    <div className="chat-profile-img-main">
                      <img
                        src="./assets/img/profile-picture.png"
                        className="chat-profile"
                      />
                      <div className="online"></div>
                    </div>
                    <div className="chat-messages">
                      <h4>{data.receiver_name}</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      </p>
                    </div>
                    <div className="messages-time">
                      <h6>12:15</h6>
                      <div className="messages-counts">2</div>
                    </div>
                  </div>
                ))
              }

              {/* <div className="messages">
                <div className="chat-profile-img-main">
                  <img
                    src="./assets/img/profile-picture.png"
                    className="chat-profile"
                  />
                  <div className="online"></div>
                </div>
                <div className="chat-messages">
                  <h4>Valerie</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
                <div className="messages-time">
                  <h6>12:15</h6>
                  <div className="messages-counts">2</div>
                </div>
              </div>
              <div className="messages">
                <div className="chat-profile-img-main">
                  <img
                    src="./assets/img/profile-picture.png"
                    className="chat-profile"
                  />
                  <div className="online"></div>
                </div>
                <div className="chat-messages">
                  <h4>Valerie</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
                <div className="messages-time">
                  <h6>12:15</h6>
                  <div className="messages-counts">2</div>
                </div>
              </div>
              <div className="messages">
                <div className="chat-profile-img-main">
                  <img
                    src="./assets/img/profile-picture.png"
                    className="chat-profile"
                  />
                  <div className="online"></div>
                </div>
                <div className="chat-messages">
                  <h4>Valerie</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
                <div className="messages-time">
                  <h6>12:15</h6>
                  <div className="messages-counts">2</div>
                </div>
              </div>
              <div className="messages">
                <div className="chat-profile-img-main">
                  <img
                    src="./assets/img/profile-picture.png"
                    className="chat-profile"
                  />
                  <div className="online"></div>
                </div>
                <div className="chat-messages">
                  <h4>Valerie</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
                <div className="messages-time">
                  <h6>12:15</h6>
                  <div className="messages-counts">2</div>
                </div>
              </div>
              <div className="messages">
                <div className="chat-profile-img-main">
                  <img
                    src="./assets/img/profile-picture.png"
                    className="chat-profile"
                  />
                  <div className="online"></div>
                </div>
                <div className="chat-messages">
                  <h4>Valerie</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
                <div className="messages-time">
                  <h6>12:15</h6>
                  <div className="messages-counts">2</div>
                </div>
              </div>
              <div className="messages">
                <div className="chat-profile-img-main">
                  <img
                    src="./assets/img/profile-picture.png"
                    className="chat-profile"
                  />
                  <div className="online"></div>
                </div>
                <div className="chat-messages">
                  <h4>Valerie</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
                <div className="messages-time">
                  <h6>12:15</h6>
                  <div className="messages-counts">2</div>
                </div>
              </div>
              <div className="messages">
                <div className="chat-profile-img-main">
                  <img
                    src="./assets/img/profile-picture.png"
                    className="chat-profile"
                  />
                  <div className="offline"></div>
                </div>
                <div className="chat-messages">
                  <h4>Shirly</h4>
                  <p>Start a conversation with Shirly…</p>
                </div>
                <h5 className="messages-time-on-off">MATCH</h5>
              </div>
              <div className="messages">
                <div className="chat-profile-img-main">
                  <img
                    src="./assets/img/profile-picture.png"
                    className="chat-profile"
                  />
                  <div className="offline"></div>
                </div>
                <div className="chat-messages">
                  <h4>Shirly</h4>
                  <p>Start a conversation with Shirly…</p>
                </div>
                <h5 className="messages-time-on-off">MATCH</h5>
              </div>
              <div className="messages">
                <div className="chat-profile-img-main">
                  <img
                    src="./assets/img/profile-picture.png"
                    className="chat-profile"
                  />
                  <div className="offline"></div>
                </div>
                <div className="chat-messages">
                  <h4>Shirly</h4>
                  <p>Start a conversation with Shirly…</p>
                </div>
                <h5 className="messages-time-on-off">MATCH</h5>
              </div>
              <div className="messages">
                <div className="chat-profile-img-main">
                  <img
                    src="./assets/img/profile-picture.png"
                    className="chat-profile"
                  />
                  <div className="offline"></div>
                </div>
                <div className="chat-messages">
                  <h4>Shirly</h4>
                  <p>Start a conversation with Shirly…</p>
                </div>
                <h5 className="messages-time-on-off">MATCH</h5>
              </div> */}
            </div>
          </Col>
          {
            tog ? <Col md={8}>

              <div className="ps-0 Conversation-starters-scroll">
                <div className="Conversation-starters" >
                  <div className="bg-white chat-top-header">
                    {width > 767 && (
                      <div className="messages">
                        <div className="chat-profile-img-main">
                          <img
                            src="./assets/img/profile-picture.png"
                            className="chat-profile"
                          />
                          <div className="online"></div>
                        </div>
                        <div className="chat-messages">
                          <h4>{selectedData.receiver_name}</h4>
                          {/* <h4>Test</h4> */}
                          <h6 className="messages-time">12:15</h6>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-grid px-3">
                    <div style={{ display: "grid", gridTemplateRows: "repeat(auto, 100px)" }}>
                      {
                        chatData?.chat.map((data: any, i: number) => (data.receiver_id === selectedID &&

                          <div key={i}>

                            <h3 className={data.sender_id !== currentUser ? "first-text" : "first-text-replay"} key={i}>
                              {data.message}
                            </h3>
                          </div>

                        ))}

                      {/* <div>
                        <h3 className="first-text">
                          Hey! I really like your profile and I think we could match
                          really well.
                        </h3>
                        <h2 className="first-text-replay">
                          I see we have very matching interests, would you like to
                          get to know each other?
                        </h2>
                      </div>
                      <div>
                        <h3 className="first-text">
                          Hey! I really like your profile and I think we could match
                          really well.
                        </h3>
                        <h2 className="first-text-replay">
                          I see we have very matching interests, would you like to
                          get to know each other?
                        </h2>
                      </div>
                      <div>
                        <h3 className="first-text">
                          Hey! I really like your profile and I think we could match
                          really well.
                        </h3>
                        <h2 className="first-text-replay">
                          I see we have very matching interests, would you like to
                          get to know each other?
                        </h2>
                      </div> */}
                      {
                        gifTog && <div className="gif-container">
                          <div className="icon">
                            <FontAwesomeIcon icon={faTimesCircle} onClick={() => closeGif()} />
                          </div>
                          <img src={gif} className="gifbig" ></img>

                          <button className="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>

                        </div>
                      }

                    </div>
                  </div>
                  <div className="input-area px-3">
                    <div>
                      <div className="choose-picture">
                        <img src="./assets/img/picture-one (1).png" />
                      </div>
                    </div>
                    <div>
                      <div className="send-gift">
                        <img src="./assets/img/gift (1).png" onClick={() => setOpenGift(!openGift)} />
                        {openGift && <div className="gifts">

                          {/* <img src="https://tenor.com/view/tu-samjha-nhi-tu-nhi-smajha-akshay-kumar-akshay-kumar-in-car-gif-23496568.gif" />
                          <img src="https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif" />
                          <img src="https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif" />
                          <img src="https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif" />
                          <img src="https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif" />
                          <img src="https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif" /> */}
                          {gifList.gif.map((data: any, i: number) => (
                            <img src={data.src} key={i} onClick={() => { openGif(data.src) }} />
                          ))}

                        </div>}
                      </div>
                    </div>
                    <div className="input-chat">
                      <InpEmoji getMData={getMessageData} />
                    </div>
                  </div>
                </div>
              </div>
              ))
            </Col>
              : <></>
          }

        </Row>
        {/* </div> */}
        </Container>
      </div>
    </>
  );
};

export default Inbox;
