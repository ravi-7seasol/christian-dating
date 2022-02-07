import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { Modal } from 'react-bootstrap';

const Payment = (props) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        props.stripe.createToken()
        .then(payload => console.log(payload))
        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if (paymentMethod) {
            props.paymentDone(paymentMethod.id)
            props.onHide()
            console.log("paymentMethod", paymentMethod);
        }
        if (error) {
            console.log("error", error);
        }
    };

    return (
        <Modal
        show={props.show}
        onHide={props.onHide}
        centered>
            <Modal.Body>
                <div>
                    <form onSubmit={handleSubmit}>
                        <CardElement />
                        <button type="submit" disabled={!stripe || !elements}>
                            Pay
                        </button>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Payment;