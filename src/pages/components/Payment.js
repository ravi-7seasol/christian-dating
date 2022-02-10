import { useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';

const Payment = (props) => {
    // const Stripe = useStripe()
    // const [cardDetails, setCardDetails] = useState({
    //     name: '',
    //     email: '',
    //     cardNumber: 0,
    //     month: 0,
    //     year: 0,
    //     cvv: 0,
    // });

    // const handleChange = (e) => {
    //     setCardDetails({
    //         ...cardDetails,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const submit = (e) => {
    // e.preventDefault()
    // console.log("====");
    // Stripe.createToken({
    //     number: cardDetails.cardNumber,
    //     cvc: cardDetails.cvv,
    //     exp_month: cardDetails.month,
    //     exp_year: cardDetails.year
    //   });
    // }

    useEffect(() => {
      console.log("props.price",props.pkgData);
    }, [props.pkgData])
    

    const onToken = (token) => {
        console.log("token", token)
        props.paymentDone(token)
        props.onHide()
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            centered>
            <Modal.Body>
                <StripeCheckout
                    token={onToken}
                    stripeKey="pk_test_Vq7vPui3v2LZPWCzT9LBeaVv00RAS7HwZ1"
                    amount={props.pkgData * 100}
                    currency="USD"
                    // stripeKey="sk_test_TMbUaFbCy6vreanBfGa64frP00mxfxxHiv"
                />
                {/* <form id="paymentFrm" >
                    <input type='text' placeholder='Enter Name' id="name" name='name' onChange={(e) => handleChange(e)} value={cardDetails.name} />
                    <input type='email' placeholder='Enter Email' id="email" name='email' onChange={(e) => handleChange(e)} value={cardDetails.email} />
                    <input type='number' placeholder='Enter Card Number' id="card-number" name='cardNumber' onChange={(e) => handleChange(e)} value={cardDetails.cardNumber} />
                    <input type='number' placeholder='Enter Month' id="card-expiry-month" name='month' onChange={(e) => handleChange(e)} value={cardDetails.month} />
                    <input type='number' placeholder='Enter Year' id="card-expiry-year" name='year' onChange={(e) => handleChange(e)} value={cardDetails.year} />
                    <input type='number' placeholder='Enter CVV' id="card-cvc" name='cvv' onChange={(e) => handleChange(e)} value={cardDetails.cvv} />
                    <button type='submit' id="payBtn" >Submit</button>
                </form> */}
            </Modal.Body>
        </Modal>

    );
};

export default Payment;