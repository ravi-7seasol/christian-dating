import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowLeft, faArrowsAlt, faCompressArrowsAlt, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import Buttons from '../../../components/Buttons';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const ShowProfile = () => {
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate("/match_or_message")
    }

    const accordion = [
        {
            Header: "My story (How you came to Christ)",
            Body: "“I own my own Software Development company. I love jazz and go watch my favorite bands as often as possible. To get out of my head, I go rock climbing. I grew up in a very political family and I carry on that tradition by being active in the local campaigns. I find a lot of peace by attending church on Sunday mornings and by being a part of that community."
        },
        {
            Header: "About me",
            Body: "“I own my own Software Development company. I love jazz and go watch my favorite bands as often as possible. To get out of my head, I go rock climbing. I grew up in a very political family and I carry on that tradition by being active in the local campaigns. I find a lot of peace by attending church on Sunday mornings and by being a part of that community."
        },
        {
            Header: "Lifestyle",
            Body: "“I own my own Software Development company. I love jazz and go watch my favorite bands as often as possible. To get out of my head, I go rock climbing. I grew up in a very political family and I carry on that tradition by being active in the local campaigns. I find a lot of peace by attending church on Sunday mornings and by being a part of that community."
        },
        {
            Header: "Personality",
            Body: "“I own my own Software Development company. I love jazz and go watch my favorite bands as often as possible. To get out of my head, I go rock climbing. I grew up in a very political family and I carry on that tradition by being active in the local campaigns. I find a lot of peace by attending church on Sunday mornings and by being a part of that community."
        },
    ]

    const personal = [
        {
            label: "I’m looking for:",
            detail: "A dating partner with intent to marry"
        },
        {
            label: "Body type:",
            detail: "Fit body type"
        },
        {
            label: "Children: ",
            detail: "Yes, 3"
        },
        {
            label: "Pets:",
            detail: "I got 2 dogs"
        },
        {
            label: "Language:",
            detail: "English"
        },
        {
            label: "Education: ",
            detail: "Well educated"
        },
        {
            label: "Career:",
            detail: "Engineer"
        },
    ]
    return (
        <>
            <div className="profilr-bg">
                <Container>
                    <div className='set-backbtn-singlebtn'>
                        <div className="back-btn">
                            <Link to="/">
                                <img src="./assets/img/next.png" alt="" width="10px" height="15px" />
                            </Link>
                        </div>
                        <Buttons ButtonStyle='single-btn' onClick={handleRedirect} children="Single" />
                    </div>
                    <div className='over-img-div-991'>
                        <Row>
                            <Col md={3}>
                                <div className='profile-pic'>
                                    <img src="./assets/img/taylor-8Vt2haq8NSQ-unsplash.png" alt="" />
                                    <div className="verified-picture">
                                        <img src="./assets/img/poltgon-group.png" alt="" />
                                        <p>Verified picture</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={9}>
                                <div className="over-img-popup">
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className='name-age'>John doe, 36</h5>
                                        <img src="./assets/img/male.png" alt="" className='ml-3' />
                                    </div>
                                    <p>USA, San Francisco Bay Area | Religion: <span> Catholic </span></p>
                                    <p className='about-mi'>Hi I’m John, I’m a single father of 3 and I love camping, being outdoors and overall nature. I also have 2 dogs!</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="over-img-div">
                    <div className="verified-picture">
                        <img src="./assets/img/poltgon-group.png" alt="" />
                        <p>Verified picture</p>
                    </div>
                    <div className="over-img-popup">
                        <p>USA, San Francisco Bay Area | Religion: <span> Catholic </span></p>
                        <div className="d-flex align-items-center mb-3">
                            <h5 className='name-age'>John doe, 36</h5>
                            <img src="./assets/img/male.png" alt="" className='ml-3' />
                        </div>
                        <p className='about-mi'>Hi I’m John, I’m a single father of 3 and I love camping, being outdoors and overall nature. I also have 2 dogs!</p>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="profile-accordion">
                    <Accordion defaultActiveKey="0">
                        {accordion.map((item, i) => (
                            <Accordion.Item eventKey={i.toString()}>
                                <Accordion.Header>{item.Header}</Accordion.Header>
                                <Accordion.Body>
                                    {item.Body}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                    <div className="personal-details">
                        <h2>Personal</h2>
                        {personal.map((item) => (
                            <div className='d-flex mt-2'>
                                <p>{item.label}</p>
                                <span className='ml-2'>{item.detail}</span>
                            </div>
                        ))}
                    </div>
                    <div className="fun-facts">
                        <h2>Fun facts</h2>
                        <div className="d-flex mt-2">
                            <p>#1</p>
                            <span className='ml-2'>I always sneeze 3 times in a row!</span>
                        </div>
                        <div className="d-flex mt-2">
                            <p>#2</p>
                            <span className='ml-2'>I tend to say “Ahem” a lot after my sentences.</span>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ShowProfile
