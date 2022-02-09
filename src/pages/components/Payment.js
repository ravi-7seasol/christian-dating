import { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Payment = (props) => {
    const [cardDetails, setCardDetails] = useState({
        name: '',
        email: '',
        cardNumber: 0,
        month: 0,
        year: 0,
        cvv: 0,
    });

    const handleChange = (e) => {
        setCardDetails({
            ...cardDetails,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log("====");
    }

    return (
        <Modal
        show={props.show}
        onHide={props.onHide}
        centered>
            <Modal.Body>
                <form id="paymentFrm" onSubmit={() => submit()}>
                    <input type='text' placeholder='Enter Name' id="name" name='name' onChange={(e) => handleChange(e)} value={cardDetails.name} />
                    <input type='email' placeholder='Enter Email' id="email" name='email' onChange={(e) => handleChange(e)} value={cardDetails.email} />
                    <input type='number' placeholder='Enter Card Number' id="card-number" name='cardNumber' onChange={(e) => handleChange(e)} value={cardDetails.cardNumber} />
                    <input type='number' placeholder='Enter Month' id="card-expiry-month" name='month' onChange={(e) => handleChange(e)} value={cardDetails.month} />
                    <input type='number' placeholder='Enter Year' id="card-expiry-year" name='year' onChange={(e) => handleChange(e)} value={cardDetails.year} />
                    <input type='number' placeholder='Enter CVV' id="card-cvc" name='cvv' onChange={(e) => handleChange(e)} value={cardDetails.cvv} />
                    <button type='submit' id="payBtn" >Submit</button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default Payment;