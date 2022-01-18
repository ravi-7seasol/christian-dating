import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Buttons from '../../components/Buttons';
import { useNavigate, useLocation } from 'react-router';
import CheckBox from '../../components/Checkbox';
import InputField from '../../components/Inputfield';
import Header from '../../layouts/header/Header';

const Terms_of_use = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const handleRedirect = () => {
        location.search === "?from=login" ? navigate("/") : navigate("/signup") 
    }
    

    const Terms_of_use = [
        {
            Terms_of_use: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            Terms_of_use: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            Terms_of_use: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <Container>
                    <div className="login-card">
                        <Header />
                        <div className="login">
                            <h2>Terms of use</h2>
                            <ol>
                                {Terms_of_use.map((item) => (
                                    <li className='mb-3 Terms'>{item.Terms_of_use}</li>
                                ))}
                            </ol>
                            <div style={{ marginTop: "6rem" }}>
                                <Buttons
                                    children="Back"
                                    onClick={handleRedirect}
                                    ButtonStyle="login-btn"
                                    disabled={false}
                                />
                            </div>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Container >
            </div >
        </>
    )
}

export default Terms_of_use