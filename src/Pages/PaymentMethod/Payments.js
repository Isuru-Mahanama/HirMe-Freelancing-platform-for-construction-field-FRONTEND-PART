import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SearchBar from "../../components/components/searchbar";
import CheckoutForm from "./CheckoutForm";
import { CheckTokenExpiration, GetCurrentUser } from "../../components/components/components";
const apiLink ="http://localhost:8080/api/v1/user";
//http://localhost:3000/checkout?payment_intent_client_secret=<CLIENT_SECRET>

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe("pk_test_51MQ5hTKYmWyAbs5BZko4UOdosGto33V23osqJrqryWb5s3kibAu6CzaK5y7PNfvw7abDMczjWTZ2ugLGkVhP2NHa00J9CMJVh1");

export default function TakeMoney() {
  const [clientSecret, setClientSecret] = useState("");
  const [amount,setamount] = useState('333');

  const[projects,setProjects] = useState([]);
  const [minimumAmount,setMinimumAmount] = useState('');
  const [search,setSearch] = useState([]);

  const sendingAmountofMoney=(e)=>{
    console.log(e.target.value)
      setamount(e.target.value);
  }
  async function fetchData(query,prize,projectID) {
    console.log("props")
      console.log(query)
      console.log(prize)
      console.log(projectID)
    await CheckTokenExpiration();
    fetch(apiLink+"/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json",
               "Authorization": `Bearer ${ GetCurrentUser().token}` },
      body: JSON.stringify({ items: [{ id: projectID  }],
                     amount:prize, projectID:projectID   }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
      console.log("clientSecret")
      console.log(clientSecret)
  }
  
  const fetchProjectsDetails=()=>{
    const values = projects.map((item) => item.projectTitle  );
    console.log(projects)
    setSearch(values);
  }
  
  async function fetchProject() {
      
    await CheckTokenExpiration();
    const response = await fetch(apiLink+"/CientPostedProjects", {
      method: "GET",
      headers: { "Content-Type": "application/json",
               "Authorization": `Bearer ${ GetCurrentUser().token}` }
      
    })
      
        const data = await response.json();
     //     const values = data.map((item) => item.projectTitle);
          
        // console.log(data.projects);
         console.log("Project Details");
         setProjects(data.Projects );
         fetchProjectsDetails();
         console.log(projects)
        //  console.log(values);
    
      
  }

  useEffect(() => {
   // console.log(payment)
    // Create PaymentIntent as soon as the page loads
      fetchProject();
      //console.log(projectTitle)
      //fetchData();
    
  },[] );

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  console.log(search)
  return (
    <div className="App">
        <SearchBar options={projects} fetchData={fetchData} ></SearchBar>
      
        {clientSecret ? (
         
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm  />
        </Elements>
      ) : (
        <p>Loading payment form...</p>
      )}
    </div>
  );
}