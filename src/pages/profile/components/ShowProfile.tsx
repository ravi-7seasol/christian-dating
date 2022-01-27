import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleLeft, faArrowLeft, faArrowsAlt, faCompressArrowsAlt, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import Buttons from '../../../components/Buttons';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthStorage from '../../../helper/AuthStorage';
import { xwwwFormUrlencoded } from '../../../helper/utils';
import { ApiGet, ApiPost } from '../../../helper/API/ApiData';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../../redux/actions/loadingAction';
import { getProfileImage } from '../../../redux/actions/getProfileImage';
import STORAGEKEY from '../../../config/APP/app.config';
import { useLocation } from 'react-router';

const ShowProfile = () => {

    const [getProfileData, setGetProfileData] = useState<any>({
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
        religion: '',
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
        mobile_no: "",
        pets: "",
        profile_picture: "",
        state: "",
        token: "",
        personality: '',
        aboutme: '',
        lifestyle: '',
    })
    const params = new URLSearchParams(window.location.search)
    const profileid = params.get('profileid')

    const dispatch = useDispatch()


    const [id, setId] = useState<any>(0)
    const [isVerify, setIsVerify] = useState<any>({});

    const handleid = (i: any) => {
        if (id === i) {
            setId(undefined)
        } else {

            setId(i)
        }
    }

    useEffect(() => {
        dispatch(setIsLoading(true))
        console.log('profileid', profileid);

        let pid: String;
        if (profileid) {
            pid = profileid
        } else {
            pid = AuthStorage.getStorageJsonData(STORAGEKEY.userData).user_id
        }
        const id = {
            id: pid
        }
        console.log("id", id);

        const body = xwwwFormUrlencoded(id);

        ApiPost(`getsingleuser`, body)
            .then((res: any) => {
                setGetProfileData({
                    ...getProfileData, name: res.user.name, dob: res.user.dob, address: res.user.address, gender: res.user.gender, denomination: res.user.denomination, your_story: res.user.your_story, short_bio: res.user.short_bio, relationship_status: res.user.relationship_status, intrusted_in_meating: res.user.intrusted_in_meating, relationship_want_to_build: res.user.relationship_want_to_build, your_intenet: res.user.your_intenet, how_often_church: res.user.how_often_church, read_bible: res.user.read_bible, workout: res.user.workout, consume_alcohol: res.user.consume_alcohol, smoke: res.user.smoke, religion: res.user.religion,
                    body_type: res.user.body_type, career: res.user.career, children: res.user.children, city: res.user.city, code: res.user.code, country: res.user.country, education: res.user.education, email: res.user.email, funfacts: res.user.funfacts, id: res.user.id, image: res.user.image, is_active: res.user.is_active, is_verify: res.user.is_verify, language: res.user.language, mobile_no: res.user.mobile_no, pets: res.user.pets, profile_picture: res.user.profile_picture, state: res.user.state, token: res.user.token, aboutme: res.user.aboutme, lifestyle: res.user.lifestyle, personality: res.user.personality,
                })
                console.log("SingleUser", res)
                dispatch(getProfileImage(res.user.image))
                dispatch(setIsLoading(false))

            }).catch((error: any) => {
                console.log(error);
                dispatch(setIsLoading(false))

            })
    }, [])

    useEffect(() => {
        const id = {
            id: AuthStorage.getStorageJsonData(STORAGEKEY.userData).user_id
        }
        const body = xwwwFormUrlencoded(id)
        ApiPost('checkimageverificaion', body)
            .then(res => {
                console.log("res", res)
                setIsVerify(res)
            })
            .catch(err => {
                console.log("err", err);

            })
    }, []);


    const accordion = [
        {
            Header: "About me",
            Body: [{
                label: "Name:",
                value: getProfileData.name
            },
            // {
            // label: "Last Name:",
            // value: getProfileData.lastname
            // },
            {
                label: "Date Of Birth:",
                value: getProfileData.dob
            }, {
                label: "Address:",
                value: getProfileData.address
            }, {
                label: "Gender:",
                value: getProfileData.gender
            }, {
                label: "Denomination:",
                value: getProfileData.denomination
            }]
        },
        {
            Header: "Lifestyle",
            Body: [{
                label: "How Often Church:",
                value: getProfileData.how_often_church
            }, {
                label: "Read Bible:",
                value: getProfileData.read_bible
            }, {
                label: "Workout:",
                value: getProfileData.workout
            }, {
                label: "Consume Alcohol:",
                value: getProfileData.consume_alcohol
            }, {
                label: "Smoke:",
                value: getProfileData.smoke
            }]
        },
        {
            Header: "Personality",
            Body: [{
                label: "Your Story:",
                value: getProfileData.your_story
            }, {
                label: "Short Bio:",
                value: getProfileData.short_bio
            }, {
                label: "Relationship Status:",
                value: getProfileData.relationship_status
            }, {
                label: "Interested in Meeting:",
                value: getProfileData.intrusted_in_meating
            }, {
                label: "Relationship want to Build:",
                value: getProfileData.relationship_want_to_build
            }, {
                label: "Your Interest:",
                value: getProfileData.your_intenet
            }]
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
            <div className="profilr-bg"
             style={{
                background: `url(${getProfileData?.image ? getProfileData?.image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"})`
            }}>
                <Container>
                    <div className='set-backbtn-singlebtn'>
                        <div className="back-btn">
                            <Link to="/match_or_message">
                                <img src="./assets/img/next.png" alt="" width="10px" height="15px" />
                            </Link>
                        </div>
                        <Buttons ButtonStyle='single-btn' onClick={() => { }} children={getProfileData.relationship_status ?? "select relationship status"} />
                    </div>
                    <div className='over-img-div-991'>
                        <Row>
                            <Col md={3}>
                                <div className='profile-pic'>
                                    {/* <img src="./assets/img/taylor-8Vt2haq8NSQ-unsplash.png" alt="" /> */}
                                    <img src={getProfileData?.image ? getProfileData?.image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
                                    <div className="verified-picture">
                                        {isVerify.is_profile_image_verified === "1" ? <><img src="./assets/img/poltgon-group.png" alt="" /><p>Verified picture</p></> : ''}
                                    </div>
                                </div>
                            </Col>
                            <Col md={9}>
                                <div className="over-img-popup">
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className='name-age'>{getProfileData.name} , {moment().diff(moment(getProfileData.dob, 'YYYY-MM-DD'), 'years')}</h5>
                                        {getProfileData.gender === "male" ? <img src="./assets/img/male.png" alt="" className='ml-3' /> : <img src="./assets/img/female.png" alt="" className='ml-3' />}
                                    </div>
                                    <p>{getProfileData.address}
                                        | Denomination: {getProfileData.denomination}
                                    </p>
                                    <p className='about-mi'>{getProfileData.short_bio}</p>
                                    <p className='mb-0'><b>My story (How you came to Christ)</b></p>
                                    <p className='about-mi'>{getProfileData.your_story}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="over-img-div">
                    <div className="verified-picture">
                        {isVerify.is_profile_image_verified === "1" ? <><img src="./assets/img/poltgon-group.png" alt="" /><p>Verified picture</p></> : ''}
                    </div>
                    <div className="over-img-popup">
                        <p>{getProfileData.address} | Religion: {getProfileData.denomination}</p>
                        <div className="d-flex align-items-center mb-3">
                            <h5 className='name-age'>{getProfileData.name}, {moment().diff(moment(getProfileData.dob, 'YYYY-MM-DD'), 'years')}</h5>
                            <img src="./assets/img/male.png" alt="" className='ml-3' />
                        </div>
                        <p className='about-mi'>{getProfileData.short_bio}</p>
                        <p className='mb-0'><b>My story (How you came to Christ)</b></p>
                        <p className='about-mi'>{getProfileData.your_story}</p>

                    </div>
                </div>
            </Container>
            <Container>
                <div className="profile-accordion">
                    <Accordion defaultActiveKey="0">
                        <div className="personal-details">
                            {accordion.map((item, i) => (
                                <Accordion.Item eventKey={i.toString()}>
                                    <Accordion.Header onClick={() => handleid(i)}>{item.Header}
                                        <img src="./assets/img/down-arrow.png" alt="" width="20px" className={`${id === i && 'rotate-img'}`} /></Accordion.Header>
                                    <Accordion.Body>
                                        {item.Body.map((data: any, i: number) => (
                                            <div className='d-flex mt-2' key={i}>
                                                <p className='personal-details-text' >{data.label}</p>
                                                <span className='ml-2'>{data.value}</span>
                                            </div>
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </div>
                    </Accordion>
                    <div className="personal-details">
                        <h2>Personal</h2>
                        {personal.map((item, i) => {
                            if (item) {
                                return <div className='d-flex mt-2' key={i}>
                                    <p className='personal-details-text' >{item.label}</p>
                                    <span className='ml-2'>{item.detail}</span>
                                </div>
                            }
                        }
                        )}
                    </div>
                    <div className="fun-facts">
                        <h2>Fun facts</h2>
                        {getProfileData.funfacts !== "" && getProfileData.funfacts.split(",").map((item:any) => (
                            <p>{item}</p>
                        ))}
                    </div>
                </div>  
            </Container>
        </>
    )
}

export default ShowProfile
