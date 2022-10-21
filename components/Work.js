import React from "react";
import userData from "@constants/data";

export default function Work() {
    return (
        <section className="bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
            <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
             Pick Up
            </h1>
          </div>
          <div>
            <img className="max-w-3xl h-auto rounded-xl mx-auto" src={userData.pickupui} />
            </div>
          <div className="bg-white -mt-10 dark:bg-gray-900">
            <div className="text-container max-w-6xl mx-auto pt-20">
              <p
                className="leading-loose text-xl md:text-6xl font-medium "
                style={{ lineHeight: "6rem" }}
                
              >
                {userData.work.title}
                
                
              </p>

              <p
                className="text-xl text- text-gray-700 mb-4 dark:text-gray-300"
        
              >
                {userData.work.description}

              </p>
              
        <section className="bg-[#ADD8E6] h-48 rounded-xl drop-shadow-lg dark:bg-gray-800"  >  
    
          <div className="text-center max-w-xs mx-auto pt-20">
              <p
                className="leading-loose text-xl md:text-6xl font-bold"
                style={{ lineHeight: "2rem"}}
              >
                {userData.work.process}
              
              </p>

            </div>
            
             
           </section> 

            </div>
          </div>
          <section className="bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto h-64 bg-white dark:bg-gray-800">
              <div className="text-left pt-20 ">
                <p className="text-xl md:text-4xl underline decoration-red-50">
                  Research

                </p>
              <div className="text-xl">
                <ul className="list-disc list-outside pt-4 leading-8">
                  <li>User Research</li>
                  <li>User Analytics</li>
                  <li>User Painpoints</li>



                </ul>


              </div>
              </div>
            
          </div>




          </section>
          </section>
        
    
  );
}
    