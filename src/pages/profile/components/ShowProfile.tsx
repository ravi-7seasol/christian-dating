import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowLeft, faArrowsAlt, faCompressArrowsAlt, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import Buttons from '../../../components/Buttons';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import AuthStorage from '../../../helper/AuthStorage';
import { xwwwFormUrlencoded } from '../../../helper/utils';
import { ApiGet, ApiPost } from '../../../helper/API/ApiData';
import moment from 'moment';

const ShowProfile = () => {

    const [getProfileData, setGetProfileData] = useState({
        name: '',
        dob: '',
        address: '',
        gender: '',
        denomination: 0,
        your_story: '',
        short_bio: '',
        relationship_status: '',
        intrusted_in_meating: '',
        relationship_want_to_build: '',
        your_intenet: '',
        how_often_church: '',
        read_bible: '',
        workout: '',
        consume_alcohol: '',
        smoke: '',

        body_type: "",
        career: "",
        children: "",
        city: "",
        code: null,
        country: "",
        education: "",
        email: "",
        funfacts: "",
        id: "",
        image: null,
        is_active: "",
        is_verify: "",
        language: "",
        lastname: "",
        mobile_no: "",
        pets: "",
        profile_picture: "",
        state: "",
        token: "",
    })

    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate("/match_or_message")
    }

    useEffect(() => {
        const id = {
            id: '13'
        }
        const body = xwwwFormUrlencoded(id);

        ApiPost(`getsingleuser`, body)
            .then((res: any) => {
                setGetProfileData({
                    ...getProfileData, name: res.user.firstname, dob: res.user.dob, address: res.user.address, gender: res.user.gender, denomination: res.user.denomination, your_story: res.user.your_story, short_bio: res.user.short_bio, relationship_status: res.user.relationship_status, intrusted_in_meating: res.user.intrusted_in_meating, relationship_want_to_build: res.user.relationship_want_to_build, your_intenet: res.user.your_intenet, how_often_church: res.user.how_often_church, read_bible: res.user.read_bible, workout: res.user.workout, consume_alcohol: res.user.consume_alcohol, smoke: res.user.smoke,
                    body_type: res.user.body_type, career: res.user.career, children: res.user.children, city: res.user.city, code: res.user.code, country: res.user.country, education: res.user.education, email: res.user.email, funfacts: res.user.funfacts, id: res.user.id, image: res.user.image, is_active: res.user.is_active, is_verify: res.user.is_verify, language: res.user.language, lastname: res.user.lastname, mobile_no: res.user.mobile_no, pets: res.user.pets, profile_picture: res.user.profile_picture, state: res.user.state, token: res.user.token
                })

            }).catch((error: any) => {
                console.log(error);
            })
    }, [])

    const accordion = [
        {
            Header: "My story (How you came to Christ)",
            Body: getProfileData.your_story
        },
        {
            Header: "About me",
            Body: ""
        },
        {
            Header: "Lifestyle",
            Body: ""
        },
        {
            Header: "Personality",
            Body: ""
        },
    ]

    const personal = [
        {
            label: "I’m looking for:",
            detail: getProfileData.your_intenet
        },
        {
            label: "Body type:",
            detail: getProfileData.body_type
        },
        {
            label: "Children: ",
            detail: getProfileData.children
        },
        {
            label: "Pets:",
            detail: getProfileData.pets
        },
        {
            label: "Language:",
            detail: getProfileData.language
        },
        {
            label: "Education: ",
            detail: getProfileData.education
        },
        {
            label: "Career:",
            detail: getProfileData.career
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
                                        {getProfileData.is_verify === "1" ? <><img src="./assets/img/poltgon-group.png" alt="" /><p>Verified picture</p></> : ''}
                                    </div>
                                </div>
                            </Col>
                            <Col md={9}>
                                <div className="over-img-popup">
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className='name-age'>{getProfileData.name}, {moment().diff(moment(getProfileData.dob, 'YYYY-MM-DD'), 'years')}</h5>
                                        {getProfileData.gender === "male" ? <img src="./assets/img/male.png" alt="" className='ml-3' /> : <img src="./assets/img/female.png" alt="" className='ml-3' />}
                                    </div>
                                    <p>{getProfileData.address} | Religion: <span> Catholic </span></p>
                                    <p className='about-mi'>{getProfileData.short_bio}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="over-img-div">
                    <div className="verified-picture">
                        {getProfileData.is_verify === "1" ? <><img src="./assets/img/poltgon-group.png" alt="" /><p>Verified picture</p></> : ''}
                    </div>
                    <div className="over-img-popup">
                        <p>{getProfileData.address} | Religion: <span> Catholic </span></p>
                        <div className="d-flex align-items-center mb-3">
                            <h5 className='name-age'>{getProfileData.name}, {moment().diff(moment(getProfileData.dob, 'YYYY-MM-DD'), 'years')}</h5>
                            <img src="./assets/img/male.png" alt="" className='ml-3' />
                        </div>
                        <p className='about-mi'>{getProfileData.short_bio}</p>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="profile-accordion">
                    <Accordion defaultActiveKey="0">
                        {accordion.map((item, i) =>(
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
                        {personal.map((item) => {
                            if (item.detail !== "") {
                                return <div className='d-flex mt-2'>
                                    <p>{item.label}</p>
                                    <span className='ml-2'>{item.detail}</span>
                                </div>
                            }
                        }
                        )}
                    </div>
                    <div className="fun-facts">
                        <h2>Fun facts</h2>
                        {getProfileData.funfacts !== "" && getProfileData.funfacts}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ShowProfile
