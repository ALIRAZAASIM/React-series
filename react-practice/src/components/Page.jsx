import React from "react";
import { useState } from "react";
import axios from "axios";
function Page() {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
    } catch (error) {
      console.error("Erorr");
    }
  };
  return (
    <>
      <div className="text-center mt-10 text-3xl font-bold text-blue-400">
        This is the Page Component in which images are shows
        <br />
        when we click on given below button!
      </div>
      <button
        className="bg-blue-500 text-white px-4 font-bold py-2.5 rounded-xl mx-7 hover:bg-black"
        onClick={getImages}
      >
        click me
      </button>
      <div className="px-10">
        {images.map((ele, i) => {
          return (
            <img
              className="m-10 inline-block rounded"
              src={ele.download_url}
              height="300"
              width="300"
              key={i}
            />
          );
        })}
      </div>
    </>
  );
}

export default Page;
