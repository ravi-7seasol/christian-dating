import InstagramLogin from 'react-instagram-login'
import { useNavigate } from 'react-router';
import { cssTransition, toast } from 'react-toastify';
import STORAGEKEY from '../../config/APP/app.config';
import { ApiPost } from '../../helper/API/ApiData';
import AuthStorage from '../../helper/AuthStorage';
import { xwwwFormUrlencoded } from '../../helper/utils';
const FacbookAppId = "634703847650865"

const LogiWithInstagram = () => {

    const navigate = useNavigate()

    const responseInstagram = (response) => {
        console.log("instagram response ======= response", response);
        const code = {
            code: response.googleId,
            email: response.profileObj.email
        }
        const body = xwwwFormUrlencoded(code)
        ApiPost("signupusersocial", body)
            .then((res) => {
                if (res.token !== "" && res.status !== "false") {
                    if (res.username) {
                        AuthStorage.setStorageData(STORAGEKEY.token, res.token, true);
                        let newData = res
                        delete newData.token
                        delete newData.msg
                        AuthStorage.setStorageData(STORAGEKEY.userData, JSON.stringify(newData), true)
                        navigate("/match_or_message");
                    } else {
                        AuthStorage.setStorageData(STORAGEKEY.token, res.token, true);
                        let newData = res
                        delete newData.token
                        delete newData.msg
                        AuthStorage.setStorageData(STORAGEKEY.userData, JSON.stringify(newData), true)
                        navigate("/profile");
                    }
                } else {
                    toast.error("User Not Registered", {
                        // position: toast.POSITION.TOP_CENTER,
                        transition: cssTransition({
                            enter: "animate__animated animate__bounceIn",
                            exit: "animate__animated animate__bounceOut"
                        })
                    })
                }
            })
            .catch((err) => {
                console.log("err", err)
            })
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
