import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import PageWrapper from '../../components/PageWrapper';
import {navigate} from 'gatsby';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [copyIcon, setCopyIcon] = useState('fa-clipboard')

  const copyDummyCardNumber = () => {
    navigator.clipboard.writeText("4242424242424242");
    setCopyIcon('fa-check text-success');
    setTimeout(()=> setCopyIcon('fa-clipboard'), 3000);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }


  


    console.log('this is elements', elements)
    // // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }


    // // Create the PaymentIntent and obtain clientSecret from your server endpoint
    // // const res = await fetch('/create-intent', {
    // //   method: 'POST',
    // // });

    // // const {client_secret: clientSecret} = await res.json();

    // const {error} = await stripe.confirmPayment({
    //   //`Elements` instance that was used to create the Payment Element
    //   elements,
    //   clientSecret: 'test',
    //   confirmParams: {
    //     return_url: 'https://example.com/order/123/complete',
    //   },
    // });

    // if (error) {
    //   // This point will only be reached if there is an immediate error when
    //   // confirming the payment. Show error to your customer (for example, payment
    //   // details incomplete)
    //   setErrorMessage(error.message);
    // } else {
    //   // Your customer will be redirected to your `return_url`. For some payment
    //   // methods like iDEAL, your customer will be redirected to an intermediate
    //   // site first to authorize the payment, then redirected to the `return_url`.
    // }
    navigate('/registration-complete')
  };

  return (
    <>
    <p>Copy Test Card Number <span className="btn-sm border" onClick={copyDummyCardNumber} ><div className="tooltip"><span className='tooltiptext'>class</span></div><i className={`fas ${copyIcon}`}></i></span></p>
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" className='d-flex btn btn-primary mt-3 ml-auto' disabled={!stripe || !elements}>
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
    </>
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const StripePayment = () => (
    <PageWrapper>
  <Elements stripe={stripePromise} options={options} >
    <CheckoutForm />
  </Elements>
  </PageWrapper>
);

export default StripePayment;