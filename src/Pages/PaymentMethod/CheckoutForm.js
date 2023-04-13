import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { CheckTokenExpiration, GetCurrentUser } from "../../components/components/components";
const apiLink ="http://localhost:8080/api/v1/user";

export default function CheckoutForm(props) {
  
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  
  useEffect(() => {
    if (!stripe) {
      return;
    }
  
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      return;
    }
  
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log("paymentIntent", paymentIntent.status);
      
      if (paymentIntent) {
        if (paymentIntent.status === "succeeded") {
          setMessage(
            <>
              Payment succeeded. If you need to pay again,{" "}
              <a href="/firstPageforHire">click here</a>.
              
            </>
          );

          
            // console.log(payment)
             // Create PaymentIntent as soon as the page loads
             async function fetchData() {
              console.log("amount")
               await CheckTokenExpiration();
               fetch(apiLink+"/paymentDetails", {
                 method: "PUT",
                 headers: { "Content-Type": "application/json",
                          "Authorization": `Bearer ${ GetCurrentUser().token}` },
                 body: JSON.stringify({ clientSecret:clientSecret   }),
               })
                 .then((res) => res.json())
                // .then((data) => setClientSecret(data.clientSecret));
                 console.log("clientSecret")
                 console.log(clientSecret)
             }
             
               fetchData();
             
          
         
          
        } else if (paymentIntent.status === "processing") {
          setMessage("Your payment is processing.");
        } else if (paymentIntent.status === "requires_payment_method") {
          setMessage("Your payment was not successful, please try again.");
        } else {
          setMessage("Something went wrong.");
        }
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("payment before setting up")
    
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
   
  
   // props.setPayment(true);
    setIsLoading(true);
  
    
    const { error } = await stripe.confirmPayment({
      elements,
     
      confirmParams: {
        // Make sure to change this to your payment completion page
        
        return_url: "http://localhost:3000/payments", 
        
        receipt_email: email,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

 
  
  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      
      <LinkAuthenticationElement
        id="link-authentication-element"
        onClick={(e) => setEmail(e.target.value)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}


