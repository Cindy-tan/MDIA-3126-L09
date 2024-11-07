"use client";

import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState(null);
  // TODO
  //
  // - Button that fetches
  // x Container for the button
  // - Container for displaying content (empty, loading, fullfilled states)
  // - Fetch content (handle and format content)
  // - Store my content somewhere
  // - Error handling
  // - Styling
  // - Breakpoints (mobile-first methodology)
  // - function to clear the data

  async function fetchImages() {
      const API_URL = "https://picsum.photos/v2/list?limit=5";
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      // const debuggerVar = "test var";
      // debugger;
      // const moreDebuggerVar = "another test var";
      // console.log("button clicked");
      // alert("button clicked");
      setImageData(data);
      setLoading(false);
  }

  const Header = () => {
    return (
      <section> 
      <h1>Midterm app</h1>
      <button 
        className='border-2 border-black p-2'
        onClick={fetchImages}
      >
        Fetch
      </button>
    </section>
    );
  };



  const ImageListContainer = () => {
    if(loading) {
      return <section> Loading... </section>
    }
    if(imageData) {
      const imageListItems = [];

      imageData.forEach((image, i) => {
// author: "Alejandro Escamilla"
// download_url: "https://picsum.photos/id/0/5000/3333"
// height: 3333
// id:"0"
// url:"https://unsplash.com/photos/yC-Yzbqy7PY"
// width:5000
        imageListItems.push(<article key={image.id}>
          <img src={image.download_url} />
          <p>Author: {image.author}</p>
          <a href={image.url}>View this image on Unsplash! This API HAS BAD DOCUMENTATION</a>
          <hr/>
        </article>)
      });

      return <section>{imageListItems}</section>;

      return (
        <section>
          Here is my where my images will go when I have actual data!
        </section>
      )
    }
    return <section>No images fetched! </section>
  };

  return (
    <div className='m-2'>
    <Header/>
    <ImageListContainer/>
  </div>
  );
  
}