import React from 'react'
import InstagramLogin from 'react-instagram-login'
const FacbookAppId = "634703847650865"

const LogiWithInstagram = () => {
    const responseInstagram = (response) => {
        console.log("instagram response ======= response", response);
    };

    const failureResponseInstagram = (response) => {
        console.log("instagram failureResponseFacebook ===== failureResponseFacebook", response);
    };
    return (
        <div>
            <InstagramLogin
                clientId={FacbookAppId}
                buttonText="Login"
                onSuccess={responseInstagram}
                onFailure={failureResponseInstagram}
            />

        </div>
    )
}

export default LogiWithInstagram
