import InstagramLogin from 'react-instagram-login'
const FacbookAppId = "634703847650865"

const LogiWithInstagram = () => {
    const responseInstagram = (response) => {
        console.log("instagram response ======= response", response);
    };

    const failureResponseInstagram = (response) => {
        console.log("instagram failureResponseFacebook ===== failureResponseFacebook", response);
    };

    const Insta = () => {
        document.getElementById('insta').getElementsByTagName('button')[0].click();
    }

    return (
        <div>
            <figure onClick={Insta}>
                <img src="./assets/img/instagram-icon.png" alt="icon" />
            </figure>
            <div id="insta" >
                <InstagramLogin
                    clientId={FacbookAppId}
                    buttonText="Login"
                    onSuccess={responseInstagram}
                    onFailure={failureResponseInstagram}
                />
            </div>
        </div>
    )
}

export default LogiWithInstagram
