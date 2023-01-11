import { useNavigate } from "react-router-dom"

function Loginas(){

    const history = useNavigate();
    const getStarted=()=>{
            history('/welcome')
    }

    const getWork=()=>{
      history('/welcomeForWorker')
}

    return(
            <div style={{display : "flex" , flexDirection :'row' , alignItems: 'center', justifyContent: 'center'
            }}>
                
                <figure >
  <img class=" rounded-full " src="/images/I want to work.jpeg" alt="" width="300" height="500"/>
  
  <div class="pt-6 space-y-4">
   
    <figcaption class="font-medium">
      
      <div class="text-white text-center text-4xl">
       
       <button class="button text-white text-center text-4xl buttonS" onClick={()=>{getWork()}}> I want to work</button>
      </div>
    </figcaption>
  </div>
</figure>
<figure >
  <img class=" rounded-full " src="/images/I want to hire.jpeg" alt="" width="300" height="500"/>
  
  <div class="pt-6 space-y-4">
   
    <figcaption class="font-medium">
     
    <div class="text-white text-center text-4xl">
       
       <button class="button text-white text-center text-4xl buttonS" onClick={()=>{getStarted()}} > I want to hire</button>
      </div>
    </figcaption>
   
  </div>
</figure>

            </div>
    )

}export default Loginas