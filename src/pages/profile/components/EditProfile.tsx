import { useEffect, useState } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Buttons from '../../../components/Buttons';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { xwwwFormUrlencoded } from '../../../helper/utils';
import { ApiPost } from '../../../helper/API/ApiData';
import InputField from '../../../components/Inputfield';
import ReactSelect from '../../../components/ReactSelect';

const ShowProfile = () => {

    const [editProfileData, setEditProfileData] = useState({
        firstname: '',
        dob: '',
        gender: '',
        address: '',
        short_bio: '',
        aboutme: "",
        lifestyle: "",
        personality: "",
        your_intenet: '',
        body_type: '',
        children: '',
        pets: '',
        language: '',
        education: '',
        career: '',

        religion: '',

        denomination: 0,
        your_story: '',
        relationship_status: '',
        intrusted_in_meating: '',
        relationship_want_to_build: '',
        how_often_church: '',
        read_bible: '',
        workout: '',
        consume_alcohol: '',
        smoke: '',
        city: "",
        code: null,
        country: "",
        email: "",
        funfacts: "",
        id: "",
        image: null,
        is_active: "",
        is_verify: "",
        lastname: "",
        mobile_no: "",
        profile_picture: "",
        state: "",
        token: "",
    })
    const [funFacts, setFunFacts] = useState([{
        value: "1"
    }])

    const incrementBtn = () => {
        let val = [...funFacts]
        val.push({ value: "" })
        setFunFacts(val)
    }

    const decrementBtn = (i: number) => {
        let val = [...funFacts]
        val.splice(i, 1)
        setFunFacts(val)
    }

    const funFactsHandleChange = (e: any, i: number) => {
        let val = [...funFacts]
        val[i].value = e.target.value
        setFunFacts(val)
    }

    const selectValue = (value: string, type: string) => {
        if (type === "religion") {
            return options.find((data: any) => data.value === value)
        }
        else if (type === "relationship_status") {
            return relationOption.find((data: any) => data.value === value)
        }
    }

    const handleChange = (e: any) => {
        setEditProfileData({ ...editProfileData, [e.target.name]: e.target.value })
    }

    const handleGenderActive = (e: any, text: any) => {
        e.preventDefault()
        setEditProfileData({ ...editProfileData, gender: text })
    }

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
                setEditProfileData({
                    ...editProfileData, firstname: res.user.firstname, dob: res.user.dob, address: res.user.address, gender: res.user.gender, denomination: res.user.denomination, your_story: res.user.your_story, short_bio: res.user.short_bio, relationship_status: res.user.relationship_status, intrusted_in_meating: res.user.intrusted_in_meating, relationship_want_to_build: res.user.relationship_want_to_build, your_intenet: res.user.your_intenet, how_often_church: res.user.how_often_church, read_bible: res.user.read_bible, workout: res.user.workout, consume_alcohol: res.user.consume_alcohol, smoke: res.user.smoke,
                    body_type: res.user.body_type, career: res.user.career, children: res.user.children, city: res.user.city, code: res.user.code, country: res.user.country, education: res.user.education, email: res.user.email, funfacts: res.user.funfacts, id: res.user.id, image: res.user.image, is_active: res.user.is_active, is_verify: res.user.is_verify, language: res.user.language, lastname: res.user.lastname, mobile_no: res.user.mobile_no, pets: res.user.pets, profile_picture: res.user.profile_picture, state: res.user.state, token: res.user.token
                })

            }).catch((error: any) => {
                console.log(error);
            })
    }, [])

    const accordion = [
        {
            Name: 'your_story',
            Header: "My story (How you came to Christ)",
            Body: editProfileData.your_story
        },
        {
            Name: 'aboutme',
            Header: "About me",
            Body: editProfileData.aboutme
        },
        {
            Name: 'lifestyle',
            Header: "Lifestyle",
            Body: editProfileData.lifestyle
        },
        {
            Name: 'personality',
            Header: "Personality",
            Body: editProfileData.personality
        },
    ]

    const personal = [
        {
            Name: 'your_intenet',
            label: "I’m looking for:",
            detail: editProfileData.your_intenet
        },
        {
            Name: 'body_type',
            label: "Body type:",
            detail: editProfileData.body_type
        },
        {
            Name: 'children',
            label: "Children: ",
            detail: editProfileData.children
        },
        {
            Name: 'pets',
            label: "Pets:",
            detail: editProfileData.pets
        },
        {
            Name: 'language',
            label: "Language:",
            detail: editProfileData.language
        },
        {
            Name: 'education',
            label: "Education: ",
            detail: editProfileData.education
        },
        {
            Name: 'career',
            label: "Career:",
            detail: editProfileData.career
        },
    ]

    const options = [
        { value: "Hindu", label: "Hindu" },
        { value: "Cristian", label: "Cristian" },
    ];

    const relationOption = [
        { value: "Single", label: "Single" },
        { value: "Married", label: "Married" },
        { value: "In a relationship", label: "In a relationship" },
        { value: "Divorced", label: "Divorced" },
    ]

    return (
        <>
            <div className="profilr-bg">
                <Container>
                    <div className='set-backbtn-singlebtn col-12'>
                        <div className="back-btn">
                            <Link to="/">
                                <img src="./assets/img/next.png" alt="" width="10px" height="15px" />
                            </Link>
                        </div>
                        <ReactSelect placeholder="Single" options={relationOption} onChange={(e: any) => setEditProfileData({ ...editProfileData, relationship_status: e.value })} value={selectValue(editProfileData.relationship_status, "relationship_status")} />
                    </div>
                    <div className='over-img-div-991'>
                        <Row>
                            <Col md={3}>
                                <div className='profile-pic'>
                                    <img src="./assets/img/taylor-8Vt2haq8NSQ-unsplash.png" alt="" />
                                    <div className="verified-picture">
                                        {editProfileData.is_verify === "1" ? <><img src="./assets/img/poltgon-group.png" alt="" /><p>Verified picture</p></> : ''}
                                    </div>
                                </div>
                            </Col>
                            <Col md={9}>
                                <div className="over-img-popup">
                                    <div className="d-flex align-items-center mb-3 ">
                                        <h5 className='name-age col-4'>
                                            Name : <InputField
                                                name="firstname"
                                                maxLength={undefined}
                                                value={editProfileData.firstname}
                                                lablestyleClass="name-label"
                                                InputstyleClass="name-input"
                                                onChange={(e: any) => {
                                                    handleChange(e);
                                                }}
                                                disabled={false}
                                                label=""
                                                placeholder="John"
                                                type="text"
                                                fromrowStyleclass=""
                                            />
                                            DOB : <InputField
                                                name="dob"
                                                maxLength={undefined}
                                                value={editProfileData.dob}
                                                lablestyleClass="dob-label"
                                                InputstyleClass="dob-input"
                                                onChange={(e: any) => {
                                                    handleChange(e);
                                                }}
                                                disabled={false}
                                                label=""
                                                placeholder=""
                                                type="text"
                                                fromrowStyleclass=""
                                            />
                                        </h5>
                                        <div className="gender col-4">
                                            <label className="login-label">Gender</label>
                                            <br />
                                            <button className={`gender-btn male ${editProfileData.gender === "male" && "gender-active"}`} onClick={(e) => handleGenderActive(e, "male")}>
                                                <img src="./assets/img/male.png" alt="male" />
                                            </button>
                                            <button className={`gender-btn female ${editProfileData.gender === "female" && "gender-active"}`} onClick={(e) => handleGenderActive(e, "female")}>
                                                <img src="./assets/img/female.png" alt="female" />
                                            </button>
                                        </div>
                                    </div>
                                    <p>
                                        Address : <InputField
                                            name="address"
                                            maxLength={undefined}
                                            value={editProfileData.address}
                                            lablestyleClass="address-label"
                                            InputstyleClass="address-input"
                                            onChange={(e: any) => {
                                                handleChange(e);
                                            }}
                                            disabled={false}
                                            label=""
                                            placeholder="address"
                                            type="text"
                                            fromrowStyleclass=""
                                        />
                                        Religion : <ReactSelect placeholder="Choose Religion" options={options} onChange={(e: any) => setEditProfileData({ ...editProfileData, religion: e.value })} value={selectValue(editProfileData.religion, "religion")} />
                                    </p>
                                    <p className='about-mi'>
                                        Short Bio : <InputField
                                            name="short_bio"
                                            maxLength={undefined}
                                            value={editProfileData.short_bio}
                                            lablestyleClass="short_bio-label"
                                            InputstyleClass="short_bio-input"
                                            onChange={(e: any) => {
                                                handleChange(e);
                                            }}
                                            disabled={false}
                                            label=""
                                            placeholder="short_bio"
                                            type="text"
                                            fromrowStyleclass=""
                                        />
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="over-img-div">
                    <div className="verified-picture">
                        {editProfileData.is_verify === "1" ? <><img src="./assets/img/poltgon-group.png" alt="" /><p>Verified picture</p></> : ''}
                    </div>
                    <div className="over-img-popup">
                        <p>
                            <InputField
                                name="address"
                                maxLength={undefined}
                                value={editProfileData.address}
                                lablestyleClass="address-label"
                                InputstyleClass="address-input"
                                onChange={(e: any) => {
                                    handleChange(e);
                                }}
                                disabled={false}
                                label=""
                                placeholder="address"
                                type="text"
                                fromrowStyleclass=""
                            />
                            | Religion: <span> Catholic </span></p>
                        <div className="d-flex align-items-center mb-3">
                            <h5 className='name-age'>
                                <InputField
                                    name="firstname"
                                    maxLength={undefined}
                                    value={editProfileData.firstname}
                                    lablestyleClass="name-label"
                                    InputstyleClass="name-input"
                                    onChange={(e: any) => {
                                        handleChange(e);
                                    }}
                                    disabled={false}
                                    label=""
                                    placeholder="John"
                                    type="text"
                                    fromrowStyleclass=""
                                />
                                <InputField
                                    name="dob"
                                    maxLength={undefined}
                                    value={editProfileData.dob}
                                    lablestyleClass="dob-label"
                                    InputstyleClass="dob-input"
                                    onChange={(e: any) => {
                                        handleChange(e);
                                    }}
                                    disabled={false}
                                    label=""
                                    placeholder=""
                                    type="text"
                                    fromrowStyleclass=""
                                />
                            </h5>
                            <div className="gender">
                                <label className="login-label">Gender</label>
                                <br />
                                <button className={`gender-btn male ${editProfileData.gender === "male" && "gender-active"}`} onClick={(e) => handleGenderActive(e, "male")}>
                                    <img src="./assets/img/male.png" alt="male" />
                                </button>
                                <button className={`gender-btn female ${editProfileData.gender === "female" && "gender-active"}`} onClick={(e) => handleGenderActive(e, "female")}>
                                    <img src="./assets/img/female.png" alt="female" />
                                </button>
                            </div>
                        </div>
                        <p className='about-mi'>
                            <InputField
                                name="short_bio"
                                maxLength={undefined}
                                value={editProfileData.short_bio}
                                lablestyleClass="short_bio-label"
                                InputstyleClass="short_bio-input"
                                onChange={(e: any) => {
                                    handleChange(e);
                                }}
                                disabled={false}
                                label=""
                                placeholder="short_bio"
                                type="text"
                                fromrowStyleclass=""
                            />
                        </p>
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
                                    <InputField
                                        name={item.Name}
                                        maxLength={undefined}
                                        value={item.Body}
                                        lablestyleClass="label"
                                        InputstyleClass="input"
                                        onChange={(e: any) => {
                                            handleChange(e);
                                        }}
                                        disabled={false}
                                        label=""
                                        placeholder=""
                                        type="text"
                                        fromrowStyleclass=""
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                    <div className="personal-details">
                        <h2>Personal</h2>
                        {personal.map((item) => (
                            <div className='d-flex mt-2'>
                                <p>{item.label}</p>
                                <span className='ml-2'>
                                    <InputField
                                        name={item.Name}
                                        maxLength={undefined}
                                        value={item.detail}
                                        lablestyleClass="label"
                                        InputstyleClass="input"
                                        onChange={(e: any) => {
                                            handleChange(e);
                                        }}
                                        disabled={false}
                                        label=""
                                        placeholder=""
                                        type="text"
                                        fromrowStyleclass=""
                                    />
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="fun-facts">
                        <h2>Fun facts</h2>
                        <div className="d-flex mt-2">
                            <span className='ml-2'>
                                {
                                    funFacts.map((data: any, i: number) => (
                                        <>
                                            <InputField
                                                name={`funfacts${i}`}
                                                maxLength={undefined}
                                                value={data.value}
                                                lablestyleClass="label"
                                                InputstyleClass="input"
                                                onChange={(e: any) => {
                                                    funFactsHandleChange(e, i);
                                                }}
                                                disabled={false}
                                                label=""
                                                placeholder=""
                                                type="text"
                                                fromrowStyleclass=""
                                            />
                                            <button className='btn btn-default' onClick={() => decrementBtn(i)}>
                                                -
                                            </button>
                                        </>
                                    ))
                                }
                                <button className='btn btn-default' onClick={incrementBtn}>
                                    +
                                </button>
                            </span>
                        </div>
                    </div>
                    <Buttons ButtonStyle="" children='Save' onClick={() => { }} disabled={false} />
                </div>
            </Container>
        </>
    )
}

export default ShowProfile
