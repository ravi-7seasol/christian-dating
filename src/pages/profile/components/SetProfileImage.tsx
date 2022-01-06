import React, { useState } from "react";
import Webcam from "react-webcam";


const SetProfileImage = ({ stepDone }: any) => {
  const [photo, setPhoto] = useState();
  const [camOpen, setCamOpen] = useState(false);

  const openCamera = () => {
    setCamOpen(true);
  }
  return (
    <>
      <p className="header-text">Say cheese! Add a picture.</p>
      {stepDone === 4 ? (
        <div className="setProfileImage mt-4">
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
                camOpen?<Webcam className="take-picture-hand" audio={false} screenshotFormat="image/jpeg" />: <img
              className="take-picture-hand"
              src="./assets/img/takePic.png"
              alt="image"
            />
              }
               
            </div>
             
            <div className="camera">
              <img src="./assets/img/camera.png" alt="camera" onClick={openCamera} />
            </div>
          </div>
          <div className="take-picture-text">
            <img src="./assets/img/Group27.png" alt="camera" />
            <p>
              live photo taken is only for verification purposes and will not be
              posted.
            </p>
          </div>
        </div>
      ) : (
        <div className="verified">
          <figure>
            <img src="./assets/img/verified.png" alt="verified" />
          </figure>
          <br />
          <h5>Photo verified!</h5>
        </div>
      )}
    </>
  );
};

export default SetProfileImage;
