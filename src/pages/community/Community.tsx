import { faPaperPlane, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import InpEmoji from "../../components/InputEmoji";
import InputField from "../../components/Inputfield";
import ReactSelect from "../../components/ReactSelect";
import STORAGEKEY from "../../config/APP/app.config";
import { ApiPost } from "../../helper/API/ApiData";
import AuthStorage from "../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../helper/utils";
import { setIsLoading } from "../../redux/actions/loadingAction";
import ReactHtmlParser from "react-html-parser";
import "../messageInbox/inbox.css";

const Community = () => {
  // const fakedata = [
  //     {
  //         Profilepic: "./assets/img/Ellipse 31.png",
  //         Name: "Lisa",
  //         namecolor: "#E69702",
  //         Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  //     },
  //     {
  //         Profilepic: "./assets/img/Ellipse 31.png",
  //         Name: "Carl",
  //         namecolor: "#D10000",
  //         Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  //     },
  //     {
  //         Profilepic: "./assets/img/Ellipse 31.png",
  //         Name: "Jeremy",
  //         namecolor: "#25A706",
  //         Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  //     },
  //     {
  //         Profilepic: "./assets/img/Ellipse 31.png",
  //         Name: "Judith",
  //         namecolor: "#25A706",
  //         Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  //     },
  //     {
  //         Profilepic: "./assets/img/Ellipse 31.png",
  //         Name: "Natascha",
  //         namecolor: "#25A706",
  //         Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  //     },
  //     {
  //         Profilepic: "./assets/img/Ellipse 31.png",
  //         Name: "Henry",
  //         namecolor: "#25A706",
  //         Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  //     },
  //     {
  //         Profilepic: "./assets/img/Ellipse 31.png",
  //         Name: "jon",
  //         namecolor: "#25A706",
  //         Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  //     },
  //     {
  //         Profilepic: "./assets/img/Ellipse 31.png",
  //         Name: "jony",
  //         namecolor: "#25A706",
  //         Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  //     },
  //     {
  //         Profilepic: "./assets/img/Ellipse 31.png",
  //         Name: "jony",
  //         namecolor: "#25A706",
  //         Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  //     }
  // ]
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

  const [getTopicList, setGetTopicList] = useState([]);
  const [topic, setTopic] = useState<any>();
  const [selectedId, setSelectedId] = useState<any>();
  const [setMsgToCommunity, setSendMsgToCommunity] = useState("");
  const [clearText, setClearText] = useState<any>(false);
  const [openGift, setOpenGift] = useState(false);
  const [gif, setGif] = useState<any>();
  const [gifTog, setGifTog] = useState(false);
  const [imgTog, setImgTog] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    let data = {
      sort: "asc",
    };
    const body = xwwwFormUrlencoded(data);
    ApiPost("gettopicslist", body)
      .then((res: any) => {
        const topicslist = res.topics?.map((item: any) => {
          return {
            // ...item,
            value: item.t_id.toString(),
            label: item.topic,
          };
        });

        setTopic(topicslist);
        if (topicslist.length) {
          getTopicData(topicslist[0].value);
          setSelectedId(topicslist[0].value);
        }
        dispatch(setIsLoading(false));
      })
      .catch((error: any) => {
        console.log(error);
        dispatch(setIsLoading(false));
      });
  }, []);

  useEffect(() => {
    console.log("topic", topic && topic);
    console.log("topic[0].value", topic && topic[0].value);

    // const data = {
    //     topic_id: e.value,
    // }
    // setSelectedId(e.value);
    // const body = xwwwFormUrlencoded(data);
    // ApiPost('gettopic', body)
    //     .then((res: any) => {
    //         setGetTopicList(res.topic_comment)
    //         dispatch(setIsLoading(false))
    //     }).catch((error: any) => {
    //         console.log(error);
    //         dispatch(setIsLoading(false))
    //     })
  }, [topic]);

  const MINUTE_MS = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedId) {
        getCommunityData();
      }
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  });

  const getCommunityData = () => {
    const data = {
      topic_id: selectedId,
    };
    const body = xwwwFormUrlencoded(data);
    ApiPost("gettopic", body)
      .then((res: any) => {
        setGetTopicList(res.topic_comment);
        dispatch(setIsLoading(false));
      })
      .catch((error: any) => {
        console.log(error);
        dispatch(setIsLoading(false));
      });
  };

  const sendCommunityData = (message: string) => {
    if (message !== "" && selectedId) {
      dispatch(setIsLoading(true));
      const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);
      const sendMessageToCommunity = {
        token: tokenID,
        topic_id: selectedId,
        message: message.replace(
          /\p{Emoji}/gu,
          (m: any, idx) => `&#${m.codePointAt().toString()};`
        ),
      };
      const body = xwwwFormUrlencoded(sendMessageToCommunity);
      ApiPost("sendcommunitymessage", body)
        .then((res: any) => {
          getCommunityData();
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          console.log(error);
          dispatch(setIsLoading(false));
        });
    }
  };

  const onHandaleChangeData = (message: string) => {
    setSendMsgToCommunity(message);
  };
  const sendCommunityDataByClick = () => {
    sendCommunityData(setMsgToCommunity);

    // if (setMsgToCommunity !== "" && selectedId) {
    //     dispatch(setIsLoading(true))
    //     const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);
    //     const sendMessageToCommunity = {
    //         token: tokenID,
    //         topic_id: selectedId,
    //         message: setMsgToCommunity
    //     }
    //     const body = xwwwFormUrlencoded(sendMessageToCommunity);
    //     ApiPost('sendcommunitymessage', body)
    //         .then((res: any) => {
    //             getCommunityData();
    //             setClearText(true)
    //             dispatch(setIsLoading(false))
    //         }).catch((error) => {
    //             console.log(error);
    //             dispatch(setIsLoading(false))
    //         })
    // }
  };
  const getTopicData = (e: any) => {
    const data = {
      topic_id: e,
    };
    setSelectedId(e);
    const body = xwwwFormUrlencoded(data);
    ApiPost("gettopic", body)
      .then((res: any) => {
        setGetTopicList(res.topic_comment);
        dispatch(setIsLoading(false));
      })
      .catch((error: any) => {
        console.log(error);
        dispatch(setIsLoading(false));
      });
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
    console.log("e.target.files[0]", e);
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

  const selectValue = (value: string, type: string) => {
    if (type === "category") {
      return topic && topic.find((data: any) => data.value === value);
    }
  }; 

  return (
    <Container>
      <div className="community-popup">
        <p>
          “So now the case is closed. There remains no accusing voice of
          condemnation against those who are joined in life-union with Jesus,
          the Anointed One.” <span> Romans‬ ‭8:1‬ ‭TPT‬‬</span>
        </p>
      </div>
      <div className="select">
        <ReactSelect
          placeholder="Select Category"
          options={topic}
          onChange={(e: any) => getTopicData(e.value)}
          value={selectValue(selectedId, "category")}
          isMulti={false}
        />
      </div>
      <div className="d-flex">
        <div className="community" style={{ position: "relative",width:"100%",borderRight:"2px solid #E3E3E3" }}>
          <div className="">
            {getTopicList?.map((item: any, i: number) => (
              <div className="d-flex pt-4 align-items-center" key={i}>
                <div className="set-img-position">
                  <img
                    src={
                      item.sender_image
                        ? item.sender_image
                        : "./assets/img/nonprofileImg.png"
                    }
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "100%",
                    }}
                  />
                  {item.if_online === "1" ? <div className="active"></div> : ""}
                </div>
                <div>
                  <h6 className="Name ml-3" style={{ color: item.namecolor }}>
                    {item.sender_name}
                  </h6>
                  <p className="last-sms ml-3">
                    {ReactHtmlParser(item.message)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="online-users community">
          {getTopicList?.map((item: any, i: number) => {
            if (item.if_online === "1") {
                return (
                <>
                <div>

                <img
                    src={
                        item.sender_image
                            ? item.sender_image
                            : "./assets/img/nonprofileImg.png"
                    }
                    style={{ width: "55px", height: "55px", borderRadius: "100%" }}
                />
                </div>
                </>
                )
            }
        })}
        </div>
      </div>
      {/* </Container> */}
      {gifTog && (
        <div className="gif-container">
          <div className="icon">
            <FontAwesomeIcon icon={faTimesCircle} onClick={() => closeGif()} />
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
            <FontAwesomeIcon icon={faTimesCircle} onClick={() => closeImg()} />
          </div>
          <img src={URL.createObjectURL(selectedImage)} className="img-fluid" />
          <button className="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      )}
      <div className="Remember">
        <p>Remember, public chat is only meant for encouragement.</p>
      </div>
      {/* <Container> */}

      <div className="fotterinput d-flex align-items-center">
        <div className="d-flex">
          <label htmlFor="imgSelect" className="choose-picture">
            <img src="./assets/img/picture-one (1).png" />
            <input
              type="file"
              onChange={(e) => {
                selectImg(e);
              }}
              onClick={(e: any) => {
                e.target.value = "";
              }}
              accept="image/*"
              className="d-none"
              id="imgSelect"
            />
          </label>

          <div className="send-gift position-relative">
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
            getMData={sendCommunityData}
            onHandaleChangeData={onHandaleChangeData}
            clearText={clearText}
            afterClear={setClearText}
          />
          <div className="inbox-send-msg-btn  position-absolute right-1">
            <img
              src="./assets/img/right-arrow (2).png"
              style={{ zIndex: 999, width: "15px", height: "15px" }}
              onClick={() => sendCommunityDataByClick()}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Community;
