import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import "./Dynamic.css"
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Dynamic() {
  const {id} = useParams();
  const newid= parseInt(id)
  console.log(newid)
//   const idRef = useRef(id);



  const [mobileData, setMobileData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://e-commerce-hspl.onrender.com/api/findData`)
      .then((res) => setMobileData(res.data))  
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <Header/>
     
      {
        mobileData.filter((item)=>item.id===newid).map((item,index)=>{
            return(
               
                <div className="dynamic_Child1" key={index}>

                    <div><img className="dynamic_Img" src={item.img} alt="Not Found"/></div>
                    <div>

                   <h1 className="display_Title">{item.title}..</h1> 
                    <p className="display_Des">{item.description}</p>
                    </div>

                    </div>
              
                
            )
        })
      }
      <Footer/>
    </div>
  );
}