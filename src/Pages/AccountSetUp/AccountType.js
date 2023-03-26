import { useNavigate } from "react-router-dom"
import './image.css';
import { CheckTokenExpiration, GetCurrentUser } from "../../components/components/components";

const apiLink ="http://localhost:8080/api/v1/user";
function Loginas(props){
    
    const history = useNavigate();
    
   // const token = GetCurrentUser();

   const getStarted = async (e) => {
       await CheckTokenExpiration();
             const user={};
            fetch(apiLink +"/setUpClient",{
              method :"POST",
              headers: { "Content-Type": "application/json",
                          "Authorization": `Bearer ${ GetCurrentUser().token}`},
              body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
            console.log(data);
            if (data.success) {
                console.log("Account type is added.");
                history('/welcome');
            } else {
                console.log("Error:", data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
    const getWork = async (e) => {
      await CheckTokenExpiration();
      const user={};
     fetch(apiLink +"/setUpFreelancer",{
       method :"POST",
       headers: { "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${ GetCurrentUser().token}`},
       body:JSON.stringify(user)
     })
     .then(res => res.json())
     .then(data => {
     console.log(data);
     if (data.success) {
         console.log("Freelancer Account is added.");
         history('/welcomeForWorker' );
     } else {
         console.log("Error:", data.message);
     }
    })
    .catch(error => {
     console.error("Error:", error);
    });
    }
   

    return(
            <div className="img-cneter">
            <figure >
              <img className=" rounded-full " src="/images/I want to work.jpeg" alt="" width="300" height="500"/>
                
                <figcaption className="font-medium">
                  <div className=" text-center text-4xl">
                      <button className="button  buttonS" onClick={(e)=>{getWork(e)}}> I want to work</button>
                  </div>
                </figcaption>
                
            </figure>
            <figure >
              <img className=" rounded-full " src="/images/I want to hire.jpeg" alt="" width="300" height="500"/>
  
            
                <figcaption className="font-medium">
                  <div className=" text-center text-4xl">
                      <button className="button  buttonS" onClick={(e)=>{getStarted(e)}} > I want to hire</button>
                  </div>
                </figcaption>
            
            </figure>
            </div>
    )

}export default Loginas