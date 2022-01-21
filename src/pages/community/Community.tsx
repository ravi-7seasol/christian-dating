import { faPaperPlane, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import InpEmoji from '../../components/InputEmoji'
import InputField from '../../components/Inputfield'
import ReactSelect from '../../components/ReactSelect'
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


    const [getTopicList, setGetTopicList] = useState([]);
    const [topic, setTopic] = useState<any>();
    const [selectedId, setSelectedId] = useState<any>();
    const [setMsgToCommunity, setSendMsgToCommunity] = useState('');
    const [clearText, setClearText] = useState<any>(false);
    const [openGift, setOpenGift] = useState(false);
    const [gif, setGif] = useState<any>();
    const [gifTog, setGifTog] = useState(false);


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setIsLoading(true))
        let data = {
            sort: "asc"
        }
        const body = xwwwFormUrlencoded(data);
        ApiPost('gettopicslist', body)
            .then((res: any) => {

                const topicslist = res.topics?.map((item: any) => {
                    return {
                        // ...item,
                        value: item.t_id,
                        label: item.topic
                    }
                })
                console.log("topicslist", topicslist)
                setTopic(topicslist)
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

        if (message !== "" && selectedId) {
            dispatch(setIsLoading(true))
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



        if (setMsgToCommunity !== "" && selectedId) {
            dispatch(setIsLoading(true))
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
            topic_id: e.value,
        }
        setSelectedId(e.value);
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

    const openGif = (item: any) => {
        setGif(item);
        setOpenGift(false);
        setGifTog(true);
    }
    const closeGif = () => {
        setGifTog(false);
    }

    return (


        <Container>
            <div className='community-popup'>
                <p>“So now the case is closed. There remains no accusing voice of condemnation against those who are joined in life-union with Jesus, the Anointed One.” <span> Romans‬ ‭8:1‬ ‭TPT‬‬</span></p>
            </div>
            <div className="select">
                <ReactSelect placeholder="Select Category" options={topic} onChange={(e: any) => getTopicData(e)} value={topic?.value} />
            </div>
            {/* <select onChange={(e) => getTopicData(e)} style={{ float: "right" }}>
                <option value="select">Select Category</option>
                {
                    topic?.map((data: any, i: number) => (

                        <option key={i} value={data.t_id}>{data.topic}</option>

                    ))
                }
            </select> */}


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
            {
                gifTog && <div className="gif-container">
                    <div className="icon">
                        <FontAwesomeIcon icon={faTimesCircle} onClick={() => closeGif()} />
                    </div>
                    <img src={gif} className="gifbig" ></img>

                    <button className="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>

                </div>
            }
            <div className="Remember">
                <p>Remember, public chat is only meant for encouragement.</p>
            </div>
            {/* <Container> */}

            <div className="fotterinput d-flex align-items-center">

                <div className="d-flex">
                    <div className="choose-picture">
                        <img src="./assets/img/picture-one (1).png" />
                    </div>
                    <div className="send-gift position-relative">
                        <img src="./assets/img/gift (1).png" onClick={() => setOpenGift(!openGift)} />
                        {openGift && <div className="gifts">
                            {gifList.gif.map((data: any, i: number) => (
                                <img src={data.src} key={i} onClick={() => { openGif(data.src) }} />
                            ))}

                        </div>}
                    </div>
                </div>

                <div className="community-input-chat w-100">
                    <InpEmoji getMData={sendCommunityData} onHandaleChangeData={onHandaleChangeData} clearText={clearText} afterClear={setClearText} />
                    <div className="inbox-send-msg-btn  position-absolute right-1">
                        <img src="./assets/img/right-arrow (2).png" style={{ zIndex: '999', width: "15px", height: "15px" }} onClick={() => sendCommunityDataByClick()} />
                    </div>
                </div>


            </div>
        </Container>

    )
}

export default Community
