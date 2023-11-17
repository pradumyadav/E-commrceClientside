import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ContinueImg.css";

export default function ContinueImg() {
  const [data, setData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://e-commerce-hspl.onrender.com/api/top3")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImageIndex < data.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
      
        setCurrentImageIndex(0);
      }
    }, 4000); 

    return () => {
      clearInterval(interval); 
    };
  }, [currentImageIndex, data]);

  return (
    <nav className="top3">
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: index === currentImageIndex ? "block" : "none",
          }}
        >
          <img className="top3_Img" src={item.link} alt="Not Found" />
        </div>
      ))}
    </nav>
  );
}
