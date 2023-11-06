import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

export default function Dynamic() {
  const {id} = useParams();
  const newid= parseInt(id)
  console.log(newid)
//   const idRef = useRef(id);



  const [mobileData, setMobileData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4001/api`)
      .then((res) => setMobileData(res.data))  
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
     
      {
        mobileData.filter((item)=>item.id===newid).map((item,index)=>{
            return(
                <div key={index}>
                    {/* <div><img src={item.img}/></div>
                    <div>{item.title}</div> */}
                </div>
            )
        })
      }
    </div>
  );
}