import React from "react";
import InputField from "../../components/Inputfield";
import "./inbox.css";

const Inbox = () => {
  return (
    <>
      <div className="inbox-main">
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
        <div>
          <div className="messages">
            <div className="messages-content">
              <img src="./assets/img/messenger.png" />
              <div className="messages-notification">2</div>
            </div>
            <div>
              <h3 className="Messages-text">Messages</h3>
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
              <h4>Valerie</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
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
              <h4>Shirly</h4>
              <p>Start a conversation with Shirly…</p>
            </div>
            <h5 className="messages-time-on-off">MATCH</h5>
          </div>
        </div>
        <div className="Conversation-starters">
          <div>
            <h2>Conversation starters</h2>
          </div>
          <div>
            <h3 className="first-text">
              Hey! I really like your profile and I think we could match really
              well.
            </h3>
            <h2 className="first-text-replay">
              I see we have very matching interests, would you like to get to
              know each other?
            </h2>
          </div>
          <div>
            <h3 className="first-text">
              Hey! I really like your profile and I think we could match really
              well.
            </h3>
            <h2 className="first-text-replay">
              I see we have very matching interests, would you like to get to
              know each other?
            </h2>
          </div>
          <div>
            <h3 className="first-text">
              Hey! I really like your profile and I think we could match really
              well.
            </h3>
            <h2 className="first-text-replay">
              I see we have very matching interests, would you like to get to
              know each other?
            </h2>
          </div>
          <div>
            <h3 className="first-text">
              Hey! I really like your profile and I think we could match really
              well.
            </h3>
            <h2 className="first-text-replay">
              I see we have very matching interests, would you like to get to
              know each other?
            </h2>
          </div>
          <div>
            <h3 className="first-text">
              Hey! I really like your profile and I think we could match really
              well.
            </h3>
            <h2 className="first-text-replay">
              I see we have very matching interests, would you like to get to
              know each other?
            </h2>
          </div>
        </div>
        <div className="input-area">
          <div>
            <div className="choose-picture">
              <img src="./assets/img/picture-one (1).png" />
            </div>
          </div>
          <div>
            <div className="send-gift">
              <img src="./assets/img/gift (1).png" />
            </div>
          </div>
          <div className="input-chat">
            <InputField
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
            />
            <div className="emoji-img">
              <img src="./assets/img/grinning-face (1).png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
