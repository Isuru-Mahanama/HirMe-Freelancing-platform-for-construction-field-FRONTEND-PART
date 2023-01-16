import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 import './payment.css'
 
export default class TakeMoney extends React.Component {
  onToken = (token) => {
     fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    }); 
  }
 
  // ...
 
  render() {
    return (
      // ...

      <div className='bg-color'>
       
       <div className="pay-flex">
      <StripeCheckout className ="pay-1  "
        token={this.onToken}
        name ="HiReMe"
        stripeKey="pk_test_51MQ5hTKYmWyAbs5BZko4UOdosGto33V23osqJrqryWb5s3kibAu6CzaK5y7PNfvw7abDMczjWTZ2ugLGkVhP2NHa00J9CMJVh1"
      />
       
      
      </div>
      
      </div>
    )
  }
}