import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import InputField from "../../components/Inputfield";
import InpEmoji from "../../components/InputEmoji";
import "./inbox.css";
import STORAGEKEY from "../../config/APP/app.config";
import AuthStorage from "../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../helper/utils";
import { ApiPost } from "../../helper/API/ApiData";

const Inbox = () => {
  const { innerWidth: width, innerHeight: height } = window;
  console.log("width", width);
  const [openGift, setOpenGift] = useState(false);
  const [selectedID, setSelectedID] = useState("");
  const [tog, setTog] = useState(false);
  const [selectedData, setSelectedData] = useState<any>();
  const [messageData, setMessageData] = useState("");


  useEffect(() => {
    const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);

    const token = {
      token: tokenID
    }

    const body = xwwwFormUrlencoded(token);

    ApiPost('getchatlist', body)
      .then((res: any) => {
        console.log(res)
      }).catch((error) => {
        console.log(error);

      })
  }, [])
  const chatList = {
    total_unread_message: "5",
    chats: [{
      participant_id: 1,
      participant_name: "raju",
      participant_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mirchiplay.com%2Fhumour%2F9-phir-hera-pheri-memes-more-deadly-than-covid-19%2F&psig=AOvVaw3c40q94Z2AWvG1phiKK0Dw&ust=1642150616744000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKCP3_KtrvUCFQAAAAAdAAAAABAD"
    },
    {
      participant_id: 2,
      participant_name: "kaju",
      participant_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fallmemetemplates.wordpress.com%2F2020%2F07%2F20%2Fdeewane-huye-paagal-meme-templates%2F&psig=AOvVaw3DtSLjK-fEVY6GQYBWpZFs&ust=1642150720456000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCMCn9aOurvUCFQAAAAAdAAAAABAM"
    }, {
      participant_id: 3,
      participant_name: "baju",
      participant_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fallmemetemplates.wordpress.com%2F2020%2F07%2F20%2Fdeewane-huye-paagal-meme-templates%2F&psig=AOvVaw3DtSLjK-fEVY6GQYBWpZFs&ust=1642150720456000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCMCn9aOurvUCFQAAAAAdAAAAABAR"
    }]

  }
  const chat = {
    chats: [
      {
        participant_id: 1,
        participant_name: "raju",
        participant_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mirchiplay.com%2Fhumour%2F9-phir-hera-pheri-memes-more-deadly-than-covid-19%2F&psig=AOvVaw3c40q94Z2AWvG1phiKK0Dw&ust=1642150616744000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKCP3_KtrvUCFQAAAAAdAAAAABAD",
        message: "Hello From the raju",
        send_or_receive: "send"
      },
      {
        participant_id: 1,
        participant_name: "raju",
        participant_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mirchiplay.com%2Fhumour%2F9-phir-hera-pheri-memes-more-deadly-than-covid-19%2F&psig=AOvVaw3c40q94Z2AWvG1phiKK0Dw&ust=1642150616744000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKCP3_KtrvUCFQAAAAAdAAAAABAD",
        message: "Hello From the raju Hello From the raju Hello From the raju Hello From the raju Hello From the raju",
        send_or_receive: "receive"
      },
      {
        participant_id: 1,
        participant_name: "raju",
        participant_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mirchiplay.com%2Fhumour%2F9-phir-hera-pheri-memes-more-deadly-than-covid-19%2F&psig=AOvVaw3c40q94Z2AWvG1phiKK0Dw&ust=1642150616744000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKCP3_KtrvUCFQAAAAAdAAAAABAD",
        message: "Hello From the raju",
        send_or_receive: "receive"
      },
      {
        participant_id: 1,
        participant_name: "raju",
        participant_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mirchiplay.com%2Fhumour%2F9-phir-hera-pheri-memes-more-deadly-than-covid-19%2F&psig=AOvVaw3c40q94Z2AWvG1phiKK0Dw&ust=1642150616744000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKCP3_KtrvUCFQAAAAAdAAAAABAD",
        message: "Hello From the raju",
        send_or_receive: "send"
      },
      {
        participant_id: 2,
        participant_name: "kaju",
        participant_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fallmemetemplates.wordpress.com%2F2020%2F07%2F20%2Fdeewane-huye-paagal-meme-templates%2F&psig=AOvVaw3DtSLjK-fEVY6GQYBWpZFs&ust=1642150720456000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCMCn9aOurvUCFQAAAAAdAAAAABAM",
        message: "Hello From the kaju",
        send_or_receive: "receive"
      }, {
        participant_id: 3,
        participant_name: "baju",
        participant_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fallmemetemplates.wordpress.com%2F2020%2F07%2F20%2Fdeewane-huye-paagal-meme-templates%2F&psig=AOvVaw3DtSLjK-fEVY6GQYBWpZFs&ust=1642150720456000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCMCn9aOurvUCFQAAAAAdAAAAABAR",
        message: "Hello from the baju ",
        send_or_receive: "receive"
      }
    ]
  }
  const messageOpen = (item: any) => {

    setSelectedID(item.participant_id);
    setTog(true);
    setSelectedData(item);
    const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);

    const getChatData = {
      token: tokenID,
      participant_id: item.participant_id,
    }

    const body = xwwwFormUrlencoded(getChatData);

    ApiPost('getchat', body)
      .then((res: any) => {
        console.log(res)
      }).catch((error) => {
        console.log(error);

      })

  }
  const getMessageData = (message: string) => {
    setMessageData(message);
  }

  useEffect(() => {
    console.log("messageData", messageData);
  }, [messageData])

  return (
    <>
      <div className="inbox-main px-3">
        {/* <div style={{ height:"100vh", overflow:"hidden"}}> */}
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
                  <div className="messages-notification">{chatList.total_unread_message}</div>
                </div>
                <div>
                  <h3 className="Messages-text">Messages</h3>
                </div>
              </div>
              {
                chatList.chats.map((data: any, i: number) => (
                  <div className="messages" key={i} onClick={() => { messageOpen(data) }}>
                    <div className="chat-profile-img-main">
                      <img
                        src="./assets/img/profile-picture.png"
                        className="chat-profile"
                      />
                      <div className="online"></div>
                    </div>
                    <div className="chat-messages">
                      <h4>{data.participant_name}</h4>
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
            tog ? <div>

              <Col md={8} className="ps-0 Conversation-starters-scroll">
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
                          <h4>{selectedData?.participant_name}</h4>
                          {/* <h4>Test</h4> */}
                          <h6 className="messages-time">12:15</h6>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-grid px-3">
                    <div style={{ display: "grid", gridTemplateRows: "repeat(auto, 100px)" }}>
                      {
                        chat.chats.map((data: any, i: number) => (data.participant_id === selectedID &&

                          <div key={i}>
                            {data.send_or_receive === "send" &&
                              <h3 className="first-text">
                                {data.message}
                              </h3>
                            }
                            {data.send_or_receive === "receive" &&
                              <h2 className="first-text-replay">
                                {data.message}
                              </h2>
                            }
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
                          <img src="https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif" />
                          <img src="https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif" />
                          <img src="https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif" />
                          <img src="https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif" />
                          <img src="https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif" />
                          <img src="https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif" />
                        </div>}
                      </div>
                    </div>
                    <div className="input-chat">
                      {/* <InputField
                    name=""
                    maxLength={undefined}
                    value={""}
                    lablestyleClass=""
                    InputstyleClass="text-input"
                    onChange={() => {
                      ("");
                    }}
                    disabled={false}
                    label=""
                    placeholder="Enter your message here"
                    type="text"
                    fromrowStyleclass=""
                  /> */}
                      <InpEmoji getMData={getMessageData} />

                      {/* <div className="emoji-img">
                    <img src="./assets/img/grinning-face (1).png" />
                  </div> */}
                    </div>
                  </div>
                </div>
              </Col>
              ))
            </div>
              : <></>
          }

        </Row>
        {/* </div> */}
      </div>
    </>
  );
};

export default Inbox;
