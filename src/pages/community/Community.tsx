import React from 'react'
import { Container } from 'react-bootstrap'
import InputField from '../../components/Inputfield'
import '../messageInbox/inbox.css'

const Community = () => {
    const fakedata = [
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "Janki",
            namecolor: "#E69702",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "Dhara",
            namecolor: "#D10000",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "kemil",
            namecolor: "#25A706",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "kemil",
            namecolor: "#25A706",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "kemil",
            namecolor: "#25A706",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "kemil",
            namecolor: "#25A706",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "kemil",
            namecolor: "#25A706",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "kemil",
            namecolor: "#25A706",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        }
    ]
    return (
        <>
            <Container>
                <div className="community">
                    <div className='community-popup'>
                        <p>“So now the case is closed. There remains no accusing voice of condemnation against those who are joined in life-union with Jesus, the Anointed One.” <span> Romans‬ ‭8:1‬ ‭TPT‬‬</span></p>
                    </div>
                    <div className="">
                        {fakedata.map((item, i) => (
                            <div className='d-flex pt-4 align-items-center' key={i}>
                                <div className=''>
                                    <img src={item.Profilepic} />
                                    <div className=''></div>
                                </div>
                                <div>
                                    <h6 className='Name ml-3' style={{ color: item.namecolor }} >{item.Name}</h6>
                                    <p className='last-sms ml-3'>{item.Lastsms}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="input-area">
                        <div>
                            <div className="choose-picture">
                                <img src="./assets/img/picture-one (1).png" />
                            </div>
                        </div>
                        <div>
                            <div className="send-gift">
                                <img src="./assets/img/gift (1).png" />
                            </div>
                        </div>
                        {/* <div className="text-input-main"> */}
                        <div className="input-chat">
                            <InputField
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
                            />
                            <div className="emoji-img">
                                <img src="./assets/img/grinning-face (1).png" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Community
