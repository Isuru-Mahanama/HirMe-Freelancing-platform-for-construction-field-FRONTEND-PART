import { useNavigate } from "react-router-dom"
import './image.css';
import { useLocation } from "react-router-dom";

function Loginas(props){
    const apiLink ="http://localhost:8080/api/v1/user";
    const history = useNavigate();
    const location = useLocation();
    const email = location.state.email;
    console.log(email);
    const getStarted=(e)=>{
            e.preventDefault();

            
            const user={email:email};
            fetch(apiLink +"/setUpClient",{
              method :"POST",
              headers: { "Content-Type": "application/json" },
              body:JSON.stringify(user)

            })
            .then(res => res.json())
            .then(data => {
            console.log(data);
            if (data.success) {
                console.log("Account type is added.");
                history('/welcome',{ state: { email: email } });
            } else {
                console.log("Error:", data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

    const getWork=()=>{
      history('/welcomeForWorker')
}

    return(
            <div className="img-cneter">
            <figure >
              <img class=" rounded-full " src="/images/I want to work.jpeg" alt="" width="300" height="500"/>
                
                <figcaption class="font-medium">
                  <div class=" text-center text-4xl">
                      <button class="button  buttonS" onClick={()=>{getWork()}}> I want to work</button>
                  </div>
                </figcaption>
                
            </figure>
            <figure >
              <img class=" rounded-full " src="/images/I want to hire.jpeg" alt="" width="300" height="500"/>
  
            
                <figcaption class="font-medium">
                  <div class=" text-center text-4xl">
                      <button class="button  buttonS" onClick={(e)=>{getStarted(e)}} > I want to hire</button>
                  </div>
                </figcaption>
            
            </figure>
            </div>
    )

}export default Loginas