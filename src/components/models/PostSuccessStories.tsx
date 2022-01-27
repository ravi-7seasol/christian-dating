import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import STORAGEKEY from "../../config/APP/app.config";
import { ApiPost } from "../../helper/API/ApiData";
import AuthStorage from "../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../helper/utils";
import '../../pages/success-stories/success-stories.css'

interface Props {
  show: boolean
  onhide: () => void
  refresh: () => void
}

const PostSuccessStories = ({ show, onhide, refresh }: Props) => {

  const [postStoryData, setPostStoryData] = useState<any>({ title: "", story: "" })

  const handleOnChange = (e: any) => {
    setPostStoryData({...postStoryData, [e.target.name]: e.target.value })
  }
  const postData = () => {
    if (postStoryData.title !== "" && postStoryData.story !== "") {
      const data = {
        token: AuthStorage.getStorageData(STORAGEKEY.token),
        title: postStoryData.title,
        description: postStoryData.story
      }
      const body = xwwwFormUrlencoded(data);
      ApiPost('poststories', body)
        .then((res: any) => {          
          refresh()
        }).catch((error) => {
          console.log(error);

        })
      onhide()
    }
  }
  return (
    <div>

      <Modal show={show} centered onHide={onhide} backdrop="static"
        keyboard={false}>
        <Modal.Header className="add-post-model-header">
          <h5>Success Story</h5>
        </Modal.Header>
        <Modal.Body>
          {/* Woohoo, you're reading this text in a modal! */}
          <input className="add-post-model-body mb-3" placeholder="Enter Your Title" name="title" onChange={(e) => handleOnChange(e)} />

          <textarea className="add-post-model-body" rows={7} placeholder="Enter Your Success Stories" name="story" onChange={(e) => handleOnChange(e)}></textarea>

        </Modal.Body>
        <Modal.Footer className="add-post-model-footer">
          <Button variant="secondary" onClick={onhide}>
            Close
          </Button>
          <Button variant="primary" className="post-btn" onClick={postData}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div >
  );
};

export default PostSuccessStories;
