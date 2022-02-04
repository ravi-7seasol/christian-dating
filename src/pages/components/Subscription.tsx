import React from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

interface Props {
    show: boolean;
    onHide: () => void;

}
const Subscription = ({ show, onHide, ...props }: Props) => {
    return (
        <>

            <Modal
                {...props}
                size="xl"
                // aria-labelledby="contained-modal-title-vcenter"
                show={show}
                centered
                onHide={onHide}
                className='subscription-modal'
            >
                {/* <Modal show={show} onHide={onHide}> */}
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
                <Modal.Body className='p-0'>
                    <div className="subscription-main">
                        <h1>SUBSCRIBE TO CONNECT WITH YOUR MATCHES</h1>
                        <Container>
                            <Row className="subscription-card-main">
                                <Col xs={6} className="subscription-card-col margin-bottom">
                                    <div className="subscription-card">
                                        <h1> 1 MONTH</h1>
                                        <p>Unlimited Match</p>
                                        <p>Unlimited Message</p>
                                        <p>Community Chat</p>
                                        <Button>BUY AT $19.99</Button>
                                    </div>
                                </Col>
                                <Col xs={6} className="subscription-card-col">
                                    <div className="subscription-card-2">
                                        <div className="subscription-header">
                                            <h1>MOST POPULAR</h1>
                                        </div>
                                        <div className="subscription-body">
                                            <h1> 3 MONTH</h1>
                                            <p>Unlimited Match</p>
                                            <p>Unlimited Message</p>
                                            <p>Community Chat</p>
                                            <Button>BUY AT $39.99</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Button variant="secondary" onClick={onHide} className='mb-2 mt-2'>
                                No Thanks
                            </Button>
                        </Container>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
};

export default Subscription;
