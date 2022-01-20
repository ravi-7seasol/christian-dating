import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import InpEmoji from '../../components/InputEmoji'
import InputField from '../../components/Inputfield'
import STORAGEKEY from '../../config/APP/app.config'
import { ApiPost } from '../../helper/API/ApiData'
import AuthStorage from '../../helper/AuthStorage'
import { xwwwFormUrlencoded } from '../../helper/utils'
import { setIsLoading } from '../../redux/actions/loadingAction'
import '../messageInbox/inbox.css'

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

    const [getTopicList, setGetTopicList] = useState([]);
    const [topic, setTopic] = useState<any>();
    const [selectedId, setSelectedId] = useState<any>();
    const [setMsgToCommunity, setSendMsgToCommunity] = useState('');
    const [clearText, setClearText] = useState<any>(false)


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setIsLoading(true))
        let data = {
            sort: "asc"
        }
        const body = xwwwFormUrlencoded(data);
        ApiPost('gettopicslist', body)
            .then((res: any) => {

                setTopic(res.topics)
                dispatch(setIsLoading(false))
            }).catch((error: any) => {
                console.log(error);
                dispatch(setIsLoading(false))
            })
    }, [])

    const getCommunityData = () => {
        const data = {
            topic_id: selectedId,
        }
        const body = xwwwFormUrlencoded(data);
        ApiPost('gettopic', body)
            .then((res: any) => {

                setGetTopicList(res.topic_comment)
                dispatch(setIsLoading(false))
            }).catch((error: any) => {
                console.log(error);
                dispatch(setIsLoading(false))
            })
    }

    const sendCommunityData = (message: string) => {
        dispatch(setIsLoading(true))
        if (message !== "") {
            const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);
            const sendMessageToCommunity = {
                token: tokenID,
                topic_id: selectedId,
                message: message
            }
            const body = xwwwFormUrlencoded(sendMessageToCommunity);
            ApiPost('sendcommunitymessage', body)
                .then((res: any) => {

                    getCommunityData();
                    dispatch(setIsLoading(false))
                }).catch((error) => {
                    console.log(error);
                    dispatch(setIsLoading(false))
                })
        }
    }



    const onHandaleChangeData = (message: string) => {
        setSendMsgToCommunity(message)
    }
    const sendCommunityDataByClick = () => {


        dispatch(setIsLoading(true))
        if (setMsgToCommunity !== "") {
            const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);
            const sendMessageToCommunity = {
                token: tokenID,
                topic_id: selectedId,
                message: setMsgToCommunity
            }
            const body = xwwwFormUrlencoded(sendMessageToCommunity);
            ApiPost('sendcommunitymessage', body)
                .then((res: any) => {
                    getCommunityData();
                    setClearText(true)
                    dispatch(setIsLoading(false))
                }).catch((error) => {
                    console.log(error);
                    dispatch(setIsLoading(false))
                })
        }
    }
    const getTopicData = (e: any) => {

        const data = {
            topic_id: e.target.value,
        }
        setSelectedId(e.target.value);
        if (e.target.value !== "select") {
            const body = xwwwFormUrlencoded(data);
            ApiPost('gettopic', body)
                .then((res: any) => {

                    setGetTopicList(res.topic_comment)
                    dispatch(setIsLoading(false))
                }).catch((error: any) => {
                    console.log(error);
                    dispatch(setIsLoading(false))
                })
        }


    }

    return (
        <>
            <Container>
                <div className='community-popup'>
                    <p>“So now the case is closed. There remains no accusing voice of condemnation against those who are joined in life-union with Jesus, the Anointed One.” <span> Romans‬ ‭8:1‬ ‭TPT‬‬</span></p>
                </div>
                <select onChange={(e) => getTopicData(e)}>
                    <option value="select">Select Category</option>
                    {
                        topic?.map((data: any, i: number) => (

                            <option key={i} value={data.t_id}>{data.topic}</option>

                        ))
                    }
                </select>


                <div className="community" style={{ position: "relative" }}>
                    <div className="">
                        {getTopicList?.map((item: any, i: number) => (
                            <div className='d-flex pt-4 align-items-center' key={i}>
                                <div className='set-img-position'>
                                    <img src={item.sender_image} />
                                    <div className='active'></div>
                                </div>
                                <div>
                                    <h6 className='Name ml-3' style={{ color: item.namecolor }} >{item.sender_name}</h6>
                                    <p className='last-sms ml-3'>{item.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* </Container> */}
                <div className="Remember">
                    <p>Remember, public chat is only meant for encouragement.</p>
                </div>
                {/* <Container> */}
                <div className="fotterinput">
                    <Row>
                        <Col xs={4} sm={2}>
                            <div className="d-flex">
                                <div className="choose-picture">
                                    <img src="./assets/img/picture-one (1).png" />
                                </div>
                                <div className="send-gift">
                                    <img src="./assets/img/gift (1).png" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={8} sm={10}>
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
                                <InpEmoji getMData={sendCommunityData} onHandaleChangeData={onHandaleChangeData} clearText={clearText} afterClear={setClearText} />
                                <img src="./assets/img/right-arrow (2).png" onClick={() => sendCommunityDataByClick()} style={{ zIndex: '999' }} width="15px" height="15px" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Community
