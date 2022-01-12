import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
const MatchOrMessage = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "450px",
        slidesToShow: 1,
        slidesToScroll: 2,
        speed: 500,
        responsive: [

            {
                breakpoint: 1300,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "390px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "320px",
                    slidesToShow: 1,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 870,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "200px",
                    slidesToShow: 1,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "160px",
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "80px",
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 380,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "30px",
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slider = [
        {
            img: "./assets/img/valerie-elash-RfoISVdKM4U-unsplash.png",
            verifiedpic: "./assets/img/poltgon-group.png",
            verifiedtext: "Verified picture",
            address: "USA, San Francisco Bay Area | Religion: ",
            addressspan:"Catholic",
            name: "John doe, 36",
            genderimg: "./assets/img/male.png",
        },
        {
            img: "./assets/img/valerie-elash-RfoISVdKM4U-unsplash.png",
            verifiedpic: "./assets/img/poltgon-group.png",
            verifiedtext: "Verified picture",
            address: "USA, San Francisco Bay Area | Religion: ",
            addressspan:"Catholic",
            name: "John doe, 36",
            genderimg: "./assets/img/male.png",
        },
        {
            img: "./assets/img/valerie-elash-RfoISVdKM4U-unsplash.png",
            verifiedpic: "./assets/img/poltgon-group.png",
            verifiedtext: "Verified picture",
            address: "USA, San Francisco Bay Area | Religion: ",
            addressspan:"Catholic",
            name: "John doe, 36",
            genderimg: "./assets/img/male.png",
        },
        {
            img: "./assets/img/valerie-elash-RfoISVdKM4U-unsplash.png",
            verifiedpic: "./assets/img/poltgon-group.png",
            verifiedtext: "Verified picture",
            address: "USA, San Francisco Bay Area | Religion: ",
            addressspan:"Catholic",
            name: "John doe, 36",
            genderimg: "./assets/img/male.png",
        },
        {
            img: "./assets/img/valerie-elash-RfoISVdKM4U-unsplash.png",
            verifiedpic: "./assets/img/poltgon-group.png",
            verifiedtext: "Verified picture",
            address: "USA, San Francisco Bay Area | Religion: ",
            addressspan:"Catholic",
            name: "John doe, 36",
            genderimg: "./assets/img/male.png",
        },
    ]

    return (
        <>
            <Container>
                <div className='match-or-message mt-3'>
                    <Link to="/show-profile">
                        <img src="./assets/img/left-arrow.png" alt="" width="25px" height="25px" className='ml-3' />
                    </Link>
                    <p>Profiles based on preference settings</p>
                </div>
            </Container>
            <div className="slider pt-5">
                <Slider {...settings}>
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
                </Slider>
            </div>
            <Container>
                <div className='activity-main'>
                    <div className=''>
                        <div className='rewind'>
                            <Link to="/community">
                                <img src='./assets/img/Group 17.png' />
                            </Link>
                        </div>
                        <p className='text'>rewind</p>
                    </div>
                    <div>
                        <div className='skip-content'>
                            <Link to="/success_stories">
                                <img src='./assets/img/Group 18.png' />
                            </Link>
                        </div>
                        <p className='text'>skip</p>
                    </div>
                    <div>
                        <div className='like-content'>
                            <img src='./assets/img/Group 19.png' />
                        </div>
                        <p className='text'>like</p>
                    </div>
                    <div>
                        <div className='message-content'>
                            <Link to="/inbox">
                                <img src='./assets/img/Group 20.png' />
                            </Link>
                        </div>
                        <p className='text'>message</p>
                    </div>
                </div>
                <div className='message-bottom-popup'>
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
