import React from "react";
import userData from "@constants/data";

export default function Artwork() {
    return (
        <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Artwork
          </h1>
        </div>
        <div className="p-8 justify-self-center">
            <img className="rounded-lg" src={userData.artwork.imgUrl}>

            </img>
        <div className="my-8">
            <img className="rounded-lg" src={userData.artwork.crossImg}>
            
            </img>
          
        </div>
      </div>
    </section>
    );
}
