import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowLeft, faArrowsAlt, faCompressArrowsAlt, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Buttons from '../../components/Buttons';
import { Accordion, Container } from 'react-bootstrap';

const Profile = () => {
    return (
        <>
            <div className="profilr-bg">
                <div className="back-btn">
                    <img src="./assets/img/next.png" alt="" width="30px" height="30px" />
                </div>
                <Buttons ButtonStyle='singal-btn' onClick={() => { }} children="Singal" />
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
                            <img src="./assets/img/male.png" alt="" height="8%" width="8%" className='ml-3' />
                        </div>
                        <p className='about-mi'>Hi I’m John, I’m a single father of 3 and I love camping, being outdoors and overall nature. I also have 2 dogs!</p>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="profile-accordion">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>My story (How you came to Christ)</Accordion.Header>
                            <Accordion.Body>
                                “I own my own Software Development company. I love jazz and go watch my favorite bands as often as possible. To get out of my head, I go rock climbing. I grew up in a very political family and I carry on that tradition by being active in the local campaigns. I find a lot of peace by attending church on Sunday mornings and by being a part of that community.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>About me</Accordion.Header>
                            <Accordion.Body>
                                “I own my own Software Development company. I love jazz and go watch my favorite bands as often as possible. To get out of my head, I go rock climbing. I grew up in a very political family and I carry on that tradition by being active in the local campaigns. I find a lot of peace by attending church on Sunday mornings and by being a part of that community.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Lifestyle</Accordion.Header>
                            <Accordion.Body>
                                “I own my own Software Development company. I love jazz and go watch my favorite bands as often as possible. To get out of my head, I go rock climbing. I grew up in a very political family and I carry on that tradition by being active in the local campaigns. I find a lot of peace by attending church on Sunday mornings and by being a part of that community.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Personality</Accordion.Header>
                            <Accordion.Body>
                                “I own my own Software Development company. I love jazz and go watch my favorite bands as often as possible. To get out of my head, I go rock climbing. I grew up in a very political family and I carry on that tradition by being active in the local campaigns. I find a lot of peace by attending church on Sunday mornings and by being a part of that community.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div className="personal-details">
                        <h2>Personal</h2>
                        <div className='d-flex mt-2'>
                            <p>I’m looking for:</p>
                            <span className='ml-2'> A dating partner with intent to marry</span>
                        </div>
                        <div className="d-flex mt-2">
                            <p>Body type:</p>
                            <span className='ml-2'> Fit body type</span>
                        </div>
                        <div className="d-flex mt-2">
                            <p>Children: </p>
                            <span className='ml-2'> Yes, 3</span>
                        </div>
                        <div className="d-flex mt-2">
                            <p>Pets:</p>
                            <span className='ml-2'> I got 2 dogs</span>
                        </div>
                        <div className="d-flex mt-2">
                            <p>Language:</p>
                            <span className='ml-2'> English</span>
                        </div>
                        <div className="d-flex mt-2">
                            <p>Education: </p>
                            <span className='ml-2'>Well educated</span>
                        </div>
                        <div className="d-flex mt-2">
                            <p>Career: </p>
                            <span className='ml-2'>Engineer</span>
                        </div>
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

export default Profile
