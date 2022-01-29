import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ImageSwap from '../../components/imageswap/ImageSwap';
import STORAGEKEY from '../../config/APP/app.config';
import { ApiPost } from '../../helper/API/ApiData';
import AuthStorage from '../../helper/AuthStorage';
import { xwwwFormUrlencoded } from '../../helper/utils';
import { getProfileImage } from '../../redux/actions/getProfileImage';
import { setIsLoading } from '../../redux/actions/loadingAction';
import { messageId } from '../../redux/actions/messageIdAction';
import { Store } from 'react-notifications-component';
import { cssTransition, toast, ToastContainer } from 'react-toastify';
import { messageData } from '../../redux/actions/messageDataAction';
const MatchOrMessage = () => {

    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "450px",
    //     slidesToShow: 1,
    //     slidesToScroll: 2,
    //     speed: 500,
    //     responsive: [

    //         {
    //             breakpoint: 1300,
    //             settings: {
    //                 className: "center",
    //                 centerMode: true,
    //                 infinite: true,
    //                 centerPadding: "390px",
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 1100,
    //             settings: {
    //                 className: "center",
    //                 centerMode: true,
    //                 infinite: true,
    //                 centerPadding: "320px",
    //                 slidesToShow: 1,
    //                 slidesToScroll: 3
    //             }
    //         },
    //         {
    //             breakpoint: 870,
    //             settings: {
    //                 className: "center",
    //                 centerMode: true,
    //                 infinite: true,
    //                 centerPadding: "200px",
    //                 slidesToShow: 1,
    //                 slidesToScroll: 3
    //             }
    //         },
    //         {
    //             breakpoint: 769,
    //             settings: {
    //                 className: "center",
    //                 centerMode: true,
    //                 infinite: true,
    //                 centerPadding: "160px",
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 550,
    //             settings: {
    //                 className: "center",
    //                 centerMode: true,
    //                 infinite: true,
    //                 centerPadding: "80px",
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 380,
    //             settings: {
    //                 className: "center",
    //                 centerMode: true,
    //                 infinite: true,
    //                 centerPadding: "30px",
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };

    // const slider = [
    //     {
    //         img: "./assets/img/valerie-elash-RfoISVdKM4U-unsplash.png",
    //         verifiedpic: "./assets/img/poltgon-group.png",
    //         verifiedtext: "Verified picture",
    //         address: "USA, San Francisco Bay Area | Religion: ",
    //         addressspan:"Catholic",
    //         name: "John doe, 36",
    //         genderimg: "./assets/img/male.png",
    //     },
    //     {
    //         img: "./assets/img/valerie-elash-RfoISVdKM4U-unsplash.png",
    //         verifiedpic: "./assets/img/poltgon-group.png",
    //         verifiedtext: "Verified picture",
    //         address: "USA, San Francisco Bay Area | Religion: ",
    //         addressspan:"Catholic",
    //         name: "John doe, 36",
    //         genderimg: "./assets/img/male.png",
    //     },
    //     {
    //         img: "./assets/img/valerie-elash-RfoISVdKM4U-unsplash.png",
    //         verifiedpic: "./assets/img/poltgon-group.png",
    //         verifiedtext: "Verified picture",
    //         address: "USA, San Francisco Bay Area | Religion: ",
    //         addressspan:"Catholic",
    //         name: "John doe, 36",
    //         genderimg: "./assets/img/male.png",
    //     },
    //     {
    //         img: "./assets/img/valerie-elash-RfoISVdKM4U-unsplash.png",
    //         verifiedpic: "./assets/img/poltgon-group.png",
    //         verifiedtext: "Verified picture",
    //         address: "USA, San Francisco Bay Area | Religion: ",
    //         addressspan:"Catholic",
    //         name: "John doe, 36",
    //         genderimg: "./assets/img/male.png",
    //     },
    //     {
    //         img: "./assets/img/valerie-elash-RfoISVdKM4U-unsplash.png",
    //         verifiedpic: "./assets/img/poltgon-group.png",
    //         verifiedtext: "Verified picture",
    //         address: "USA, San Francisco Bay Area | Religion: ",
    //         addressspan:"Catholic",
    //         name: "John doe, 36",
    //         genderimg: "./assets/img/male.png",
    //     },
    // ]

    const [like, setLike] = useState(false);
    const [id, setId] = useState("");
    const [isRewind, setIsRewind] = useState(false);
    const [isSkip, setIsSkip] = useState(false);

    const dispatch = useDispatch()

    const likehandleChange = (rate: boolean) => {
        let data = {
            id: AuthStorage.getStorageJsonData(STORAGEKEY.userData).user_id,
            rate: rate ? "Like" : "dislike",
            token: AuthStorage.getToken()
        }
        const body = xwwwFormUrlencoded(data)
        ApiPost("rateprofile", body)
            .then((res) => {
                console.log("res", res);
                showAlert("like")
            })
            .catch((err) => {
                console.log("err", err);
            })
        setLike(!like)
    }

    const msgChange = () => {        
        dispatch(messageId(id))
    }

    const inboxData = (msgData:any) => {
        console.log('msgData', msgData);
        dispatch(messageData(msgData))
    }

    const rewind = () => {
        setIsRewind(true)
        showAlert("rewind")
    }

    const skip = () => {
        setIsSkip(true)
        showAlert("skip")
    }

    const showAlert = (value:any) => {
        toast.success(value, {
            transition:cssTransition({
                enter: "animate__animated animate__bounceIn",
                exit: "animate__animated animate__bounceOut"
              })
          });
    }

    return (
        <>

            <Container>
                <div className='match-or-message mt-5'>
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
            <ImageSwap Id={setId} Data={inboxData} isSkip={isSkip} isRewind={isRewind} changeRewind={() => setIsRewind(false)} changeSkip={() => setIsSkip(false)} />
            <Container>
                <div className='activity-main'>
                    <div className='' onClick={rewind}>
                        <div className='rewind'>
                            {/* <Link to="/community"> */}
                            <img src='./assets/img/Group 17.png' />
                            {/* </Link> */}
                        </div>
                        <p className='text'>rewind</p>
                    </div>
                    <div onClick={skip}>
                        <div className='skip-content'>
                            {/* <Link to="/success_stories"> */}
                            <img src='./assets/img/Group 18.png' />
                            {/* </Link> */}
                        </div>
                        <p className='text'>skip</p>
                    </div>
                    <div>
                        <div className='like-content'>
                            <img src='./assets/img/Group 19.png' onClick={() => likehandleChange(!like)} />
                        </div>
                        <p className='text'>like</p>
                    </div>
                    <div>
                        <div className='message-content'>
                            <Link to="/inbox">
                                <img src='./assets/img/Group 20.png' onClick={() => msgChange()} />
                            </Link>
                        </div>
                        <p className='text'>message</p>
                    </div>
                </div>
                <div className='message-bottom-popup mb-5'>
                    <div className='message-bottom-popup-header'>
                        <img src="./assets/img/notification-ball.png" alt="" />
                        <img src="./assets/img/wrong.png" alt="" />
                    </div>
                    <div className='message-bottom-popup-body'>
                        <p className='message-bottom-popup-body-text'>Could she be the one? you both have a match rating of <span> 89%</span>! Try sending her a message to make the first step.</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default MatchOrMessage
