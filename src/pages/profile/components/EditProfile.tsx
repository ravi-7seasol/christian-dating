import { useEffect, useRef, useState } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Buttons from '../../../components/Buttons';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { xwwwFormUrlencoded } from '../../../helper/utils';
import { ApiPost } from '../../../helper/API/ApiData';
import InputField from '../../../components/Inputfield';
import ReactSelect from '../../../components/ReactSelect';
import AuthStorage from '../../../helper/AuthStorage';
import { setIsLoading } from '../../../redux/actions/loadingAction';
import { useDispatch } from 'react-redux';
import React from 'react';
import STORAGEKEY from '../../../config/APP/app.config';

const ShowProfile = () => {
    const [id, setId] = useState<any>(0)

    const handleid = (i: any) => {
        if (id === i) {
            setId(undefined)
        } else {

            setId(i)
        }
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [editProfileData, setEditProfileData] = useState<any>({
        token: AuthStorage.getToken(),
        name: '',
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
        relationship_status: 'Single',
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
        mobile_no: "",
        profile_picture: null,
        state: "",
    })
    const [funFacts, setFunFacts] = useState([{
        value: ""
    }])
    const [imgName, setImgName] = useState('')
    const [isVerify, setIsVerify] = useState<any>('');

    const incrementBtn = () => {
        let val = [...funFacts]
        val.push({ value: "" })
        setFunFacts(val)
    }

    const decrementBtn = (i: number) => {
        if (funFacts.length > 1) {
            let val = [...funFacts]
            val.splice(i, 1)
            setFunFacts(val)
        }
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

    useEffect(() => {
        let data = funFacts.map((data: any) => data.value).join()
        setEditProfileData({ ...editProfileData, funfacts: data })
    }, [funFacts])

    useEffect(() => {
        dispatch(setIsLoading(true))
        const id = {
            id: AuthStorage.getStorageJsonData(STORAGEKEY.userData).user_id
        }
        const body = xwwwFormUrlencoded(id);

        ApiPost(`getsingleuser`, body)
            .then((res: any) => {
                setEditProfileData({
                    ...editProfileData, name: res.user.name, dob: res.user.dob, address: res.user.address, gender: res.user.gender, denomination: res.user.denomination, your_story: res.user.your_story, short_bio: res.user.short_bio, relationship_status: res.user.relationship_status, intrusted_in_meating: res.user.intrusted_in_meating, relationship_want_to_build: res.user.relationship_want_to_build, your_intenet: res.user.your_intenet, how_often_church: res.user.how_often_church, read_bible: res.user.read_bible, workout: res.user.workout, consume_alcohol: res.user.consume_alcohol, smoke: res.user.smoke,
                    body_type: res.user.body_type, career: res.user.career, children: res.user.children, city: res.user.city, code: res.user.code, country: res.user.country, education: res.user.education, email: res.user.email, id: res.user.id, image: res.user.image, is_active: res.user.is_active, is_verify: res.user.is_verify, language: res.user.language, mobile_no: res.user.mobile_no, pets: res.user.pets, profile_picture: res.user.profile_picture, state: res.user.state, token: AuthStorage.getToken()
                })
                setFunFacts(res.user.funfacts.split(',').map((data: any) => ({ value: data })))
                dispatch(setIsLoading(false))
            }).catch((error: any) => {
                console.log(error);
                dispatch(setIsLoading(false))
            })
    }, [])

    useEffect(() => {
        let id = {
            id: AuthStorage.getStorageJsonData(STORAGEKEY.userData).user_id
        }
        const body = xwwwFormUrlencoded(id)
        ApiPost('checkimageverificaion', body)
            .then(res => {

                setIsVerify(res)
            })
            .catch(err => {
                console.log("err", err);

            })
    }, []);

    const handleChnage = (e: any) => {

        let file = e.target.files[0]
        new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
                setEditProfileData({ ...editProfileData, profile_picture: fileReader.result })
                setImgName(e.target.files[0].name)

            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    useEffect(() => {
        const img = {
            token: AuthStorage.getToken(),
            image: editProfileData.profile_picture,
            name: imgName
        }

        if (imgName.length) {

            const body = xwwwFormUrlencoded(img);

            ApiPost(`updateprofileimage`, body)
                .then((res: any) => {
                    setEditProfileData({ ...editProfileData, profile_picture: res.file, image: res.image })
                    dispatch(setIsLoading(false))
                }).catch((error: any) => {
                    console.log(error);
                    dispatch(setIsLoading(false))
                })
        }
    }, [imgName])

    const editProfileBtn = () => {
        const body = xwwwFormUrlencoded(editProfileData);
        ApiPost('updateprofile', body)
            .then((res: any) => {
                console.log("res Edit Profile", res);
                if (res.status === "true") {
                    navigate("/show-profile");
                }
                else {
                    alert(`${res.msg}`)
                }
            }).catch((error: any) => {
                console.log(error);
            })
    }

    const accordion = [
        {
            Name: 'aboutme',
            Header: "About me",
            Body: [
                //     {
                //     Name: "firstname",
                //     label: "First Name:",
                //     value: editProfileData.firstname
                // }, {
                //     Name: "lastname",
                //     label: "Last Name:",
                //     value: editProfileData.lastname
                // }, {
                //     Name: "dob",
                //     label: "Date Of Birth:",
                //     value: editProfileData.dob
                // }, {
                //     Name: "address",
                //     label: "Address:",
                //     value: editProfileData.address
                // }, {
                //     Name: "gender",
                //     label: "Gender:",
                //     value: editProfileData.gender
                //     },
                {
                    Name: "denomination",
                    label: "Denomination:",
                    value: editProfileData.denomination
                }]
        },
        {
            Name: 'lifestyle',
            Header: "Lifestyle",
            Body: [{
                Name: "how_often_church",
                label: "How Often Church:",
                value: editProfileData.how_often_church
            }, {
                Name: "read_bible",
                label: "Read Bible:",
                value: editProfileData.read_bible
            }, {
                Name: "workout",
                label: "Workout:",
                value: editProfileData.workout
            }, {
                Name: "consume_alcohol",
                label: "Consume Alcohol:",
                value: editProfileData.consume_alcohol
            }, {
                Name: "smoke",
                label: "Smoke:",
                value: editProfileData.smoke
            }]
        },
        {
            Name: 'personality',
            Header: "Personality",
            Body: [{
                Name: "your_story",
                label: "Your Story:",
                value: editProfileData.your_story
            }, {
                Name: "short_bio",
                label: "Short Bio:",
                value: editProfileData.short_bio
            }, {
                Name: "relationship_status",
                label: "Relationship Status:",
                value: editProfileData.relationship_status
            }, {
                Name: "intrusted_in_meating",
                label: "Intrusted in Meating:",
                value: editProfileData.intrusted_in_meating
            }, {
                Name: "relationship_want_to_build",
                label: "Relationship want to Build:",
                value: editProfileData.relationship_want_to_build
            }, {
                Name: "your_intenet",
                label: "Your Intenet:",
                value: editProfileData.your_intenet
            }]
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

    const denominationOptions = [
        { value: "Assebmly of God", label: "Assebmly of God" },
        { value: "Church of Christ", label: "Church of Christ" },
        { value: "Baptist", label: "Baptist" },
        { value: "Catholic", label: "Catholic" },
        { value: "Evangelical", label: "Evangelical" },
        { value: "Jewish", label: "Jewish" },
      ];

      const selectOption = (value: string, name:string) => {
        let option: any[] = []
        if(name === "relationOption") {
            option =relationOption
        }

        let objValue = option.find((data) => data.value === value)
        if(!objValue) {
            return objValue
        }
        let newVal = {
            label: objValue.label,
            value: objValue.value
        }
        return newVal
      } 

    const textInput: any = useRef(null)


    return (
        <>
            <div className="profilr-bg"
                style={{
                    background: `url(${editProfileData?.image ? editProfileData?.image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"})`
                }}
            >
                <Container>
                    <div className='set-backbtn-singlebtn '>
                        <div className="back-btn">
                            <Link to="/match_or_message">
                                <img src="./assets/img/next.png" alt="" width="10px" height="15px" />
                            </Link>
                        </div>
                        <div className="select">
                            <ReactSelect placeholder="Single" options={relationOption} onChange={(e: any) => setEditProfileData({ ...editProfileData, relationship_status: e.value })} value={selectValue(editProfileData.relationship_status, "relationship_status")} />
                        </div>
                    </div>
                    <div className='over-img-div-991'>
                        <Row>
                            <Col md={3}>
                                <div className='profile-pic'>
                                    <img src={editProfileData?.image ? editProfileData?.image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" onClick={() => { textInput.current.click() }} />
                                    <input type="file" style={{ opacity: "0" }} ref={textInput} onChange={(e) => handleChnage(e)} id="img" name="img" accept="image/*" />
                                    <div className="verified-picture">
                                        {isVerify.is_profile_image_verified === "1" ? <><img src="./assets/img/poltgon-group.png" alt="" /><p>Verified picture</p></> : ''}
                                    </div>
                                </div>
                            </Col>
                            <Col md={9}>
                                <div className="over-img-popup">
                                    <div className="d-flex justify-content-between mb-3 ">
                                        <div className='name-age '>
                                            <InputField
                                                name="name"
                                                maxLength={undefined}
                                                value={editProfileData.name}
                                                lablestyleClass="login-label"
                                                InputstyleClass="login-input"
                                                onChange={(e: any) => {
                                                    handleChange(e);
                                                }}
                                                disabled={false}
                                                label="Name :"
                                                placeholder="Enter the name"
                                                type="text"
                                                fromrowStyleclass=""
                                            />
                                            {/* <InputField
                                                name="lastname"
                                                maxLength={undefined}
                                                value={editProfileData.lastname}
                                                lablestyleClass="login-label"
                                                InputstyleClass="login-input"
                                                onChange={(e: any) => {
                                                    handleChange(e);
                                                }}
                                                disabled={false}
                                                label="LastName :"
                                                placeholder="Enter last name"
                                                type="text"
                                                fromrowStyleclass=""
                                            /> */}
                                            <InputField
                                                name="dob"
                                                maxLength={undefined}
                                                value={editProfileData.dob}
                                                lablestyleClass="login-label"
                                                InputstyleClass="login-input"
                                                onChange={(e: any) => {
                                                    handleChange(e);
                                                }}
                                                disabled={false}
                                                label="DOB :"
                                                placeholder=""
                                                type="date"
                                                fromrowStyleclass=""
                                            />
                                        </div>
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
                                    <div className='religin-set'>
                                        <InputField
                                            name="address"
                                            maxLength={undefined}
                                            value={editProfileData.address}
                                            lablestyleClass="login-label"
                                            InputstyleClass="login-input"
                                            onChange={(e: any) => {
                                                handleChange(e);
                                            }}
                                            disabled={false}
                                            label="Address :"
                                            placeholder="address"
                                            type="text"
                                            fromrowStyleclass=""
                                        />

                                        {/* <div className="editprofile-slector">
                                            <label htmlFor="" className='login-label'>Religion</label>
                                            <div className="reactSelector mt-3">
                                                <ReactSelect
                                                    placeholder="Choose Religion"
                                                    options={options}
                                                    onChange={(e: any) => setEditProfileData({ ...editProfileData, religion: e.value })}
                                                    value={selectValue(editProfileData.religion, "religion")}
                                                />
                                            </div>
                                        </div> */}

                                        <InputField
                                            name="short_bio"
                                            maxLength={undefined}
                                            value={editProfileData.short_bio}
                                            lablestyleClass="login-label"
                                            InputstyleClass="login-input"
                                            onChange={(e: any) => {
                                                handleChange(e);
                                            }}
                                            disabled={false}
                                            label="Short Bio :"
                                            placeholder="short_bio"
                                            type="text"
                                            fromrowStyleclass="Enter the name"
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='editprofile-over-img-popup'>
                    <div className="over-img-div">
                        <div className="verified-picture">
                            {isVerify.is_profile_image_verified === "1" ? <><p><img src="./assets/img/poltgon-group.png" alt="" />Verified picture</p></> : ''}
                        </div>
                        <div className="over-img-popup">
                            <div>
                                <div>
                                    <label htmlFor="imgSelect" className='btn btn-primary'>Change Profile</label>
                                    <input
                                        type="file"
                                        onChange={(e) => handleChnage(e)}
                                        accept="image/*"
                                        className="d-none"
                                        id="imgSelect"
                                    />
                                </div>

                                <InputField
                                    name="address"
                                    maxLength={undefined}
                                    value={editProfileData.address}
                                    lablestyleClass="login-label"
                                    InputstyleClass="login-input"
                                    onChange={(e: any) => {
                                        handleChange(e);
                                    }}
                                    disabled={false}
                                    label="Address : "
                                    placeholder="address"
                                    type="text"
                                    fromrowStyleclass=""
                                />
                                {/* <div className="editprofile-slector">
                                    <label htmlFor="" className='login-label'>Religion</label>
                                    <div className="reactSelector mt-3">
                                        <ReactSelect
                                            placeholder="Choose Religion"
                                            options={options}
                                            onChange={(e: any) => setEditProfileData({ ...editProfileData, religion: e.value })}
                                            value={selectValue(editProfileData.religion, "religion")}
                                        />
                                    </div>
                                </div> */}
                            </div>
                            <div className="align-items-center mb-3">
                                <div className='name-age'>
                                    <InputField
                                        name="name"
                                        maxLength={undefined}
                                        value={editProfileData.name}
                                        lablestyleClass="login-label"
                                        InputstyleClass="login-input"
                                        onChange={(e: any) => {
                                            handleChange(e);
                                        }}
                                        disabled={false}
                                        label="Name :"
                                        placeholder=""
                                        type="text"
                                        fromrowStyleclass=""
                                    />
                                    {/* <InputField
                                        name="lastname"
                                        maxLength={undefined}
                                        value={editProfileData.lastname}
                                        lablestyleClass="login-label"
                                        InputstyleClass="login-input"
                                        onChange={(e: any) => {
                                            handleChange(e);
                                        }}
                                        disabled={false}
                                        label="LastName :"
                                        placeholder="deo"
                                        type="text"
                                        fromrowStyleclass=""
                                    /> */}
                                    <InputField
                                        name="dob"
                                        maxLength={undefined}
                                        value={editProfileData.dob}
                                        lablestyleClass="login-label"
                                        InputstyleClass="login-input"
                                        onChange={(e: any) => {
                                            handleChange(e);
                                        }}
                                        disabled={false}
                                        label="DOB :"
                                        placeholder=""
                                        type="text"
                                        fromrowStyleclass=""
                                    />
                                </div>
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
                            <div className='about-mi'>
                                <InputField
                                    name="short_bio"
                                    maxLength={undefined}
                                    value={editProfileData.short_bio}
                                    lablestyleClass="login-label"
                                    InputstyleClass="login-input"
                                    onChange={(e: any) => {
                                        handleChange(e);
                                    }}
                                    disabled={false}
                                    label="Short Bio :"
                                    placeholder="short_bio"
                                    type="text"
                                    fromrowStyleclass=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="">
                    <Accordion defaultActiveKey="0">
                        {accordion.map((item, i) => (
                            <Accordion.Item eventKey={i.toString()}>
                                <Accordion.Header onClick={() => handleid(i)}>{item.Header}
                                    <img src="./assets/img/down-arrow.png" alt="" width="20px" className={`${id === i && 'rotate-img'}`} /></Accordion.Header>

                                <Accordion.Body>
                                    <div className="personal-details">
                                        {item.Body.map((data: any, i: number) => (
                                            <div className='d-flex mt-2 align-items-center' key={i}>
                                                <p className='mb-0 col-3 col-md-3 col-sm-2'>{data.label}</p>
                                                <span className='ml-2 col-9 col-md-6 col-sm-10'>
                                                {data.Name === "denomination" ? 
                                                <ReactSelect options={denominationOptions} placeholder={"select Denomination"} onChange={() => {}} value={undefined} />
                                                :
                                                <InputField
                                                        name={data.Name}
                                                        maxLength={undefined}
                                                        value={data.detail}
                                                        lablestyleClass="login-label"
                                                        InputstyleClass="login-input"
                                                        onChange={(e: any) => {
                                                            handleChange(e);
                                                        }}
                                                        disabled={false}
                                                        label=""
                                                        placeholder=""
                                                        type="text"
                                                        fromrowStyleclass=""
                                                    /> 
                                                }
                                                </span>
                                            </div>

                                        ))}
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                    <div className="personal-details">
                        <h2>Personal</h2>
                        {personal.map((item, i) => (
                            <div className='d-flex mt-2 align-items-center' key={i}>
                                <p className='mb-0 col-3 col-md-3 col-sm-2'>{item.label}</p>
                                <span className='ml-2 col-9 col-md-6 col-sm-10'>
                                    <InputField
                                        name={item.Name}
                                        maxLength={undefined}
                                        value={item.detail}
                                        lablestyleClass="login-label"
                                        InputstyleClass="login-input"
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
                            <span className='ml-2 col-12 p-0'>
                                {
                                    funFacts.map((data: any, i: number) => (
                                        <div className='d-flex mb-2'>
                                            <div className='col-6 p-0'>
                                                <InputField
                                                    name={`funfacts${i}`}
                                                    maxLength={undefined}
                                                    value={data.value}
                                                    lablestyleClass="login-label"
                                                    InputstyleClass="login-input"
                                                    onChange={(e: any) => {
                                                        funFactsHandleChange(e, i);
                                                    }}
                                                    disabled={false}
                                                    label=""
                                                    placeholder=""
                                                    type="text"
                                                    fromrowStyleclass=""
                                                />
                                            </div>
                                            {/* <button className='btn btn-default' > */}
                                            <img src="./assets/img/minus-button.png" style={{ cursor: "pointer" }} alt="" width="20px" height="20px" className=' m-2' onClick={() => decrementBtn(i)} />
                                            {/* </button> */}
                                            {funFacts.length - 1 === i && (
                                                <img src="./assets/img/plus.png" style={{ cursor: "pointer" }} alt="" width="20px" height="20px" className='m-2 ' onClick={incrementBtn} />
                                            )
                                            }
                                        </div>
                                    ))
                                }
                            </span>
                        </div>
                    </div>
                    <div className='edit-profile-footer-btn'>
                        <Buttons ButtonStyle="login-btn" children='Save' onClick={() => editProfileBtn()} disabled={false} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ShowProfile
