import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { loadModels, getFullFaceDescription, createMatcher } from "../../../components/faceapi/Face";
import { useNavigate } from "react-router";
import AuthStorage from "../../../helper/AuthStorage";
import STORAGEKEY from "../../../config/APP/app.config";
import { xwwwFormUrlencoded } from "../../../helper/utils";
import { ApiPost } from "../../../helper/API/ApiData";
import { cssTransition, toast } from "react-toastify";
import Buttons from "../../../components/Buttons";


const SetProfileImage = ({ stepDone, images }: any) => {
  const [photo, setPhoto] = useState();
  const [camOpen, setCamOpen] = useState(false);
  const webcamRef = useRef<any>();
  const [takeImage, setTakeImage] = useState<any>([]);
  const webcams = useRef<any>();
  const [fullDesc, setFullDesc] = useState<any>();
  const [detections, setDetections] = useState<any>();
  const [descriptors, setDescriptors] = useState<any>();
  const [faceMatcher, setFaceMatcher] = useState<any>();
  const [match, setMatch] = useState<any>();
  const [facingMode, setFacingMode] = useState<any>();
  const inputSize = 160;
  //const [interval, setInterval] = useState();
  const [openBtn, setOpenBtn] = useState<any>(false)
  const navigate = useNavigate();

  useEffect(() => {
    loadModels();
    setInputDevice();
  }, []);
  const setInputDevice = () => {
    navigator.mediaDevices.enumerateDevices().then(
      devices => {
        let inputDevice = devices.filter(
          device => device.kind === 'videoinput'
        );
        if (inputDevice.length < 2) {
          setFacingMode("user")
        } else {
          setFacingMode("environment")
        }
        startCapture();
      });
  };

  let interval: any;
  const startCapture = () => {
    interval = setInterval(() => {
      captures();
    }, 1500)
    console.log("interval", interval)
  }
  useEffect(() => {
    return () => {
      clearInterval(interval)
    }
  }, []);

  const captures = async () => {
    if (!!webcams.current) {
      await getFullFaceDescription(
        webcams.current.getScreenshot(),
        inputSize
      ).then(fullDesc => {
        setMatch(fullDesc)
        console.log("fullDesc", fullDesc)
        setFullDesc(fullDesc)
        if (!!fullDesc) {

          let descriptor = fullDesc.map((fd: any) => fd.descriptor)
          setDescriptors(descriptor)
          let detection = fullDesc.map((fd: any) => fd.detection)
          setDetections(detection)

        }
      });

      // if (!!descriptors && !!faceMatcher) {
      //   let match = await descriptors.map((descriptor: any) =>
      //     faceMatcher.findBestMatch(descriptor)
      //   );
      //   setMatch(match);
      // }
    }
  };

  // let camera = '';
  // if (!!facingMode) {

  //   if (facingMode === 'user') {
  //     camera = 'Front';
  //   } else {
  //     camera = 'Back';
  //   }
  // }




  // const drawBoxFn = () => {

  useEffect(() => {
    console.log("match", match);

    if (match?.length) {
      setOpenBtn(true)
    }
    else {
      setOpenBtn(false)

    }
  }, [match])




  const openCamera = () => {
    if (camOpen === false) {
      setCamOpen(true);

    } else {
      setCamOpen(false);
      setMatch([])
    }
  }
  // const capture = () => {
  //   const imageSrc = webcams.current.getScreenshot();
  //   takeImage.push(imageSrc)
  //   setPhoto(imageSrc);
  //   setCamOpen(false)
  //   images(takeImage.length)
  // };
  const videoConstraints = {
    facingMode: "user"
  };
  const handleLogout = () => {
    AuthStorage.deauthenticateUser()
    navigate("/")
  }
  const handleVerify = () => {
    const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);
    const id = 1

    const token = {
      token: tokenID,
      is_verified: id
    };

    const body = xwwwFormUrlencoded(token);

    ApiPost("verifyprofile", body)
      .then((res: any) => {
        if (res.status === "true") {
          toast.success("Your Profile is Verified", {
            // position: toast.POSITION.TOP_CENTER,
            transition: cssTransition({
              enter: "animate__animated animate__bounceIn",
              exit: "animate__animated animate__bounceOut"
            })
          })
          navigate("/match_or_message")

        }

      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container mx-auto">
      <p className="header-text">Say cheese! Add a picture.</p>
      {

        // (
        <div className="setProfileImage mt-4 login">
          <p className="guidelines">Guidelines for the perfect picture:</p>
          <span className="span-text">
            -No shirtless or inappropriate pictures
          </span>

          <div className="note">
            <span>Thessalonians 5:22, Avoid every appearance of evil.</span>
          </div>

          <div className="take-picture mx-auto">

            <div >
              {
                camOpen ? <Webcam className="take-picture-hand" audio={false} ref={webcams} videoConstraints={videoConstraints} />
                  : <img
                    className="take-picture-hand"
                    src={"./assets/img/takePic.png"}
                    alt="image"
                  />
              }

            </div>

            <div className="camera" style={{ cursor: "pointer" }} onClick={openCamera}  >
              <img src="./assets/img/camera.png" alt="camera" />
            </div>
          </div>
          <div className="take-picture-text">
            <img src="./assets/img/Group27.png" alt="camera"
            // onClick={capture}
            />
            <p>
              live photo taken is only for verification purposes and will not be
              posted.
            </p>
          </div>
          <div>
            {openBtn && <Buttons
              children="Verify & See Your Profile"
              onClick={() => { handleVerify() }}
              ButtonStyle="login-btn animation onactive-btn"
            // disabled={openBtn}
            />}
            {/* <button disabled={openBtn} onClick={() => { handleVerify() }}>See Your Profile</button> */}
            <br /><br />
            {/* <Buttons
              children="Logout"
              onClick={() => { handleLogout() }}
              ButtonStyle="login-btn animation onactive-btn"
              disabled={false}
            /> */}
            {/* <button onClick={() => { handleLogout() }}>Logout</button> */}
          </div>
        </div>

        // )
        // : (
        //   <div className="verified">
        //     <figure>
        //       <img src="./assets/img/verified.png" alt="verified" />
        //     </figure>
        //     <br />
        //     <h5>Photo verified!</h5>
        //   </div>
        // )
      }
    </div>
  );
};

export default SetProfileImage;
