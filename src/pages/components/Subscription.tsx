import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { ApiPost } from '../../helper/API/ApiData';

interface Props {
    show: boolean;
    onHide: () => void;
    packageData:any;
    packageData2:any;

}
const Subscription = ({ show, onHide, packageData, packageData2, ...props }: Props) => {
    const [packages, setPackages] = useState<any>();

    useEffect(() => {
        let body = "";
        ApiPost("getpackages", body)
            .then((res: any) => {
                console.log("res", res)
                setPackages(res.packages)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleClick = () => {        
        packageData(packages[0])
    }

    const handleClick2 = () => {
        packageData2(packages[1])
    }

    return (
        <>

            {packages && <Modal
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
                            <Row className="subscription-card-main">{
                                packages?.map((data: any, i: number) => (
                                    data.is_popular === "0" ?
                                        <Col md={6} className="subscription-card-col margin-bottom">
                                            <div className="subscription-card">
                                                <h1>{data.title}</h1>
                                                {data.features.split(',').map((name: any, i: number) => (
                                                    <p>{name}</p>
                                                ))}
                                                {/* <Button>BUY AT ${data.price}</Button> */}
                                                <button onClick={()=>handleClick()}>BUY AT ${data.price}</button>
                                            </div>
                                        </Col> : <Col md={6} className="subscription-card-col">
                                            <div className="subscription-card-2">
                                                <div className="subscription-header">
                                                    <h1>MOST POPULAR</h1>
                                                </div>
                                                <div className="subscription-body">

                                                    <h1>{data.title}</h1>
                                                    {data.features.split(',').map((name: any, i: number) => (
                                                        <p>{name}</p>
                                                    ))}
                                                    {/* <Button>BUY AT ${data.price}</Button> */}
                                                    <button onClick={() => handleClick2()}>BUY AT ${data.price}</button>
                                                </div>
                                            </div>
                                        </Col>
                                ))
                            }


                            </Row>
                            <Button variant="secondary" onClick={onHide} className='mb-2 mt-2'>
                                No Thanks
                            </Button>
                        </Container>
                    </div>
                </Modal.Body>
            </Modal>}

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
