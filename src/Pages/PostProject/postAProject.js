import React, { useState } from "react";
import MultipleSelectCheckmarks from "../../components/multiselector";

export default function PostAProject(){
    
  const names = [
    'Engineering',
    'Architecture',
    'Constructions',
   
  ];
  
const[showhide,setShowhide] = useState(" ");
const[showEngineering,setShowEngineering] = useState(false);


const handleshowEngineering=(e) =>{
 /*  if (e.target.checked) {
    setShowEngineering(true);
  }  */
  setShowEngineering(current => !current);
  
}
const handleshowhide=(event,checked) =>{
  const getuser  = event.target.value;
  setShowhide(getuser);
}
    return <div className="bg-slate-800">
       
<div class="bg-zinc-800" >
     
<div class="hidden sm:block" aria-hidden="true" >
  <div class="py-8">
    <div class="border-t border-gray-300"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-4">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6  text-white">Project Information</h3>
        <p class="mt-1 text-sm text-white">Use a permanent address where you can receive mail.</p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST" >
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class=" px-3 py-5 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium  text-sky-900">Project Title</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>

             {/*  <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div> */}
               
              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block  font-medium">Tell us more about your project</label>
                <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Eg:Drawing the plan for small house."></textarea>
              </div>
              </div>
              
              <div class="col-span-6 sm:col-span-5">
              <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              
              </div>
           
              
              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium  text-sky-900">Categories</label>
                
                

                <input  id = " mycheckbox" type="checkbox" value={showEngineering} onChange={(e)=>{handleshowEngineering(e)}}>
                  
                </input>
                <label class="text-sky-700">  Engineering</label>



                
                {
                showEngineering === true && (
                  <div>
                    <MultipleSelectCheckmarks data = {names}></MultipleSelectCheckmarks>
                   
       
                  </div>
                )
              }
               
              
                <label for="country" class="block text-sm font-medium text-gray-700 ">Full budget</label>
                <select  id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-sky-700" onChange={(e)=>{handleshowhide(e)}}>
                  <option>Micro Project($10.00 - 30.00 USD)</option>
                  <option>Simple Project($30.00 - 250.00 USD)</option>
                  <option>Very small project($250.00 - 750.00 USD)</option>
                  <option>Small project($750.00 - 1,500.00 USD)</option>
                  <option>Medium project($1,500.00 - 3,000.00 USD)</option>
                  <option>Large project($3,000.00 - 5, 000.00 USD)</option>
                  <option>Very Large project($10, 000.00 - 20,000.00 USD)</option>
                  <option>Huge project($20,000.00 - 50,000.00 USD)</option>
                  <option>Major project($50,000.00  + USD)</option>
                  <option value="1">Customize budget</option>
                </select>


              {
                showhide ==='1' && (
                  <div>
                   <div>
                        <label for="price" class="block text-sm font-medium text-gray-700">Minimum Price</label>
                              <div class="relative mt-1 rounded-md shadow-sm">
                      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input type="number" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00"/>
                      <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                          <option>USD</option>
                          <option>CAD</option>
                          <option>EUR</option>
                        </select>
                      </div>
                   </div>
                    </div>

                    <div>
                        <label for="price" class="block text-sm font-medium text-gray-700">Maximum Price</label>
                              <div class="relative mt-1 rounded-md shadow-sm">
                      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input type="number" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00"/>
                      <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                          <option>USD</option>
                          <option>CAD</option>
                          <option>EUR</option>
                        </select>
                      </div>
                   </div>
                    </div>
                  </div>
                  
                )
              }

           
                
              </div>

              

              

            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Post the Project</button>
          </div>
        </div>
        
      </form>
    </div>
   


</div>


</div>


</div>

    </div>
   
}