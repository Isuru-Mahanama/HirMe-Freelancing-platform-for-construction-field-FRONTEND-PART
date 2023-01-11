import { useNavigate } from "react-router-dom";
import ProgressCircle from "../../components/progressBar";

const FirstPageForHire = () => {
    let history = useNavigate();
    
    const handleSignUp=()=>{
        
        history("/setuphire");
    }
    const handlePortfolio=()=>{
        
        history("/portfolio");
    }
    
    
    return ( 
        <div >
        <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true" >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
      
        <div class="pointer-events-auto relative w-screen max-w-md">
         
          <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
            <button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
              <span class="sr-only">Close panel</span>
             
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
            <div class="px-4 sm:px-6" style={{marginTop :'2cm'}}>
              <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Profile</h2>
             
             
            </div>
            <div class="relative mt-6 flex-1 px-4 sm:px-6">
           
              <div class="absolute inset-0 px-4 sm:px-6">
             
                <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
                
                <ProgressCircle progress={50} />

                <button class="button" onClick={()=>handleSignUp()}>Set Up Your Account!!!...</button>
                <button class="button" onClick={()=>handlePortfolio()}>Portfolio</button>
                </div>
               
              </div>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>

           
           
            
        
        </div>
     );
}
 
export default FirstPageForHire ;

