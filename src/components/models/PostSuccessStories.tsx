import React from "react";
import { Button, Modal } from "react-bootstrap";
import '../../pages/success-stories/success-stories.css'

interface Props {
    show:boolean
    onhide:() => void
}

const PostSuccessStories = ({show,onhide}:Props) => {
  return (
    <div>
      
      <Modal show={show} centered onHide={onhide}  backdrop="static"
        keyboard={false}>
        <Modal.Header className="add-post-model-header">
          <h5>Success Story</h5>
        </Modal.Header>
        <Modal.Body>
          {/* Woohoo, you're reading this text in a modal! */}
          <textarea style={{width:"100%",}} className="add-post-model-body" rows={7} placeholder="Enter Your Success Stories"></textarea>

          </Modal.Body>
        <Modal.Footer className="add-post-model-footer">
          <Button variant="secondary" onClick={onhide}>
            Close
          </Button>
          <Button variant="primary" className="post-btn" onClick={onhide}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostSuccessStories;
