import React from 'react'
import { Container } from 'react-bootstrap'

const Community = () => {
    const fakedata = [
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "Janki",
            namecolor:"#E69702",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "Dhara",
            namecolor:"#D10000",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "kemil",
            namecolor:"#25A706",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "kemil",
            namecolor:"#25A706",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
        {
            Profilepic: "./assets/img/Ellipse 31.png",
            Name: "kemil",
            namecolor:"#25A706",
            Lastsms: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        }
    ]
    return (
        <>
            {/* <p className=''>Share words of encouragement, voice and express concerns, share favorite scriptures and the good things God has done, is doing, and will do in your life!</p> */}
            <Container>
                <div className='community-popup'>
                    <p>“So now the case is closed. There remains no accusing voice of condemnation against those who are joined in life-union with Jesus, the Anointed One.” <span> Romans‬ ‭8:1‬ ‭TPT‬‬</span></p>
                </div>
                <div className="">
                    {fakedata.map((item,i) => (
                        <div className='d-flex pt-4 align-items-center' key={i}>
                            <div className=''>
                                <img src={item.Profilepic} />
                            </div>
                            <div>
                                <h6 className='Name ml-3' style={{ color: item.namecolor }} >{item.Name}</h6>
                                <p className='last-sms ml-3'>{item.Lastsms}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Community
