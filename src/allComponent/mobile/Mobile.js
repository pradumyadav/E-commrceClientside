import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import { NavLink } from "react-router-dom";
import "./Mobile.css";
import Footer from "../../footer/Footer";

export default function Mobile() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Track the current page

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`http://localhost:4001/api/mobile?page=${page}`)
      .then((res) => setData((prevData) => [...prevData, ...res.data]))
      .catch((err) => console.log(err));
  };

  const handleLoadMore = () => {
    console.log("Loading more...");
    
    setPage(page + 1);
  };

  const visibleData = data.slice(0, 9);

  return (
    <div>
      <Header />
      <div className="mobile_SubParent">
        <div className="mobile_Left">
          <h3 className="left_NavBar">
            <NavLink to="/iphone">IPHONE</NavLink>
          </h3>
          <h3 className="left_NavBar">
            <NavLink to="/infinix">INFINIX</NavLink>
          </h3>
          <h3 className="left_NavBar">
            <NavLink to="/vivo">VIVO</NavLink>
          </h3>
        </div>
        <div className="mobile_Right">
          {visibleData.map((item, index) => (
            <NavLink to={`/dynamic/${item.id}`} key={index}>
              <div className="mobileChild">
                <div>
                  <img className="mobile_Img" src={item.img} alt="Not Found" />
                </div>
                <div className="titel">{item.title}</div>
                <div className="price">&#8377;&nbsp;{item.price}</div>
              </div>
            </NavLink>
          ))}
          {data.length > 9 && (
          <button className="loadMoreBtn" onClick={handleLoadMore}>
           Load More
          </button>
)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
